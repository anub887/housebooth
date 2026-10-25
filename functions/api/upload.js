// POST /api/upload  — body: image/jpeg or image/png bytes. Stores the strip for 24h, returns {id, url}.
const MAX_BYTES = 6 * 1024 * 1024;
const TTL = 60 * 60 * 24;

function id() {
  const a = "abcdefghjkmnpqrstuvwxyz23456789";
  let s = "";
  const r = crypto.getRandomValues(new Uint8Array(8));
  for (let i = 0; i < 8; i++) s += a[r[i] % a.length];
  return s;
}

export async function onRequestPost({ request, env }) {
  if (!env.STRIPS) return new Response("Storage not set up", { status: 503 });
  const len = Number(request.headers.get("content-length") || 0);
  if (len <= 0 || len > MAX_BYTES) return new Response("Bad size", { status: 413 });
  const buf = await request.arrayBuffer();
  if (buf.byteLength > MAX_BYTES) return new Response("Too large", { status: 413 });
  const b = new Uint8Array(buf.slice(0, 4));
  const isPng = b[0] === 0x89 && b[1] === 0x50;
  const isJpg = b[0] === 0xff && b[1] === 0xd8;
  if (!isPng && !isJpg) return new Response("Not an image", { status: 400 });
  const key = id();
  await env.STRIPS.put(key, buf, { expirationTtl: TTL, metadata: { type: isPng ? "image/png" : "image/jpeg", t: Date.now() } });
  const url = new URL(request.url);
  return Response.json({ id: key, url: `${url.origin}/s/${key}` });
}

export async function onRequestOptions() {
  return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" } });
}
