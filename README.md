# braze-demo-site

Realistic test website for the Braze MarTech platform's Web Personalisation SDK. Embeds the SDK from the main app and serves as the end-to-end demo environment.

## What this is

- A small Next.js site with landing / products / pricing / about / contact pages
- Embeds `<script src="https://janlio.com/api/v1/web/pz.js">` to load the SDK
- Used for SDK testing + always-on demo environment for sales prospects

## Local development

```
npm install
npm run dev
```

Environment variables (for local + Vercel):

- `NEXT_PUBLIC_MK_SDK_URL` — SDK bundle URL. Defaults to `https://janlio.com/api/v1/web/pz.js`. (Original default was `https://braze-dusky.vercel.app/api/v1/web/pz.js` — flipped in 2026-04-27 follow-up after that Vercel auto-alias died and broke the demo site. Pinned to `janlio.com` per main-repo DECISIONS 074.)
- `NEXT_PUBLIC_MK_PUB_KEY` — Workspace publishable key (`mk_pub_...`) for the workspace whose config should drive this demo site

Create a publishable key in the main platform's dashboard (Settings -> API Keys -> Type: Web SDK Key). Paste into `.env.local`.

## What it is NOT

- Not a product. Just a test harness. Content is fake.
- Not open to public contributions (Phase 13 internal tool).

## Related

- Main repo: https://github.com/ellninjo/braze
- Phase 13 spec: https://github.com/ellninjo/braze/blob/main/docs/plans/personalization-plan.md
- Phase 13 implementation plan: https://github.com/ellninjo/braze/blob/main/docs/plans/personalization-implementation.md
