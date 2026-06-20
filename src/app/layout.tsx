import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
// Navbar/Footer/SmoothScroll quitados: el landing rebrand los trae en su propio markup.

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

// Acento editorial-brutalista — Anton (display condensada) + Caveat (manuscrita)
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400", display: "swap" });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://musuq.tech"),
  title: {
    default: "Tecnología que impulsa cada venta · Musuq",
    template: "%s | Musuq",
  },
  description:
    "App y punto de venta para restaurantes y cafeterías en Perú. Sube tu carta con una foto, recibe pedidos por QR, manda la comanda a cocina y cobra con Yape, Plin o tarjeta. Controla tu negocio y emite boleta y factura electrónica, todo en un solo lugar.",
  keywords: [
    "app para restaurantes",
    "app para restaurantes perú",
    "software para restaurantes perú",
    "sistema para restaurantes",
    "punto de venta para restaurantes",
    "app para controlar mi negocio",
    "app para administrar mi negocio",
    "controlar las ventas de mi negocio",
    "carta digital con qr",
    "carta inteligente restaurante",
    "menú digital qr",
    "comanda digital cocina",
    "cobrar con yape en mi negocio",
    "pos yape plin perú",
    "boleta y factura electrónica restaurante",
    "facturación electrónica sunat perú",
  ],
  authors: [{ name: "Musuq" }],
  creator: "Musuq",
  publisher: "Musuq",
  openGraph: {
    title: "Tecnología que impulsa cada venta · Musuq",
    description:
      "Sube tu carta con una foto, recibe pedidos por QR, manda la comanda a cocina y cobra con Yape, Plin o tarjeta. Controla tu restaurante desde un solo lugar.",
    url: "https://musuq.tech",
    siteName: "Musuq",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Tecnología que impulsa cada venta · Musuq",
      },
    ],
  },
  alternates: {
    canonical: "https://musuq.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnología que impulsa cada venta · Musuq",
    description:
      "Carta digital con QR, comanda a cocina y cobros con Yape, Plin o tarjeta. Controla tu restaurante desde un solo lugar.",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630 }],
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Musuq sirve para mi restaurante o cafetería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Musuq es una app y punto de venta pensada para restaurantes y cafeterías: toma pedidos, manda la comanda a cocina y cobra, todo desde un solo lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene carta digital con QR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Subes tu carta con una foto y la IA la arma sola; tus clientes escanean el QR de la mesa y piden desde su celular.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo controlar las ventas de mi negocio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Musuq registra cada venta y te muestra tus ganancias, inventario y reportes en tiempo real para controlar tu negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cobra con Yape, Plin y tarjeta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cobras con Yape, Plin, tarjeta y efectivo en una sola caja, y emites boleta y factura electrónica ante SUNAT automáticamente.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${switzer.variable} ${clash.variable} ${anton.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
