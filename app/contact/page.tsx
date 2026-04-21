export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Kontakt</h1>
      <p className="text-gray-500 mb-8">
        Pošalji nam upit i javit cemo se unutar jednog radnog dana.
      </p>

      {/* Plain HTML form — no backend wired; placeholder for SDK testing */}
      <form action="/" method="POST" className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ime i prezime
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Marko Maric"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email adresa
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="marko@klub.hr"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="club"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Naziv kluba / organizacije
          </label>
          <input
            id="club"
            name="club"
            type="text"
            placeholder="NK Lokomotiva Zagreb"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Poruka
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Zainteresiran sam za narudžbu od 30 kompleta..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Pošalji upit
        </button>
      </form>

      <div className="mt-10 text-sm text-gray-500 space-y-1">
        <p>
          <strong>Adresa:</strong> Ulica kralja Zvonimira 12, 10000 Zagreb
        </p>
        <p>
          <strong>Telefon:</strong> +385 1 234 5678
        </p>
        <p>
          <strong>Email:</strong> info@bokun-sport.hr
        </p>
      </div>
    </div>
  );
}
