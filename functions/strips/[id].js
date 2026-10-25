// GET /strips/:id  — the strip image itself
export async function onRequestGet({ params, env }) {
  if (!env.STRIPS) return new Response("Storage not set up", { status: 503 });
  const key = String(params.id).replace(/\.(png|jpe?g)$/i, "");
  const { value, metadata } = await env.STRIPS.getWithMetadata(key, { type: "arrayBuffer" });
  if (!value) return new Response("That strip has expired.", { status: 404 });
  const type = (metadata && metadata.type) || "image/jpeg";
  return new Response(value, { headers: { "Content-Type": type, "Cache-Control": "public, max-age=3600", "Content-Disposition": `inline; filename="party-strip-${key}.${type === "image/png" ? "png" : "jpg"}"` } });
}
