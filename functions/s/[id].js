// GET /s/:id  — the page a guest lands on after scanning the QR
export async function onRequestGet({ params, env }) {
  const key = String(params.id);
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
