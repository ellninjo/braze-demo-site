import Link from "next/link";

const PRODUCTS = [
  {
    slug: "football-kit-pro",
    name: "Nogometni komplet Pro",
    category: "Nogomet",
    price: "89",
    description: "Dres + hlacice + carape. Dostupno u 12 boja.",
  },
  {
    slug: "basketball-ball-match",
    name: "Košarkaška lopta Match",
    category: "Košarka",
    price: "49",
    description: "Certifikat FIBA. Unutarnja i vanjska igra.",
  },
  {
    slug: "volleyball-net-standard",
    name: "Odbojkaška mreža Standard",
    category: "Odbojka",
    price: "120",
    description: "CEV standard, visina 9.5 m. Uključeni stupovi.",
  },
  {
    slug: "training-cones-set",
    name: "Set čunjeva za trening",
    category: "Oprema",
    price: "22",
    description: "24 komada, 4 boje. Idealno za vježbe koordinacije.",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Naši proizvodi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {PRODUCTS.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="border border-gray-200 rounded p-6 hover:border-blue-400 transition group"
          >
            {/* Placeholder image */}
            <div className="bg-gray-100 rounded h-40 mb-4 flex items-center justify-center text-gray-400 text-sm">
              {p.category}
            </div>
            <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
              {p.category}
            </span>
            <h2 className="font-semibold text-lg mt-1 group-hover:text-blue-700">
              {p.name}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{p.description}</p>
            <p className="mt-3 font-bold text-gray-900">od {p.price} EUR</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
