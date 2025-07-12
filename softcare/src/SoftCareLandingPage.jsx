import React from "react";

export default function SoftCareLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SoftCare360</h1>
          <nav className="space-x-4 text-sm">
            <a href="#que-es" className="hover:underline">¿Qué es?</a>
            <a href="#caracteristicas" className="hover:underline">Características</a>
            <a href="#beneficios" className="hover:underline">Beneficios</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Organiza tu clínica de forma simple y segura</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">SoftCare360 es una plataforma digital para clínicas pequeñas y consultorios médicos que permite gestionar citas, historiales, facturación y más.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Solicitar demo</button>
      </section>

      {/* ¿Qué es? */}
      <section id="que-es" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">¿Qué es SoftCare360?</h3>
          <p>Es una plataforma SaaS pensada para mejorar la gestión diaria de clínicas pequeñas y rurales. Ayuda a optimizar desde la agenda hasta la comunicación con pacientes, todo en la nube y cumpliendo normativas de protección de datos.</p>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Características principales</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4 shadow rounded-xl">
              <h4 className="font-semibold mb-2">Gestión de Citas</h4>
              <p>Agenda intuitiva y automatizada para pacientes y profesionales.</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl">
              <h4 className="font-semibold mb-2">Historial Médico</h4>
              <p>Registros clínicos seguros y accesibles desde cualquier lugar.</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl">
              <h4 className="font-semibold mb-2">Facturación y Reportes</h4>
              <p>Emisión de facturas y reportes financieros fácilmente.</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl">
              <h4 className="font-semibold mb-2">Comunicación con Pacientes</h4>
              <p>Recordatorios automáticos y mensajes desde el sistema.</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl">
              <h4 className="font-semibold mb-2">Seguridad de Datos</h4>
              <p>Cumple con normativas para proteger la privacidad de la información.</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl">
              <h4 className="font-semibold mb-2">Accesible desde cualquier dispositivo</h4>
              <p>Funciona en computadoras, tablets y celulares.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">¿Por qué elegir SoftCare360?</h3>
          <ul className="list-disc list-inside text-left text-sm space-y-2">
            <li>Reduce el uso de papel y mejora la organización</li>
            <li>Evita pérdidas de datos con respaldo automático</li>
            <li>Mejora la atención al paciente con recordatorios y seguimiento</li>
            <li>No requiere instalación ni servidores locales</li>
            <li>Flexible y asequible para clínicas pequeñas</li>
          </ul>
        </div>
      </section>

      {/* Contacto / CTA */}
      <section id="contacto" className="bg-blue-600 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-2">¿Listo para transformar tu clínica?</h3>
        <p className="mb-4">Contáctanos hoy mismo y solicita tu demo personalizada</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition">Solicitar demo</button>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} SoftCare360. Todos los derechos reservados.
      </footer>
    </div>
  );
}
