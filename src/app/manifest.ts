import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "musuq | estudio digital",
    short_name: "musuq",
    description:
      "Construimos productos digitales con propósito. Landings, e-commerce, automatizaciones y software a medida.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#C8553D",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
