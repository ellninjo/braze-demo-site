import Link from "next/link";
import { notFound } from "next/navigation";

const PRODUCTS: Record<
  string,
  {
    name: string;
    category: string;
    price: string;
    description: string;
    details: string[];
  }
> = {
  "football-kit-pro": {
    name: "Nogometni komplet Pro",
    category: "Nogomet",
    price: "89",
    description: "Dres + hlacice + carape. Dostupno u 12 boja.",
    details: [
      "100% poliester, gramatura 140 g/m2",
      "Sublimacijski tisak (boje ne blijede)",
      "Dostupne velicine: XS – 3XL",
      "Minimalna narudžba za klupski tisak: 10 komada",
    ],
  },
  "basketball-ball-match": {
    name: "Košarkaška lopta Match",
    category: "Košarka",
    price: "49",
    description: "Certifikat FIBA. Unutarnja i vanjska igra.",
    details: [
      "Gumena vanjska obloga otporna na habanje",
      "FIBA certifikat za sluzbeな utakmice",
      "Velicina 7 (muška) / velicina 6 (ženska)",
      "Punjenje: standardna igla",
    ],
  },
  "volleyball-net-standard": {
    name: "Odbojkaška mreža Standard",
    category: "Odbojka",
    price: "120",
    description: "CEV standard, visina 9.5 m. Uključeni stupovi.",
    details: [
      "Dimenzije: 9.5 x 1 m",
      "Materijal: polipropilen 3 mm",
      "Aluminijski stupovi s podesivom visinom",
      "CEV standard za dvoranske i outdoor turnire",
    ],
  },
  "training-cones-set": {
    name: "Set čunjeva za trening",
    category: "Oprema",
    price: "22",
    description: "24 komada, 4 boje. Idealno za vježbe koordinacije.",
    details: [
      "24 čunja (6 po boji: crvena, žuta, plava, narancasta)",
      "Visina: 23 cm",
      "Materijal: fleksibilni PVC",
      "Uključena mrežasta torba za transport",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/products" className="text-sm text-blue-600 hover:underline">
        &larr; Svi proizvodi
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Placeholder image */}
        <div className="bg-gray-100 rounded h-72 flex items-center justify-center text-gray-400">
          {product.category}
        </div>

        <div>
          <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold mt-1 mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          <p className="text-2xl font-bold mb-6">od {product.price} EUR</p>

          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Zatraži ponudu
          </Link>
        </div>
      </div>
    </div>
  );
}
