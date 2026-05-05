import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey, X-Admin-Secret",
};

const ADMIN_SECRET = Deno.env.get("BLOG_ADMIN_SECRET") ?? "gemportalassist2026";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const adminSecret = req.headers.get("X-Admin-Secret");
    if (adminSecret !== ADMIN_SECRET) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const ext = file.name.split(".").pop() ?? "jpg";
    const fileName = `${crypto.randomUUID()}.${ext}`;
    const arrayBuffer = await file.arrayBuffer();

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, arrayBuffer, { contentType: file.type, upsert: false });

    if (error) throw error;

    const { data: urlData } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);

    return new Response(JSON.stringify({ url: urlData.publicUrl }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
