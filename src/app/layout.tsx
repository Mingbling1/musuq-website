import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musuq.tech"),
  title: "musuq | estudio digital",
  description:
    "Construimos productos digitales con propósito. Landings, e-commerce, automatizaciones y software a medida para negocios que quieren crecer.",
  keywords: [
    "estudio digital",
    "desarrollo web",
    "landing pages",
    "e-commerce",
    "automatizaciones",
    "software a medida",
  ],
  alternates: {
    canonical: "https://musuq.tech",
  },
  openGraph: {
    title: "musuq | estudio digital",
    description:
      "Construimos productos digitales con propósito. Landings, e-commerce, automatizaciones y software a medida.",
    url: "https://musuq.tech",
    siteName: "musuq",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "musuq | estudio digital",
    description:
      "Construimos productos digitales con propósito. Landings, e-commerce, automatizaciones y software a medida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "musuq",
    description:
      "Estudio digital que construye productos digitales con propósito. Landings, e-commerce, automatizaciones y software a medida.",
    url: "https://musuq.tech",
    logo: "https://musuq.tech/icon.svg",
    email: "hello@musuq.tech",
    areaServed: {
      "@type": "Country",
      name: "Peru",
    },
    serviceType: [
      "Landing Pages",
      "E-commerce",
      "Automatizaciones",
      "Software a medida",
      "Consultas técnicas",
    ],
    sameAs: [],
  };

  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(d,t) {
  var BASE_URL="https://chatwoot.musuq.tech";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: 'DaSNmb4WrVBdCdRv5AGvp4wS',
      baseUrl: BASE_URL
    })
  }
})(document,"script");
`,
          }}
        />
      </body>
    </html>
  );
}
