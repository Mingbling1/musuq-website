import Landing from "@/components/landing/Landing";

// Ruta temporal de verificacion de la migracion a React.
// Compara /preview contra / (LandingStatic) pixel a pixel.
// Se elimina al hacer el swap final.
export default function PreviewPage() {
  return <Landing />;
}
