import React from "react";
import { twMerge } from "tailwind-merge";

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
        icono: "🧑‍💻",
    },
    {
        id: 2,
        titulo: "Asesoría Financiera",
        descripcion: "Optimiza tus finanzas para un crecimiento sostenible.",
        icono: "🧑‍🏫",
    },
    {
        id: 3,
        titulo: "Asesoría Contable",
        descripcion:
        "Gestiona de manera eficiente el área de contabilidad para tu sostenibilidad a largo plazo",
        icono: "🧑‍🔬",
    },
    {
        id: 4,
        titulo: "Asesoría Tributaria",
        descripcion:
        "Asegúrate de cumplir con la ley y optimizar tu carga impositiva.",
        icono: "🧑‍💼",
    },
];

const cardBase = "group rounded-xl border border-transparent bg-white/90 backdrop-blur-sm p-6 shadow-md transition-transform duration-300";

const cardHover = "hover:-translate-y-2 hover:shadow-xl hover:border-blue-500";

const ServiciosGrid: React.FC = () => (
    <section className="max-w-7xl mx-auto py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-center font-fam-two capitalize">
            Soluciones que ofrecemos para tu negocio
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conoce las soluciones que brindamos para ayudarte a alcanzar tus objetivos.
            Nuestro equipo está listo para ofrecerte el mejor apoyo en cada etapa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicios.map(({ id, titulo, descripcion, icono }) => (
            <div key={id} className={twMerge(cardBase, cardHover)}>
            {/* icono */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#103778] to-blue-500 text-3xl text-white">
                {icono}
            </div>

            <h3 className="text-lg font-semibold mb-2 font-fam-ge text-gray-900 group-hover:text-blue-700">
                {titulo}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200 group-hover:transition-colors">
                {descripcion}
            </p>
            </div>
        ))}
        </div>
    </section>
);

export default ServiciosGrid;
