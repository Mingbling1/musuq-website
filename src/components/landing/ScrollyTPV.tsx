"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyTPV() {
  const sectionRef = useRef<HTMLElement>(null);
  const tpvRef = useRef<HTMLDivElement>(null);
  const dispRef = useRef<HTMLDivElement>(null); // .tpv__display
  const shadowRef = useRef<HTMLDivElement>(null);
  const reduceRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // layout2: escala las .tscreen a la marca REF2=452
  useEffect(() => {
    reduceRef.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const disp = dispRef.current;
    const section = sectionRef.current;
    if (!disp || !section) return;
    const REF2 = 452;
    const layout = () => {
      const w = disp.clientWidth;
      const h = disp.clientHeight;
      const sc = w / REF2;
      section.querySelectorAll<HTMLElement>(".tscreen").forEach((s) => {
        s.style.inset = "auto";
        s.style.top = "0";
        s.style.left = "0";
        s.style.width = REF2 + "px";
        s.style.height = h / sc + "px";
        s.style.transformOrigin = "top left";
        s.style.transform = "scale(" + sc + ")";
      });
      apply(scrollYProgress.get());
    };
    const ro = new ResizeObserver(layout);
    ro.observe(disp);
    layout();
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const apply = (p: number) => {
    const tpv = tpvRef.current;
    const section = sectionRef.current;
    if (!tpv || !section) return;
    const reduce = reduceRef.current;
    const deg = reduce ? -10 : -14 + p * 44;
    const rx = reduce ? 4 : 4 + Math.sin(p * Math.PI) * 3;
    tpv.style.transform = "rotateY(" + deg + "deg) rotateX(" + rx + "deg)";
    if (shadowRef.current) {
      shadowRef.current.style.transform =
        "scaleX(" + (1 - Math.abs(p - 0.5) * 0.5) + ") translateX(" + (p - 0.5) * 60 + "px)";
    }
    const tscreens = section.querySelectorAll<HTMLElement>(".tscreen");
    const steps = section.querySelectorAll<HTMLElement>(".step");
    const i = Math.round(p * (tscreens.length - 1));
    tscreens.forEach((s, k) => s.classList.toggle("active", k === i));
    steps.forEach((s, k) => s.classList.toggle("active", k === i));
  };

  useMotionValueEvent(scrollYProgress, "change", apply);

  return (
    <section className="scrolly" id="scrolly2" style={{ height: "420vh" }} ref={sectionRef}><div className="scrolly__sticky">
      <div className="scrolly__grid">
        <div className="stage"><div>
          <div className="tpv" id="tpv" aria-hidden="true" ref={tpvRef}>
            <div className="tpv__monitor"><div className="tpv__display" ref={dispRef}>
              <div className="tscreen pos active" data-t="0"><div className="pos__side"><span>▦</span><span>🛒</span><span>🔔</span><span>🏷</span><span>◔</span></div><div className="pos__main"><div className="pos__tabs"><b>Todos</b><span>Bebidas frías</span><span>Comida</span></div><div className="pos__grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div><div className="pos__cart"><div style={{ fontWeight: 600, marginBottom: '8px' }}>Mesa 3</div><div className="li"><span>2 · Expreso</span><b>5.00</b></div><div className="li"><span>1 · Napolitana</span><b>3.00</b></div><div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>Total<span>8.00</span></div><div className="pos__pay"><b style={{ background: '#f2f0ea' }}>Efectivo</b><b style={{ background: '#1e1c1c', color: '#FDFCFA' }}>Tarjeta</b></div></div></div>
              <div className="tscreen info" data-t="1"><div className="mkh">Informes · Estadísticas</div><div className="big">S/ 3 524,00</div><div className="lbl">27 ventas · hoy</div><div className="kpi"><div><b>376</b><div className="lbl">Productos</div></div><div><b>S/ 15,30</b><div className="lbl">Venta media</div></div></div><div className="kpi"><div><b>Café con leche</b><div className="lbl">Más vendido</div></div><div><b>12:00–13:00</b><div className="lbl">Hora pico</div></div></div></div>
              <div className="tscreen kds" data-t="2"><div className="mkh">Comandas · Cocina</div><div className="kds-grid"><div className="kds-tkt"><b>Mesa 3</b><span>2 · Ceviche</span><span>1 · Lomo saltado</span><i className="kds-st">En curso</i></div><div className="kds-tkt"><b>Llevar #128</b><span>1 · Ají de gallina</span><span>1 · Chicha</span><i className="kds-st done">Listo</i></div><div className="kds-tkt"><b>Mesa 7</b><span>3 · Anticuchos</span><i className="kds-st">Nuevo</i></div></div></div>
            </div><span className="tpv__brand">musuq</span></div>
            <div className="tpv__stand"></div><div className="tpv__base"></div>
          </div>
          <div className="tpv__shadow" id="tpvShadow" ref={shadowRef}></div>
        </div></div>
        <div className="steps">
          <div className="step active"><span className="chip">En tu mostrador</span><h2>Tu caja, en cualquier pantalla</h2><p>Lo mismo en el celular, la tablet o la laptop, sincronizado al instante.</p><a className="btn btn--dark" href="https://app.musuq.tech">Conoce la app</a></div>
          <div className="step"><span className="chip">Informes</span><h2>Conoce tu negocio</h2><p>Mira tus ventas, tu mejor categoría y los momentos de mayor actividad, todo claro y al instante.</p><a className="btn btn--dark" href="https://app.musuq.tech">Ver informes</a></div>
          <div className="step"><span className="chip">Cocina</span><h2>La cocina, siempre al día</h2><p>Cada pedido llega a la pantalla de cocina por orden de llegada; tu equipo avanza el estado con un toque.</p><a className="btn btn--dark" href="https://app.musuq.tech">Ver comandas</a></div>
        </div>
      </div>
    </div></section>
  );
}
