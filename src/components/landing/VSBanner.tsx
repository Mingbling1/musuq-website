export default function VSBanner() {
  return (
    <section className="vs" id="comparativa">
      <div className="vs__banner">
        <div className="vs__layer vs__con">
          <div className="vs__intro">
            <span className="vs__state">Con Musuq</span>
            <h2>El antes y el después</h2>
            <p>Lo que hoy te quita horas, con Musuq se resuelve solo.</p>
          </div>
          <div className="vs__rows">
            <div className="vs__row"><span className="k">Cierre de caja</span><span className="v"><span className="vs__ic"></span>en minutos</span></div>
            <div className="vs__row"><span className="k">Errores en pedidos</span><span className="v"><span className="vs__ic"></span>casi cero</span></div>
            <div className="vs__row"><span className="k">Conciliación Yape/Plin</span><span className="v"><span className="vs__ic"></span>automática</span></div>
            <div className="vs__row"><span className="k">Atención al cliente</span><span className="v"><span className="vs__ic"></span>hasta 35% más rápida</span></div>
            <div className="vs__row"><span className="k">Control del negocio</span><span className="v"><span className="vs__ic"></span>en tiempo real</span></div>
          </div>
        </div>
        <div className="vs__layer vs__sin" id="vsSin">
          <div className="vs__intro">
            <span className="vs__state">Sin Musuq</span>
            <h2>El antes y el después</h2>
            <p>Lo que hoy te quita horas, con Musuq se resuelve solo.</p>
          </div>
          <div className="vs__rows">
            <div className="vs__row"><span className="k">Cierre de caja</span><span className="v"><span className="vs__ic"></span>hasta 90 min</span></div>
            <div className="vs__row"><span className="k">Errores en pedidos</span><span className="v"><span className="vs__ic"></span>frecuentes</span></div>
            <div className="vs__row"><span className="k">Conciliación Yape/Plin</span><span className="v"><span className="vs__ic"></span>a mano</span></div>
            <div className="vs__row"><span className="k">Atención al cliente</span><span className="v"><span className="vs__ic"></span>lenta</span></div>
            <div className="vs__row"><span className="k">Control del negocio</span><span className="v"><span className="vs__ic"></span>a ciegas</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
