import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { TechStack } from "@/components/landing/tech-stack";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";

/** Subtle divider — a thin centered line with a small leaf dot in the middle */
function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative ${flip ? "bg-cream-200/40" : ""}`}>
      <div className="mx-auto flex items-center justify-center gap-4 px-6 max-w-md">
        <span className="h-px flex-1 bg-warm-800/[0.06]" />
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="text-warm-400/40 shrink-0"
          aria-hidden="true"
        >
          <path
            d="M6 1C5 3 3 5 3 7c0 2 1.3 3 3 3s3-1 3-3c0-2-2-4-3-6z"
            fill="currentColor"
          />
        </svg>
        <span className="h-px flex-1 bg-warm-800/[0.06]" />
      </div>
    </div>
  );
}

/** Gradient fade transition between sections with different backgrounds */
function SectionFade({ to }: { to: "tinted" | "plain" }) {
  return (
    <div
      className={`h-12 sm:h-16 ${
        to === "tinted"
          ? "bg-gradient-to-b from-transparent to-cream-200/40"
          : "bg-gradient-to-b from-cream-200/40 to-transparent"
      }`}
      aria-hidden="true"
    />
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SectionDivider />
      <Services />
      <SectionFade to="tinted" />
      <TechStack />
      <SectionFade to="plain" />
      <Process />
      <SectionDivider />
      <Testimonials />
      <SectionFade to="tinted" />
      <CTA />
    </main>
  );
}
