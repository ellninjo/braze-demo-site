import { ContactForm } from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Kontakt</h1>
      <p className="text-gray-500 mb-8">
        Pošalji nam upit i javit cemo se unutar jednog radnog dana.
      </p>

      <ContactForm />

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
