import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
    const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const authHeader = req.headers.get("Authorization") || "";
    const caller = createClient(supabaseUrl, anon, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await caller.auth.getUser();
    if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });
    const body = await req.json();
    const version = String(body.version || "");
    const noticeAccepted = Boolean(body.noticeAccepted);
    const explicitConsent = Boolean(body.explicitConsent);
    if (!noticeAccepted) return Response.json({ error: "Aydinlatma metni onayi gereklidir." }, { status: 400 });
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || null;
    const ua = req.headers.get("user-agent") || null;
    const requestId = req.headers.get("x-request-id") || crypto.randomUUID();
    const db = createClient(supabaseUrl, service);
    const { data: profile } = await db.from("profiles").select("company_id").eq("id", user.id).maybeSingle();
    const acceptedAt = new Date().toISOString();
    const payload = `${user.id}|${profile?.company_id || ""}|${version}|${noticeAccepted}|${explicitConsent}|${acceptedAt}|${ip || ""}|${ua || ""}|${requestId}`;
    const hash = hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload)));
    const { data, error } = await db.from("kvkk_consent_evidence").insert({ user_id: user.id, company_id: profile?.company_id || null, notice_version: version, explicit_consent: explicitConsent, accepted_at: acceptedAt, ip_address: ip, user_agent: ua, request_id: requestId, evidence_hash: hash }).select("id,accepted_at,request_id,evidence_hash").single();
    if (error) throw error;
    return Response.json({ id: data.id, userId: user.id, companyId: profile?.company_id || null, version, acceptedAt: data.accepted_at, requestId: data.request_id, evidenceHash: data.evidence_hash, channel: "supabase-edge-function" });
  } catch (e) { return Response.json({ error: String(e?.message || e) }, { status: 400 }); }
});
