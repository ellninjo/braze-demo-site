'use client';

import { useEffect } from 'react';

/**
 * Defensive React-side initialiser for the MarTech Web SDK.
 *
 * The SDK at `/api/v1/web/pz.js` auto-inits when its module evaluates
 * and finds a `<script data-workspace-key="mk_pub_...">` tag in the
 * DOM (via `document.currentScript.dataset.workspaceKey` first, then
 * `document.querySelector('script[data-workspace-key]')` as a fallback).
 *
 * That auto-init flow is fragile under Next.js's `<Script
 * strategy="afterInteractive">` hydration sequencing — `currentScript`
 * can be null at module-evaluation time, and the React tree's render
 * timing relative to the SDK's bundle download isn't deterministic.
 * Result: even with `data-workspace-key` correctly set on the wrapped
 * `<script>`, `MarTech.initialized` can stay `false` indefinitely.
 *
 * This component closes that gap. After hydration:
 *   1. Read `MarTech` off `window`. If absent (bundle not loaded yet),
 *      do nothing — the SDK's own auto-init will run when the bundle
 *      lands.
 *   2. If `MarTech.initialized` is already `true`, do nothing — the
 *      SDK auto-init worked.
 *   3. Otherwise re-read `data-workspace-key` from the live DOM and
 *      call `MarTech.init({ publishableKey })` ourselves.
 *
 * Double-init is a benign no-op on the SDK side (the init guard at
 * `core.ts` emits one console.warn and returns), so the worst-case
 * outcome is one harmless warn message.
 *
 * Mount once in `app/layout.tsx`. Renders nothing.
 */
export function MarTechAutoInit(): null {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sdk = window.MarTech;
    if (!sdk || sdk.initialized || !sdk.init) return;
    const tag = document.querySelector<HTMLScriptElement>(
      'script[data-workspace-key]',
    );
    const key = tag?.dataset.workspaceKey;
    if (!key) return;
    sdk.init({ publishableKey: key });
  }, []);
  return null;
}
