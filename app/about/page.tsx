export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">O nama</h1>

      <p className="text-gray-700 mb-4">
        Bokun Sport d.o.o. osnovan je 2011. godine u Zagrebu s ciljem opskrbe
        sportskih klubova i udruga kvalitetnom opremom po pristupacnim
        cijenama.
      </p>
      <p className="text-gray-700 mb-4">
        Danas surađujemo s više od 300 klubova u Hrvatskoj, Bosni i
        Hercegovini, Srbiji i Sloveniji. Naš tim od 12 zaposlenika brine se o
        svakoj narudžbi — od dizajna do isporuke na adresu kluba.
      </p>
      <p className="text-gray-700 mb-8">
        Vjerujemo da svaki klub zaslužuje profesionalnu opremu bez obzira na
        budžet. Zato nudimo fleksibilne planove, klupske popuste i brzu
        dostavu za cijelu regiju.
      </p>

      <div className="grid grid-cols-3 gap-6 text-center border-t border-gray-200 pt-8">
        {[
          { stat: "300+", label: "Aktivnih klubova" },
          { stat: "15 god.", label: "Iskustva na tržištu" },
          { stat: "4 države", label: "Dostava u regiji" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-extrabold text-blue-700">{s.stat}</p>
            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
