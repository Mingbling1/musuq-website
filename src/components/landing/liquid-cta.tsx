"use client";

import type { ComponentProps, ReactNode } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

type LiquidCtaProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: ComponentProps<typeof LiquidButton>["size"];
};

/**
 * CTA con tratamiento Liquid Glass. LiquidButton renderiza varias capas
 * internas (vidrio + filtro SVG), así que no es compatible con `asChild`/Slot;
 * navegamos por onClick para mantener un solo elemento interactivo válido.
 */
export function LiquidCta({ href, children, className, size = "xl" }: LiquidCtaProps) {
  return (
    <LiquidButton
      size={size}
      className={className}
      onClick={() => {
        window.location.href = href;
      }}
    >
      {children}
    </LiquidButton>
  );
}
