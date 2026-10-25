# House Booth

A free photobooth for your party. Runs in the browser on any laptop with a webcam. No app, no iPad, no setup.

Live: https://housebooth.pages.dev

## How it works

- `index.html` — homepage
- `booth.html` — the booth. `?t=diwali|party|birthday|nye` picks a theme; "Make it yours" inside builds a link with your own headline, tagline, hashtag, shot count and countdown.
- `themes.js` — every theme is ~15 lines: words, colours, effects. Add your own.
- `functions/` — Cloudflare Pages Functions for QR sharing. A strip is uploaded to Workers KV and expires after 24 hours.
  - `POST /api/upload` → `{id, url}`
  - `GET /s/:id` → guest page with the strip
  - `GET /strips/:id.jpg` → the image

Without the KV binding the booth still works; the result screen offers Download only.

## Deploy (Cloudflare Pages, free)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo. Build command: none. Output directory: `/`.
3. Workers & Pages → KV → Create namespace, call it `housebooth-strips`.
4. Back in the Pages project → Settings → Bindings → Add → KV namespace. Variable name `STRIPS`, pick `housebooth-strips`. Save, then redeploy.

## Run locally

    npx wrangler pages dev . --kv STRIPS

then open http://localhost:8788

## Credits

QR codes by [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) (MIT). Homepage photos from Unsplash.
Built by [Anubhav](https://x.com/anubhav_builds).
