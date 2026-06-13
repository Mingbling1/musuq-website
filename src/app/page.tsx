import { Hero } from "@/components/landing/hero";
import { Manifiesto } from "@/components/landing/manifiesto";
import { Cierre } from "@/components/landing/cierre";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Manifiesto />
      <Cierre />
    </main>
  );
}
