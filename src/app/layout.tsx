import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

// Cuerpo / UI — Barlow
const barlow = Barlow({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Display / títulos / wordmark — Barlow Semi Condensed
const barlowSemi = Barlow_Semi_Condensed({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musuq.tech"),
  title: {
    default: "Musuq — Tecnología que impulsa cada venta",
    template: "%s | Musuq",
  },
  description:
    "Musuq es la plataforma de gestión y punto de venta para el comercio peruano. Vende, cobra y controla tu negocio desde un solo lugar. Hecho para mypes — fácil, rápido y hecho en Perú.",
  keywords: [
    "punto de venta perú",
    "app de ventas perú",
    "software para mypes perú",
    "gestión de negocio perú",
    "pos perú",
    "caja registradora digital perú",
    "control de ventas perú",
    "app para bodegas perú",
    "app para restaurantes perú",
    "facturación electrónica perú",
  ],
  authors: [{ name: "Musuq" }],
  creator: "Musuq",
  publisher: "Musuq",
  openGraph: {
    title: "Musuq — Tecnología que impulsa cada venta",
    description:
      "La plataforma de gestión y punto de venta para el comercio peruano. Vende, cobra y controla tu negocio desde un solo lugar.",
    url: "https://musuq.tech",
    siteName: "Musuq",
    locale: "es_PE",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://musuq.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musuq — Tecnología que impulsa cada venta",
    description:
      "La plataforma de gestión y punto de venta para el comercio peruano.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Musuq",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Plataforma de gestión y punto de venta para el comercio peruano: ventas, cobros, inventario y control del negocio en un solo lugar.",
  url: "https://musuq.tech",
  logo: "https://musuq.tech/icon.svg",
  inLanguage: "es-PE",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PEN",
    description: "Crear cuenta gratis",
  },
  publisher: {
    "@type": "Organization",
    name: "Musuq",
    email: "hello@musuq.tech",
    areaServed: { "@type": "Country", name: "Peru" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${barlow.variable} ${barlowSemi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
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
