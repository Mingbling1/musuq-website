export const metadata = {
  title: "Política de Privacidad | musuq",
  description: "Política de privacidad de musuq. Cómo recolectamos, usamos y protegemos tus datos personales conforme a la Ley 29733 del Perú.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream-100 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-medium text-warm-800 mb-2">
          Política de Privacidad
        </h1>
        <p className="text-sm text-warm-400 mb-12">
          Última actualización: {new Date().toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-warm-600 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">1. Responsable del tratamiento de datos</h2>
            <p>
              <strong>musuq</strong> (en adelante, "musuq"), con domicilio en Lima, Perú, y correo electrónico{" "}
              <a href="mailto:hello@musuq.tech" className="text-terracotta hover:underline">hello@musuq.tech</a>,{" "}
              es el responsable del tratamiento de los datos personales que proporcions a través de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">2. Ley aplicable</h2>
            <p>
              Esta política de privacidad se rige por la{" "}
              <strong>Ley N° 29733 – Ley de Protección de Datos Personales</strong> del Perú, su reglamento (
              Decreto Supremo N° 003-2013-JUS) y las directivas emitidas por la Autoridad Nacional de Protección de
              Datos Personales (ANPD).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">3. Datos personales que recolectamos</h2>
            <p>Podemos recolectar los siguientes tipos de datos personales:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Información del proyecto o empresa que nos compartas</li>
              <li>Dirección IP y datos de navegación</li>
            </ul>
            <p className="mt-2">
              Estos datos son recolectados únicamente cuando nos los proporcionas voluntariamente a través de
              formularios de contacto, chat o correo electrónico.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">4. Finalidad del tratamiento</h2>
            <p>Utilizamos tus datos personales exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder a tus consultas y mensajes</li>
              <li>Brindarte información sobre nuestros servicios</li>
              <li>Gestionar la relación contractual contigo</li>
              <li>Mejorar nuestra página web y servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">5. Base legal</h2>
            <p>
              El tratamiento de tus datos personales se realiza bajo tu consentimiento expreso, el cual otorgas
              al proporcionarnos tus datos a través de nuestros canales de contacto.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">6. Compartir datos con terceros</h2>
            <p>
              No vendemos, alquilamos ni compartimos tus datos personales con terceros, excepto cuando sea
              necesario para prestar nuestros servicios o cuando la ley lo requiera.
            </p>
            <p className="mt-2">
              Utilizamos servicios de terceros para atención de chat (Chatwoot) y análisis web (Vercel Analytics),
              los cuales tienen sus propias políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">7. Conservación de datos</h2>
            <p>
              Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir con los fines
              para los que fueron recolectados. Los datos de consultas se eliminan tras 24 meses de inactividad,
              salvo que exista una relación contractual vigente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">8. Tus derechos (ARCO)</h2>
            <p>Conforme a la Ley 29733, tienes derecho a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Acceso:</strong> Conocer qué datos tenemos tuyos</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Cancelación:</strong> Eliminar tus datos cuando lo solicites</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
            </ul>
            <p className="mt-2">
              Para ejercer cualquiera de estos derechos, escribe a{" "}
              <a href="mailto:hello@musuq.tech" className="text-terracotta hover:underline">hello@musuq.tech</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">9. Medidas de seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra
              acceso no autorizado, pérdida o alteración.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">10. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Cualquier cambio será publicado en esta página
              con la fecha de "última actualización" modificada.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">11. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, contáctanos:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>Email: <a href="mailto:hello@musuq.tech" className="text-terracotta hover:underline">hello@musuq.tech</a></li>
              <li>Ubicación: Lima, Perú</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
