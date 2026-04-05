"use client";

/**
 * Interactive e-commerce demo — full purchase flow.
 * Steps: Browse → Add to cart → Cart review → Checkout (Izipay) → Comprado!
 */

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  Package,
  X,
} from "lucide-react";

/* ── Types ─────────────────────────────────────────────────────────── */

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  emoji: string;
}

interface CartItem extends Product {
  qty: number;
}

type Step = "browse" | "cart" | "checkout" | "success";

/* ── Data ──────────────────────────────────────────────────────────── */

const products: Product[] = [
  { id: 1, name: "Café Orgánico", price: 42, color: "#8B6F47", emoji: "☕" },
  { id: 2, name: "Miel de Abeja", price: 28, color: "#D4A54A", emoji: "🍯" },
  { id: 3, name: "Chocolate 72%", price: 35, color: "#5C3D2E", emoji: "🍫" },
  { id: 4, name: "Té de Muña", price: 18, color: "#6B7C5E", emoji: "🍵" },
  { id: 5, name: "Quinua Real", price: 24, color: "#C8A96E", emoji: "🌾" },
  { id: 6, name: "Aceite de Coco", price: 32, color: "#A8D5B0", emoji: "🥥" },
];

/* ── Animation config ──────────────────────────────────────────────── */

const pageVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

/* ── Main Component ────────────────────────────────────────────────── */

