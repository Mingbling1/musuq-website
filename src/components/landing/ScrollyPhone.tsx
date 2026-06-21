export default function ScrollyPhone() {
  return (
    <section className="scrolly" id="scrolly" style={{ height: '380vh' }}>
      <div className="scrolly__sticky">
        <div className="dots"><i className="on"></i><i></i><i></i></div>
        <div className="scrolly__grid">
          <div className="steps">
            <div className="step active"><span className="chip">Resumen</span><h2>Tu negocio en números reales</h2><p>Mira tus ventas del día, tus métodos de pago y tus horas pico, en tiempo real.</p><a className="btn btn--dark" href="https://app.musuq.tech">Ver la app</a></div>
            <div className="step"><span className="chip">✦ Carta con IA</span><h2>Arma tu carta con IA</h2><p>Sube una foto y la IA detecta platos y precios. O genera descripciones tentadoras sin escribir nada.</p><a className="btn btn--dark" href="https://app.musuq.tech">Probar la IA</a></div>
            <div className="step"><span className="chip">Para llevar</span><h2>Despacha sin pisar las mesas</h2><p>Cola de pedidos para llevar con hora de recojo y cobro adelantado, en tiempo real.</p><a className="btn btn--dark" href="https://app.musuq.tech">Empieza gratis</a></div>
          </div>
          <div className="phone" aria-hidden="true">
            <div className="phone__island"></div>
            <div className="phone__screen"><div className="phone__track" id="track">

              <div className="screen">
                <div className="sb"><span>9:41</span><span className="sb__r"><svg width="17" height="11" viewBox="0 0 17 11" fill="#1A1A1A"><rect y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" width="3" height="11" rx="1"/></svg><svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"><path d="M1 4.3C4.8 1 11.2 1 15 4.3"/><path d="M3.5 6.7C6 4.6 10 4.6 12.5 6.7"/><path d="M5.9 9C7.2 8 8.8 8 10.1 9"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="#1A1A1A" opacity=".35"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="#1A1A1A"/><rect x="22.5" y="4" width="1.5" height="4" rx="1" fill="#1A1A1A" opacity=".35"/></svg></span></div>
                <div className="scr">
                  <div className="scr__h"><div className="mkh">Resumen</div><span className="a-muted">Hoy</span></div>
                  <div className="acard acard--fill">
                    <div className="a-lbl">Ventas de hoy</div>
                    <div className="a-big">S/ 1 245,50</div>
                    <div className="a-delta">▲ +5% vs ayer</div>
                    <div className="a-bars"><i style={{ height: '38%' }}></i><i style={{ height: '54%' }}></i><i style={{ height: '44%' }}></i><i style={{ height: '72%' }}></i><i style={{ height: '100%', background: '#FDFCFA' }}></i><i style={{ height: '64%' }}></i><i style={{ height: '50%' }}></i><i style={{ height: '34%' }}></i></div>
                  </div>
                  <div className="acard">
                    <div className="a-lbl" style={{ marginBottom: '4px' }}>Métodos de pago</div>
                    <div className="a-row"><span className="a-ic">💵</span><span className="a-name">Efectivo</span><b>S/ 450,00</b></div>
                    <div className="a-row"><span className="a-ic">📱</span><span className="a-name">Billetera digital</span><b>S/ 320,00</b></div>
                    <div className="a-row"><span className="a-ic">💳</span><span className="a-name">Tarjeta</span><b>S/ 475,50</b></div>
                  </div>
                </div>
              </div>

              <div className="screen">
                <div className="sb"><span>9:41</span><span className="sb__r"><svg width="17" height="11" viewBox="0 0 17 11" fill="#1A1A1A"><rect y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" width="3" height="11" rx="1"/></svg><svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"><path d="M1 4.3C4.8 1 11.2 1 15 4.3"/><path d="M3.5 6.7C6 4.6 10 4.6 12.5 6.7"/><path d="M5.9 9C7.2 8 8.8 8 10.1 9"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="#1A1A1A" opacity=".35"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="#1A1A1A"/><rect x="22.5" y="4" width="1.5" height="4" rx="1" fill="#1A1A1A" opacity=".35"/></svg></span></div>
                <div className="scr">
                  <div className="scr__h"><div className="mkh">Carta</div><span className="ai-btn">✦ Importar con IA</span></div>
                  <div className="acard">
                    <div className="a-lbl" style={{ marginBottom: '2px' }}>Entradas</div>
                    <div className="item"><span className="ph"></span><span className="it-l"><b>Ceviche clásico</b><span>Pescado fresco, limón, camote</span></span><span className="it-p">S/ 28</span></div>
                    <div className="item"><span className="ph"></span><span className="it-l"><b>Causa limeña</b><span style={{ color: 'var(--terra)' }}>✦ descripción con IA</span></span><span className="it-p">S/ 22</span></div>
                  </div>
                  <div className="acard acard--fill" style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                    <span style={{ fontSize: '19px' }}>✦</span>
                    <div><div style={{ fontWeight: 600, fontSize: '13.5px' }}>Genera descripciones con IA</div><div style={{ fontSize: '11.5px', opacity: '.85' }}>Toda tu carta, sin escribir nada</div></div>
                  </div>
                </div>
              </div>

              <div className="screen">
                <div className="sb"><span>9:41</span><span className="sb__r"><svg width="17" height="11" viewBox="0 0 17 11" fill="#1A1A1A"><rect y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" width="3" height="11" rx="1"/></svg><svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"><path d="M1 4.3C4.8 1 11.2 1 15 4.3"/><path d="M3.5 6.7C6 4.6 10 4.6 12.5 6.7"/><path d="M5.9 9C7.2 8 8.8 8 10.1 9"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="#1A1A1A" opacity=".35"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="#1A1A1A"/><rect x="22.5" y="4" width="1.5" height="4" rx="1" fill="#1A1A1A" opacity=".35"/></svg></span></div>
                <div className="scr">
                  <div className="scr__h"><div className="mkh">Para llevar</div><span className="a-muted">3 activos</span></div>
                  <div className="pcard"><div className="pc-top"><span className="pc-tot">📦 #128</span><span className="pc-tot">S/ 54,00</span></div><div className="pc-sub">hace 3 min · Lomo saltado, Chicha (2)</div><div className="pc-bot"><span className="pc-state"><span className="dot dot--prim"></span> Preparando</span><span className="pc-btn">Listo →</span></div></div>
                  <div className="pcard"><div className="pc-top"><span className="pc-tot">📦 #129</span><span className="pc-tot">S/ 31,50</span></div><div className="pc-sub">recojo 1:30 p. m. · Ají de gallina</div><div className="pc-bot"><span className="pc-state"><span className="dot dot--warn"></span> Por cobrar</span><span className="pc-btn">Cobrar</span></div></div>
                  <div className="pcard"><div className="pc-top"><span className="pc-tot">📦 #130</span><span className="pc-tot">S/ 19,00</span></div><div className="pc-sub">hace 8 min · Tallarín saltado</div><div className="pc-bot"><span className="pc-state"><span className="dot dot--ok"></span> Listo</span><span className="pc-btn">Entregar</span></div></div>
                </div>
              </div>

            </div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
