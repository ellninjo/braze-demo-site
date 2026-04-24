"use client";

/**
 * Newsletter signup form — rendered in the global footer so it shows on
 * every page. On submit it fires `MarTech.identify({ email })` and a
 * `newsletter.subscribed` custom event. Both are fire-and-forget; the SDK's
 * batcher flushes them on `beforeunload` or on the next 30s tick.
 *
 * Why this exists: before shipping this form the only way to drive the
 * identify → merge-orphan-events flow on the deployed demo site was to paste
 * code into DevTools (`window.MarTech.identify(...)`). A real <form> element
 * that marketers can test against end-to-end is the table-stakes onboarding
 * surface for a Braze-class web channel.
 *
 * Backend: none. The form does not submit anywhere; the whole contract is
 * "collect an email, hand it to the SDK, show a thank-you." Real signups
 * need to be wired to whatever list/segmentation surface the target
 * workspace uses — out of scope for the demo site.
 */

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "submitted" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    setStatus("submitting");

    const mt = typeof window !== "undefined" ? window.MarTech : undefined;
    if (!mt) {
      // SDK didn't load (script blocked, CSP, network issue). Don't break the
      // UX — just pretend it worked; real production sites would queue the
      // email locally or route through a server endpoint. Demo only.
      setStatus("submitted");
      return;
    }

    try {
      mt.identify({ email: trimmed });
      mt.track("newsletter.subscribed", { source: "footer", email: trimmed });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <p className="text-sm text-green-700">
        Hvala! Upisan si na newsletter — <span className="font-mono">{email}</span>
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 sm:items-end w-full max-w-md">
      <div className="flex-1">
        <label
          htmlFor="newsletter-email"
          className="block text-xs font-medium text-gray-500 mb-1"
        >
          Newsletter (test identify)
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="test@example.com"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={status === "submitting"}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-800 transition disabled:opacity-50"
      >
        {status === "submitting" ? "..." : "Prijavi me"}
      </button>
      {status === "error" ? (
        <span className="text-xs text-red-600">Greška — pokušaj ponovo.</span>
      ) : null}
    </form>
  );
}
