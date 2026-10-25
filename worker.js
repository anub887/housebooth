// House Booth worker: serves the static site and handles QR strip sharing.
// Strips live in Workers KV (binding STRIPS) and expire after 24 hours.
const MAX_BYTES = 6 * 1024 * 1024;
const TTL = 60 * 60 * 24;

function newId() {
  const a = "abcdefghjkmnpqrstuvwxyz23456789";
  let s = "";
  const r = crypto.getRandomValues(new Uint8Array(8));
  for (let i = 0; i < 8; i++) s += a[r[i] % a.length];
  return s;
}

async function upload(request, env) {
  if (!env.STRIPS) return new Response("Storage not set up", { status: 503 });
  const len = Number(request.headers.get("content-length") || 0);
  if (len <= 0 || len > MAX_BYTES) return new Response("Bad size", { status: 413 });
  const buf = await request.arrayBuffer();
  if (buf.byteLength > MAX_BYTES) return new Response("Too large", { status: 413 });
  const b = new Uint8Array(buf.slice(0, 4));
  const isPng = b[0] === 0x89 && b[1] === 0x50;
  const isJpg = b[0] === 0xff && b[1] === 0xd8;
  if (!isPng && !isJpg) return new Response("Not an image", { status: 400 });
  const key = newId();
  await env.STRIPS.put(key, buf, { expirationTtl: TTL, metadata: { type: isPng ? "image/png" : "image/jpeg", t: Date.now() } });
  const url = new URL(request.url);
  return Response.json({ id: key, url: `${url.origin}/s/${key}` });
}

async function strip(key, env) {
  if (!env.STRIPS) return new Response("Storage not set up", { status: 503 });
  key = key.replace(/\.(png|jpe?g)$/i, "");
  const { value, metadata } = await env.STRIPS.getWithMetadata(key, { type: "arrayBuffer" });
  if (!value) return new Response("That strip has expired.", { status: 404 });
  const type = (metadata && metadata.type) || "image/jpeg";
  const ext = type === "image/png" ? "png" : "jpg";
  return new Response(value, { headers: { "Content-Type": type, "Cache-Control": "public, max-age=3600", "Content-Disposition": `inline; filename="party-strip-${key}.${ext}"` } });
}

async function guest(key, env) {
  let exists = false, type = "image/jpeg";
  if (env.STRIPS) {
    const m = await env.STRIPS.getWithMetadata(key, { type: "stream" });
    exists = !!m.value;
    if (m.metadata && m.metadata.type) type = m.metadata.type;
  }
  const ext = type === "image/png" ? "png" : "jpg";
  const body = exists ? `
    <p class="hint">Long-press the strip to save it to your photos.</p>
    <img src="/strips/${key}.${ext}" alt="Your photo strip">
    <a class="btn" href="/strips/${key}.${ext}" download="party-strip-${key}.${ext}">Download</a>
    <small>This link disappears after 24 hours.</small>` : `
    <p class="hint">This strip has expired or the link is wrong.</p>
    <small>Strips are kept for 24 hours, then deleted.</small>`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Your strip</title>
<style>
:root{color-scheme:dark}*{box-sizing:border-box}
body{margin:0;background:linear-gradient(180deg,#0A1C36,#150B3D 50%,#2B0F5C);min-height:100vh;color:#FFF1DA;font-family:"Helvetica Neue",Arial,sans-serif;text-align:center;
  padding-block:30px 40px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
h1{font-family:Georgia,serif;font-weight:500;font-size:30px;margin:0 0 6px;color:#F6D27A}
.hint{color:#B7A8E3;margin:6px 0 18px;font-size:15px}
img{max-width:100%;width:min(100%,420px);border-radius:6px;box-shadow:0 20px 50px rgba(0,0,0,.6);display:block;margin:0 auto}
.btn{display:inline-block;margin-top:22px;background:linear-gradient(100deg,#FFA62B,#F0407A);color:#2B1500;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:999px}
small{display:block;margin-top:16px;color:#B7A8E3}
footer{margin-top:34px;font-size:13px;color:#B7A8E3}footer a{color:#F6D27A}
</style></head><body>
<h1>Your strip</h1>${body}
<footer>Made with <a href="/">House Booth</a>, a free photobooth for your party.</footer>
</body></html>`;
  return new Response(html, { status: exists ? 200 : 404, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;
    if (p === "/api/upload") {
      if (request.method === "OPTIONS") return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" } });
      if (request.method === "POST") return upload(request, env);
      return new Response("Method not allowed", { status: 405 });
    }
    if (p.startsWith("/s/")) return guest(p.slice(3).split("/")[0], env);
    if (p.startsWith("/strips/")) return strip(p.slice(8).split("/")[0], env);
    return env.ASSETS.fetch(request);
  }
};
