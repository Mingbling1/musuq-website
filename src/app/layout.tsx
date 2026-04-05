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
  title: {
    default: "musuq | estudio digital",
    template: "%s | musuq",
  },
  description:
    "Estudio digital peruano. Construimos landings, tiendas online, automatizaciones y software a medida para myisas y negocios que quieren crecer sin plantillas ni misterios.",
  keywords: [
    "estudio digital perú",
    "landing page perú",
    "desarrollo web perú",
    "e-commerce perú",
    "tienda online perú",
    "automatizaciones perú",
    "software a medida perú",
    "paginas web lima",
    "agencia digital perú",
    "next.js perú",
    "chatwoot perú",
    "n8n automatizaciones",
  ],
  authors: [{ name: "musuq" }],
  creator: "musuq",
  publisher: "musuq",
  openGraph: {
    title: "musuq | estudio digital",
    description:
      "Estudio digital peruano. Landings, tiendas online, automatizaciones y software a medida para myisas y negocios que quieren crecer.",
    url: "https://musuq.tech",
    siteName: "musuq",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "musuq | estudio digital",
    description:
      "Estudio digital peruano. Landings, tiendas online, automatizaciones y software a medida.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Por qué mi pyme necesita una landing page si ya tengo Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las redes sociales son ventanas. Tu landing page es tu tienda. En Instagram tu cliente compite con cien publicaciones por su atención. En tu landing cada píxel está diseñado para una sola cosa: convertir. Además, mientras más dependes de redes de terceros, menos control tienes sobre tu negocio. Tu landing page es un activo tuyo que no desaparece cuando cambia un algoritmo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma tener mi proyecto listo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2 a 3 días para una landing. 7 a 10 días para una tienda online. 3 a 5 días para automatizaciones. Son promedios — cada proyecto es diferente y lo conversamos desde el inicio. No usamos plantillas: todo es hiperpersonalizado desde cero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta trabajar con ustedes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No tenemos precios estándar porque no hacemos proyectos estándar. Cada presupuesto se calcula según lo que realmente necesitas, sin empaquetar funcionalidades que no vas a usar. La primera reunión es gratuita y ahí definimos juntos qué tiene sentido para tu situación actual.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "musuq",
  description:
    "Estudio digital peruano. Landings, tiendas online, automatizaciones y software a medida.",
  url: "https://musuq.tech",
  logo: "https://musuq.tech/icon.svg",
  email: "hello@musuq.tech",
  areaServed: {
    "@type": "Country",
    name: "Peru",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Lima",
    addressLocality: "Lima",
    addressCountry: "PE",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
