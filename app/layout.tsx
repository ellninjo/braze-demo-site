import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { NewsletterForm } from "../components/NewsletterForm";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bokun Sport — oprema za vaš klub",
  description: "Sportska oprema za klubove i rekreativce u Hrvatskoj i regiji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <header className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-700">
              Bokun Sport
            </Link>
            {/* v2 Cards module will inject personalised content here */}
            <div data-mk-feed className="hidden" />
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/products" className="hover:text-blue-700">
                Proizvodi
              </Link>
              <Link href="/pricing" className="hover:text-blue-700">
                Cijene
              </Link>
              <Link href="/about" className="hover:text-blue-700">
                O nama
              </Link>
              <Link href="/contact" className="hover:text-blue-700">
                Kontakt
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="text-sm text-gray-500">
              <p className="mb-1">&copy; 2026 Bokun Sport d.o.o.</p>
              <p>Zagreb, Hrvatska</p>
            </div>
            <NewsletterForm />
          </div>
        </footer>

        <Script
          src={
            process.env.NEXT_PUBLIC_MK_SDK_URL ||
            "https://braze-dusky.vercel.app/api/v1/web/pz.js"
          }
          strategy="afterInteractive"
          data-workspace-key={process.env.NEXT_PUBLIC_MK_PUB_KEY || ""}
        />
      </body>
    </html>
  );
}
