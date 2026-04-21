import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Bokun Sport — oprema za vaš klub
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-xl">
            Profesionalna sportska oprema za nogometne, košarkaške i odbojkaške
            klubove u Hrvatskoj i regiji. Brza dostava, dugotrajni materijali.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-blue-50 transition"
          >
            Pogledaj proizvode
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Zašto Bokun Sport?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Brza dostava",
              body: "Isporuka unutar 2-3 radna dana za sve narudžbe iz skladišta u Zagrebu.",
            },
            {
              title: "Klupski popusti",
              body: "Posebne cijene za narudžbe 20+ komada. Kontaktirajte nas za ponudu.",
            },
            {
              title: "Garancija kvalitete",
              body: "Sva oprema zadovoljava FIFA, FIBA i CEV standarde za natjecanja.",
            },
          ].map((f) => (
            <div key={f.title} className="border border-gray-200 rounded p-6">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-xl font-bold mb-3">Spremi za novu sezonu?</h2>
        <p className="text-gray-600 mb-6">
          Pogledaj naš cjenik za klubove i udruge.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Vidi cijene
        </Link>
      </section>
    </div>
  );
}
