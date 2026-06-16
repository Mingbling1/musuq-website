import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

// Cuerpo / UI — Switzer (neo-grotesca, self-hosted)
const switzer = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "./fonts/switzer-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/switzer-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/switzer-600.woff2", weight: "600", style: "normal" },
  ],
});

// Display / títulos / wordmark — Clash Display (self-hosted)
// (mantiene el nombre de variable --font-fraunces para no tocar el resto)
const clash = localFont({
  variable: "--font-fraunces",
  display: "swap",
  src: [
    { path: "./fonts/clash-display-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/clash-display-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/clash-display-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/clash-display-700.woff2", weight: "700", style: "normal" },
  ],
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
      className={`${switzer.variable} ${clash.variable} h-full antialiased`}
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
      </body>
    </html>
  );
}
