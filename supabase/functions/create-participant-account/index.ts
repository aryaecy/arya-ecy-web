import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  try {
    const authHeader = req.headers.get("Authorization") || "";
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
    const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const caller = createClient(supabaseUrl, anon, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await caller.auth.getUser();
    if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });
    const adminDb = createClient(supabaseUrl, service);
    const { data: profile } = await adminDb.from("profiles").select("role").eq("id", user.id).maybeSingle();
    if (!profile || !["system_admin", "company_admin"].includes(profile.role)) return Response.json({ error: "Forbidden" }, { status: 403 });

    const body = await req.json();
    const tc = String(body.tc || "").replace(/\D/g, "");
    const password = String(body.password || "");
    if (tc.length !== 11 || password.length < 6) return Response.json({ error: "T.C. Kimlik No 11 hane ve şifre en az 6 karakter olmalıdır." }, { status: 400 });
    const email = body.email || `${tc}@participant.arya.local`;
    const { data: created, error } = await adminDb.auth.admin.createUser({ email, password, email_confirm: true, user_metadata: { full_name: body.name || "Katılımcı" } });
    if (error && !String(error.message).toLowerCase().includes("already")) throw error;
    const authUser = created?.user || (await adminDb.auth.admin.listUsers()).data.users.find(u => u.email === email);
    if (!authUser) throw new Error("Auth user could not be resolved");
    await adminDb.from("profiles").upsert({ id: authUser.id, email, full_name: body.name || "Katılımcı", role: "participant", company_id: body.companyId || null });
    await adminDb.from("academy_login_codes").upsert({ code: tc.toUpperCase(), auth_email: email, account_type: "participant", company_id: body.companyId || null, participant_ref: authUser.id, active: true, updated_at: new Date().toISOString() });
    return Response.json({ ok: true, email, userId: authUser.id });
  } catch (e) {
    return Response.json({ error: String(e?.message || e) }, { status: 400 });
  }
});
