import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  try {
    const { code } = await req.json();
    const clean = String(code || "").trim().toUpperCase();
    if (!clean) return Response.json({ error: "Missing code" }, { status: 400 });
    const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data } = await db.from("academy_login_codes").select("auth_email").eq("code", clean).eq("active", true).maybeSingle();
    if (!data) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ email: data.auth_email });
  } catch (e) { return Response.json({ error: String(e?.message || e) }, { status: 400 }); }
});
