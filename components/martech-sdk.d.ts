// Loose type for the MarTech SDK installed on window by the cross-origin
// /api/v1/web/pz.js script. Kept narrow (only the surfaces we call from the
// demo-site) so we're not pretending to model the whole SDK here; the real
// typings live in the braze repo's `lib/web-sdk/src/` and aren't published
// as a package.
export {};

declare global {
  interface Window {
    MarTech?: {
      // Set to true once init() runs successfully. The defensive
      // MarTechAutoInit React component reads this to skip a redundant
      // init when the SDK's <script>-tag auto-init already worked.
      initialized?: boolean;
      init?: (opts: { publishableKey: string; apiBase?: string }) => void;
      identify: (input: {
        email?: string;
        contact_id?: string;
        external_id?: string;
      }) => void;
      track: (eventType: string, properties?: Record<string, unknown>) => void;
    };
  }
}
