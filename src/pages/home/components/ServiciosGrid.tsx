import React from "react";

type Servicio = {
    id: number;
    titulo: string;
    descripcion: string;
    icono: React.ReactNode;
};

const servicios: Servicio[] = [
    {
        id: 1,
        titulo: "Asesoría Laboral",
        descripcion: "Análisis y desarrollo de estrategias para mejorar tu negocio.",
        icono: "🧑‍💻"
    },
    {
        id: 2,
        titulo: "Asesoría Financiera",
        descripcion: "Optimiza tus finanzas para un crecimiento sostenible.",
        icono: "🧑‍🏫"
    },
    {
        id: 3,
        titulo: "Asesoría Contable",
        descripcion: "Gestiona de manera eficiente el área de contabilidad para tu sostenibilidad a largo plazo",
        icono: "🧑‍🔬"
    },
    {
        id: 4,
        titulo: "Asesoría Tributaria",
        descripcion: "Asegurate de cumplir con la ley y optimizar tu carga impositiva.",
        icono: "🧑‍💼"
    },
];

const ServiciosGrid: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto py-15 px-6" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-center font-fam-two capitalize">Soluciones que ofrecemos para tu negocio</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Conoce las soluciones que brindamos para ayudarte a alcanzar tus objetivos. Nuestro equipo está listo para ofrecerte el mejor apoyo en cada etapa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {servicios.map(({ id, titulo, descripcion, icono }) => (
                <div
                    key={id}
                    className="hover:text-[#103778] border-blue-400 hover:bg-[#103778] transition delay-50 duration-300 border-1 rounded-lg hover:text-white transition hover:duration-200 shadow-md p-6 hover:shadow-lg"
                >
                    <div className="mb-4 text-5xl">{icono}</div>
                    <h3 className="text-xl font-semibold mb-2 font-fam-ge">{titulo}</h3>
                    <p className="">{descripcion}</p>
                </div>
                ))}
            </div>
        </section>
    );
};

export default ServiciosGrid;
