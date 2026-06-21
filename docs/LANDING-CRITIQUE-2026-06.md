# Crítica de la landing (musuq.tech) — backlog vivo

> Auditoría 2026-06-17 sobre el sitio en vivo, con render real (Playmwright/Chromium),
> viewports desktop 1440 y móvil 390 capturados por scroll (no screenshot estático).
> Tono: directo y sin azúcar, a pedido. Este doc es **el inicio**: se apunta todo aquí
> y se va tachando. Complementa `BACKLOG.md` (no lo reemplaza).

## Rectificación honesta (importante)

Mi primer diagnóstico dijo que el hero "no comunica" y que el mensaje estaba "a 3
pantallas de scroll, con una mancha borrosa above-the-fold". **Eso estaba mal.** Fue
un artefacto del screenshot estático full-page (la imagen del hero es sticky y se
estira en captura estática). Con el render real:

- **El fold de desktop funciona:** foto del cocinero + titular "VENDE, COBRA Y *controla*" + copy + CTAs, todo sin scroll.
- **El fold de móvil funciona:** mismo contenido, ordenado, con CTA terracota visible.

La dirección de marca (brutalista + crema + Anton + ceviche) es buena y la estructura
general es sólida: Hero → 01 Por qué (cuaderno→control, con toggle) → 02 Rubros (demos) →
banner mobile-first → 03 Features → 04 Planes → Footer. **No hay que tirar nada.** Lo que
sigue son fallas reales, priorizadas por cuánto cuestan en conversión.

---

## P0 — Rompe conversión / roto en el dispositivo principal

- [ ] **Los demos de "Rubros" están muertos en móvil.** Son hover-driven (desktop) y el
  copy literalmente dice *"Pasa el mouse y míralo funcionar"* en una pantalla táctil.
  La audiencia es **mype peruana, mobile-first**: la sección que debería demostrar el
  producto no hace nada en el celular y encima da una instrucción imposible. Esto es lo
  más grave del sitio. Fix: demos auto-reproducidos (loop) o por tap/swipe en touch, y
  copy condicional ("Tócalo y míralo funcionar" / "Mira cómo funciona").

- [ ] **El producto real no se ve en ningún lado.** Los demos son wireframes terracota
  estilizados, no la app de verdad. Un dueño no llega a ver cómo se ve Musuq. Para un
  SaaS eso mata confianza y conversión. Fix: mockups fieles de la app (pantalla de
  pedido, caja, "Pedido listo") en Rubros y/o hero. Ya hay un pendiente relacionado en
  `BACKLOG.md` (swap de `app-mockup.png` por el diseño de Andrea): subirlo a P0.

- [ ] **Cero prueba social.** No hay testimonios, ni logos, ni números ("+N negocios",
  "S/ X procesados", "lo usa tal cafetería"). Vendes a dueños desconfiados y no les das
  ni una razón para creerte. Fix: una franja de prueba social real arriba (sobre el
  fold de la 2ª pantalla), aunque sea 2-3 negocios reales con nombre y foto.

## P1 — Resta, no rompe

- [ ] **El hero apaga su propia foto.** Para que el texto blanco lea, la foto del
  cocinero va con un overlay oscuro fuerte: queda genérica y apagada, y "se lee
  restaurante, no software". Fix: o mostrar el producto en el hero (mockup app en mano),
  o re-encuadrar con el ceviche (que sí vende) y resolver el contraste con una celda de
  texto sobre crema al lado, en vez de texto sobre foto oscurecida.

- [x] **Marca unificada en el isotipo M (2026-06-21).** Tanto la landing como la app
  (`musuq-app`) usan ahora el **isotipo M** como único signo (favicon, app-icon, header,
  footer). Se eliminaron el brote y el favicon "m". El **zorro queda solo como mascota**,
  no como signo. Resuelto.

- [ ] **"Ver cómo funciona" (CTA secundario del hero).** Confirmar a dónde lleva en
  móvil: si ancla a Rubros y los demos no corren en touch (ver P0), el CTA promete algo
  que no se cumple.

- [ ] **Copy "pasa el mouse" y otros desktop-ismos** revisados en todo el sitio para
  que ningún texto asuma mouse/hover en móvil.

## P2 — Pulido y cierre

- [ ] Lighthouse: LCP < 2.5s (ojo con el video/imagen del hero), CLS < 0.1, INP < 200ms.
- [ ] Accesibilidad AA: contraste del texto del hero sobre la foto; foco visible; semántica.
- [ ] `prefers-reduced-motion` respetado en todas las animaciones (parallax del hero, demos).
- [ ] Claims/cifras del "Antes/Después" confirmados si se quieren firmes (hoy referenciales).
- [ ] Peso del wordmark del navbar (semibold vs bold) — decisión abierta.

## Resumen en una línea

La marca y la estructura están bien; lo que falla es **demostrar el producto** (demos
rotos en móvil, app real invisible) y **dar confianza** (sin prueba social). Eso es lo
que hay que atacar primero.
