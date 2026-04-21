import Link from "next/link";

const TIERS = [
  {
    name: "Basic",
    price: "0",
    note: "Besplatno",
    description: "Za manje udruge i rekreativne ekipe.",
    features: [
      "Do 20 clanova",
      "Katalog proizvoda",
      "Email podrška",
      "Pristup webshop cijenik",
    ],
    cta: "Registriraj se",
    highlight: false,
  },
  {
    name: "Pro",
    price: "49",
    note: "EUR/mj",
    description: "Za aktivne sportske klubove s natjecateljskim programom.",
    features: [
      "Do 200 clanova",
      "Klupski popusti (10-15%)",
      "Brza isporuka 48h",
      "Osobni account manager",
      "Prilagodeni tisak dreses",
    ],
    cta: "Pokreni Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Po dogovoru",
    note: "",
    description: "Za saveze, lige i vece organizacije s vecim volumenima.",
    features: [
      "Neogranicen broj clanova",
      "Maksimalni klupski popusti",
      "Dedicirani logisticki partner",
      "SLA ugovor o isporuci",
      "White-label opcija",
    ],
    cta: "Kontaktiraj nas",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">Cjenik</h1>
      <p className="text-gray-500 text-center mb-12">
        Odaberi plan koji odgovara tvojoj organizaciji.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={`border rounded p-6 flex flex-col ${
              t.highlight
                ? "border-blue-600 shadow-md"
                : "border-gray-200"
            }`}
          >
            {t.highlight && (
              <span className="text-xs font-bold uppercase text-blue-600 mb-2 tracking-wide">
                Najpopularniji
              </span>
            )}
            <h2 className="text-xl font-bold">{t.name}</h2>
            <div className="mt-2 mb-1">
              <span className="text-3xl font-extrabold">{t.price}</span>
              {t.note && (
                <span className="text-gray-500 text-sm ml-1">{t.note}</span>
              )}
            </div>
            <p className="text-gray-500 text-sm mb-6">{t.description}</p>

            <ul className="text-sm text-gray-700 space-y-2 flex-1 mb-8">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`text-center font-semibold px-4 py-2 rounded transition ${
                t.highlight
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "border border-gray-300 text-gray-800 hover:bg-gray-50"
              }`}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
