"use client";

/**
 * Contact form — collects name + email + club + message. On submit it fires
 * `MarTech.identify({ email })` (so prior anonymous browsing merges onto the
 * contact row) plus a `contact.form_submit` event with the non-PII fields
 * (club, has_message) for segmentation.
 *
 * The email goes through the identify path, NOT the custom event's
 * properties blob — the route's identify-subject fallback (scoped to
 * web.identify) is the only place where property-nested email resolves to a
 * contact. Sending it as a generic track property would leave the event
 * anonymous.
 *
 * No backend — the form is for SDK demo / test traffic only. A real
 * deployment would POST to a lead-capture endpoint in addition to the SDK
 * calls.
 */

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "submitted" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [club, setClub] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setStatus("submitting");

    const mt = typeof window !== "undefined" ? window.MarTech : undefined;
    if (!mt) {
      setStatus("submitted");
      return;
    }

    try {
      mt.identify({ email: trimmedEmail });
      mt.track("contact.form_submit", {
        source: "contact-page",
        // Non-PII fields only in the generic event body; the email is
        // handled via identify so it resolves to a contact server-side.
        club: club.trim() || null,
        has_message: message.trim().length > 0,
      });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div className="border border-green-200 bg-green-50 rounded p-6">
        <h2 className="text-lg font-semibold text-green-800 mb-1">
          Hvala, {name || "prijatelju"}!
        </h2>
        <p className="text-sm text-green-700">
          Javit cemo se na <span className="font-mono">{email}</span> unutar
          jednog radnog dana.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Ime i prezime
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Marko Maric"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email adresa
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="marko@klub.hr"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="club" className="block text-sm font-medium text-gray-700 mb-1">
          Naziv kluba / organizacije
        </label>
        <input
          id="club"
          name="club"
          type="text"
          value={club}
          onChange={(e) => setClub(e.target.value)}
          placeholder="NK Lokomotiva Zagreb"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Zainteresiran sam za narudžbu od 30 kompleta..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition disabled:opacity-50"
      >
        {status === "submitting" ? "Šaljem..." : "Pošalji upit"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-red-600">Greška — pokušaj ponovo.</p>
      ) : null}
    </form>
  );
}
