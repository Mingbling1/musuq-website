export default function ScrollyTPV() {
  return (
    <section className="scrolly" id="scrolly2" style={{ height: '420vh' }}><div className="scrolly__sticky">
      <div className="scrolly__grid">
        <div className="stage"><div>
          <div className="tpv" id="tpv" aria-hidden="true">
            <div className="tpv__monitor"><div className="tpv__display">
              <div className="tscreen pos active" data-t="0"><div className="pos__side"><span>▦</span><span>🛒</span><span>🔔</span><span>🏷</span><span>◔</span></div><div className="pos__main"><div className="pos__tabs"><b>Todos</b><span>Bebidas frías</span><span>Comida</span></div><div className="pos__grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div><div className="pos__cart"><div style={{ fontWeight: 600, marginBottom: '8px' }}>Mesa 3</div><div className="li"><span>2 · Expreso</span><b>5.00</b></div><div className="li"><span>1 · Napolitana</span><b>3.00</b></div><div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>Total<span>8.00</span></div><div className="pos__pay"><b style={{ background: '#f2f0ea' }}>Efectivo</b><b style={{ background: '#1e1c1c', color: '#FDFCFA' }}>Tarjeta</b></div></div></div>
              <div className="tscreen info" data-t="1"><div className="mkh">Informes · Estadísticas</div><div className="big">S/ 3 524,00</div><div className="lbl">27 ventas · hoy</div><div className="kpi"><div><b>376</b><div className="lbl">Productos</div></div><div><b>S/ 15,30</b><div className="lbl">Venta media</div></div></div><div className="kpi"><div><b>Café con leche</b><div className="lbl">Más vendido</div></div><div><b>12:00–13:00</b><div className="lbl">Hora pico</div></div></div></div>
              <div className="tscreen kds" data-t="2"><div className="mkh">Comandas · Cocina</div><div className="kds-grid"><div className="kds-tkt"><b>Mesa 3</b><span>2 · Ceviche</span><span>1 · Lomo saltado</span><i className="kds-st">En curso</i></div><div className="kds-tkt"><b>Llevar #128</b><span>1 · Ají de gallina</span><span>1 · Chicha</span><i className="kds-st done">Listo</i></div><div className="kds-tkt"><b>Mesa 7</b><span>3 · Anticuchos</span><i className="kds-st">Nuevo</i></div></div></div>
            </div><span className="tpv__brand">musuq</span></div>
            <div className="tpv__stand"></div><div className="tpv__base"></div>
          </div>
          <div className="tpv__shadow" id="tpvShadow"></div>
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