export function EcommerceDemo({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState<Step>("browse");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [processing, setProcessing] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleCheckout = useCallback(() => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep("success");
    }, 2200);
  }, []);

  const reset = useCallback(() => {
    setCart([]);
    setStep("browse");
  }, []);

  return (
    <div className="flex h-full flex-col bg-cream-50 text-warm-800">
      {/* ── Browser chrome ──────────────────────────────────────── */}
      <div className="flex items-center gap-2 bg-warm-700 px-4 py-2.5 rounded-t-lg">
        <div className="flex gap-1.5">
          <button onClick={onClose} className="h-3 w-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-warm-600/50 px-3 py-1">
          <span className="text-[11px] text-warm-400 font-mono">
            https://tutienda.musuq.dev
          </span>
        </div>
      </div>

      {/* ── Store nav ───────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-warm-800/[0.06] px-4 py-3 bg-cream-50">
        <div className="flex items-center gap-2">
          {step !== "browse" && (
            <button
              onClick={() =>
                setStep(step === "cart" ? "browse" : step === "checkout" ? "cart" : "browse")
              }
              className="mr-1 text-warm-400 hover:text-warm-600 transition"
            >
              <ArrowLeft size={16} />
            </button>
          )}
          <Package size={16} className="text-warm-600" />
          <span className="text-sm font-medium">tienda</span>
        </div>
        <button
          onClick={() => step === "browse" && cart.length > 0 && setStep("cart")}
          className="relative flex items-center gap-1.5 rounded-full bg-warm-800 px-3 py-1.5 text-cream-100 transition hover:bg-warm-700"
        >
          <ShoppingCart size={13} />
          <span className="text-[11px] font-medium">
            {itemCount > 0 ? `S/ ${total.toFixed(2)}` : "Carrito"}
          </span>
          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[9px] font-bold text-cream-50"
            >
              {itemCount}
            </motion.span>
          )}
        </button>
      </div>

      {/* ── Step content ────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {step === "browse" && (
            <motion.div
              key="browse"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="p-4"
            >
              <p className="text-xs text-warm-400 uppercase tracking-widest mb-3">
                Productos artesanales
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {products.map((p) => {
                  const inCart = cart.find((c) => c.id === p.id);
                  return (
                    <motion.div
                      key={p.id}
                      whileTap={{ scale: 0.97 }}
                      className="group rounded-xl border border-warm-800/[0.04] bg-cream-100 p-3 transition hover:shadow-sm"
                    >
                      <div
                        className="mb-2.5 flex aspect-square items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${p.color}20` }}
                      >
                        <span className="text-3xl">{p.emoji}</span>
                      </div>
                      <p className="text-xs font-medium leading-tight">{p.name}</p>
                      <p className="text-xs text-warm-400 mt-0.5">
                        S/ {p.price.toFixed(2)}
                      </p>
                      <button
                        onClick={() => addToCart(p)}
                        className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg bg-warm-800 py-1.5 text-[11px] font-medium text-cream-100 transition hover:bg-warm-700"
                      >
                        <Plus size={12} />
                        {inCart ? `Agregado (${inCart.qty})` : "Agregar"}
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {cart.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setStep("cart")}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta py-3 text-sm font-medium text-cream-50 transition hover:bg-terracotta-light"
                >
                  <ShoppingCart size={15} />
                  Ver carrito ({itemCount} {itemCount === 1 ? "item" : "items"})
                </motion.button>
              )}
            </motion.div>
          )}

          {step === "cart" && (
            <motion.div
              key="cart"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="p-4 box-border overflow-x-hidden"
            >
              <p className="text-xs text-warm-400 uppercase tracking-widest mb-3">
                Tu carrito
              </p>

              {cart.length === 0 ? (
                <div className="py-12 text-center">
                  <ShoppingCart size={32} className="mx-auto text-warm-400/30 mb-3" />
                  <p className="text-sm text-warm-400">Tu carrito está vacío</p>
                </div>
              ) : (
                <>
                  <div className="space-y-2 overflow-hidden">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-2 sm:gap-3 rounded-xl border border-warm-800/[0.04] bg-cream-100 p-2 sm:p-3"
                      >
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <span className="text-lg">{item.emoji}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{item.name}</p>
                          <p className="text-xs text-warm-400">
                            S/ {item.price.toFixed(2)} c/u
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="rounded p-1 text-warm-400 hover:bg-cream-200 transition"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-5 text-center text-xs font-medium">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="rounded p-1 text-warm-400 hover:bg-cream-200 transition"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="w-16 text-right">
                          <p className="text-xs font-medium">
                            S/ {(item.price * item.qty).toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-warm-400 hover:text-terracotta transition"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-warm-800/[0.06] pt-3 mt-3 overflow-hidden">
                    <span className="text-sm font-medium">Total</span>
                    <span className="text-lg font-medium">
                      S/ {total.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => setStep("checkout")}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-terracotta py-3 text-sm font-medium text-cream-50 transition hover:bg-terracotta-light mt-3 box-border"
                  >
                    <CreditCard size={15} />
                    Proceder al pago
                  </button>
                </>
              )}
            </motion.div>
          )}

          {step === "checkout" && (
            <motion.div
              key="checkout"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="p-4"
            >
              {/* Izipay payment form mockup */}
              <div className="rounded-xl border border-warm-800/[0.06] bg-cream-100 p-5">
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex h-8 items-center rounded bg-[#00205B] px-2.5">
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      IZIPAY
                    </span>
                  </div>
                  <span className="text-xs text-warm-400">Pago seguro</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] text-warm-400 uppercase tracking-wider mb-1">
                      Número de tarjeta
                    </label>
                    <div className="flex items-center rounded-lg border border-warm-800/[0.08] bg-cream-50 px-3 py-2.5">
                      <span className="flex-1 text-xs text-warm-500 font-mono">
                        4111 •••• •••• 1111
                      </span>
                      <CreditCard size={14} className="text-warm-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] text-warm-400 uppercase tracking-wider mb-1">
                        Vencimiento
                      </label>
                      <div className="rounded-lg border border-warm-800/[0.08] bg-cream-50 px-3 py-2.5">
                        <span className="text-xs text-warm-500 font-mono">12/28</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] text-warm-400 uppercase tracking-wider mb-1">
                        CVV
                      </label>
                      <div className="rounded-lg border border-warm-800/[0.08] bg-cream-50 px-3 py-2.5">
                        <span className="text-xs text-warm-500 font-mono">•••</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-warm-800/[0.06] pt-4">
                  <span className="text-xs text-warm-400">Total a pagar</span>
                  <span className="text-base font-medium">
                    S/ {total.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={processing}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00205B] py-3 text-sm font-medium text-white transition hover:bg-[#003087] disabled:opacity-70"
                >
                  {processing ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                      />
                      Procesando pago...
                    </>
                  ) : (
                    <>
                      <CreditCard size={15} />
                      Pagar con Izipay
                    </>
                  )}
                </button>

                <div className="mt-3 flex items-center justify-center gap-3">
                  {["Visa", "Mastercard", "AMEX"].map((brand) => (
                    <span
                      key={brand}
                      className="text-[9px] font-medium text-warm-400 bg-cream-200 px-1.5 py-0.5 rounded"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center justify-center p-8 py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              >
                <CheckCircle2 size={56} className="text-sage" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 font-serif text-xl font-medium"
              >
                Compra exitosa
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-2 text-center text-sm text-warm-400 max-w-xs"
              >
                Tu pedido ha sido confirmado. Recibirás un correo con los detalles
                del envío.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4 rounded-lg bg-cream-200 px-4 py-2"
              >
                <span className="text-xs text-warm-500 font-mono">
                  Orden #MSQ-{String(Math.floor(Math.random() * 9000 + 1000))}
                </span>
              </motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={reset}
                className="mt-6 text-xs text-terracotta hover:underline underline-offset-2 transition"
              >
                Volver a la tienda
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
