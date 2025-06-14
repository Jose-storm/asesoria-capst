import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Asegúrate de tener lucide-react instalado
import EquipoN from "./EquipoN";

const Nosotros: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
    };

return (
    <>
      {/* Sección 1: ¿Quienes somos? */}
        <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src="/src/assets/img/taller.jpg"
                    alt="Publicidad"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Overlay oscuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

                    {/* Contenido centrado */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
                        ¿Quiénes somos?
                        </h1>
                        <p className="mt-6 text-base sm:text-lg font-fam-ge">
                        Asesoría empresarial estratégica para ayudarte a tomar decisiones inteligentes,
                        optimizar procesos y lograr un crecimiento sostenible. Más de 10 años acompañando
                        a emprendedores y empresas en su camino al éxito.
                        </p>
                    </div>
                    </div>
                </div>
        </section>

        <section className="bg-[#f2f2f2] py-16 px-4">
            <div className="max-w-5xl mx-auto font-fam-ge text-justify">
                <p className="text-lg text-gray-700">
                Somos una empresa peruana dedicada a brindar servicios de asesoría empresarial con un enfoque estratégico, humano y personalizado. Nuestro propósito es contribuir al fortalecimiento de las organizaciones a través de soluciones integrales que mejoren su competitividad, eficiencia y sostenibilidad.
                <br /><br />
                Nos especializamos en analizar a fondo cada realidad empresarial para ofrecer recomendaciones claras, viables y orientadas a resultados. Nuestra experiencia abarca desde pequeñas y medianas empresas hasta corporaciones en proceso de transformación, adaptándonos siempre a sus necesidades específicas.
                <br /><br />
                <br />
                Trabajamos con ética, compromiso y una visión clara del impacto que queremos lograr: empresas más fuertes, preparadas y con propósito.
                Nuestros principales objetivos son:
                </p>
                <br />
                <ul className="list-disc ml-6 mt-2">
                    <li>Impulsar el crecimiento sostenible de nuestros clientes mediante estrategias efectivas.</li>
                    <li>Promover la mejora continua en los procesos organizacionales y de gestión.</li>
                    <li>Fomentar la innovación, la formalización y la toma de decisiones basadas en datos.</li>
                    <li>Ser aliados de confianza en el desarrollo empresarial en el Perú.</li>
                </ul>
                <br />
                <span className="font-semibold">
                    Contáctanos hoy y da el primer paso hacia el éxito empresarial con un equipo que entiende tus desafíos y apuesta por tu crecimiento.
                </span>
            </div>
        </section>

        {/* Sección 2: Misión y Visión con Acordeón */}
        <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto space-y-6 font-fam-ge">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Nuestra Esencia</h2>

            {/* Misión */}
            <div className="border shadow-sm overflow-hidden transition-all">
                <button
                onClick={() => toggleAccordion("mision")}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-white bg-[#103778] hover:bg-blue-400 transition"
                >
                <span>Misión</span>
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                    openAccordion === "mision" ? "rotate-180" : ""
                    }`}
                />
                </button>
                <div
                    className={`px-6 text-gray-700 bg-white transition-all duration-300 overflow-hidden ${
                        openAccordion === "mision" ? "max-h-40 py-4" : "max-h-0"
                    }`}
                    >
                    Brindar asesoría estratégica y soluciones innovadoras que permitan a las empresas alcanzar sus objetivos, con un enfoque en el desarrollo sostenible y la transformación digital.
                </div>
            </div>

            {/* Visión */}
                <div className="border shadow-sm overflow-hidden transition-all">
                    <button
                    onClick={() => toggleAccordion("vision")}
                    className="w-full flex justify-between items-center px-6 py-4 font-semibold text-white bg-[#103778] hover:bg-blue-400 transition"
                    >
                    <span>Visión</span>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                        openAccordion === "vision" ? "rotate-180" : ""
                        }`}
                    />
                    </button>
                    <div
                    className={`px-6 text-gray-700 bg-white transition-all duration-300 overflow-hidden ${
                        openAccordion === "vision" ? "max-h-40 py-4" : "max-h-0"
                    }`}
                    >
                    Ser reconocidos como líderes en consultoría empresarial por nuestra excelencia, innovación y compromiso con el crecimiento de nuestros clientes y la mejora continua.
                    </div>
                </div>
            </div>
        </section>
        <EquipoN></EquipoN>
    </>
);
};

export default Nosotros;
