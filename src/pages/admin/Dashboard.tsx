// import React from "react";

const InicioAdmin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-1xl font-bold text-[#103778] mb-4 font-fam-two">¡Bienvenido al Panel de Administración!</h1>
        
        <p className="text-gray-700 text-lg mb-6 font-fam">
          Este es el sistema de gestión para <span className="font-semibold text-[#103778]">Asesoría Empresarial</span>, una plataforma diseñada para simplificar la administración de contenido, mejorar la comunicación con los usuarios y brindar un entorno seguro y profesional para la toma de decisiones.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-600 mb-2 font-fam-ge">¿Qué puedes hacer aquí?</h2>
            <ul className="list-disc list-inside text-gray-700 font-fam">
              <li>Gestionar artículos y publicaciones.</li>
              <li>Revisar y responder formularios de contacto.</li>
              <li>Actualizar información institucional.</li>
              <li>Registrar Docentes de cursos.</li>
              <li>Gestionar Talleres o cursos a brindar.</li>

            </ul>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 font-fam-ge">Sobre la empresa</h2>
            <p className="text-gray-700 font-fam">
              Asesoría Empresarial es líder en brindar asesoría empresarial a pequeñas y medianas empresas. Nuestro objetivo es potenciar tu crecimiento con soluciones estratégicas, innovadoras y enfocadas en resultados.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Panel creado para uso exclusivo del administrador del sistema.
        </p>
      </div>
    </div>
  );
};

export default InicioAdmin;
