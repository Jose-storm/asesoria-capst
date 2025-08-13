import React from "react";
import EquipoN from "./EquipoN";
import NosotrosDescription from "@/components/nosotros/NosotrosDescription";
import NosotrosVideo from "@/components/nosotros/NosotrosVideo";
import ImgAb from "@/assets/img/taller.jpg"

const Nosotros: React.FC = () => {
return (
    <>
      {/* Sección 1: ¿Quienes somos? */}
        <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src={ImgAb}
                    alt="Publicidad"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

                    <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
                        <p>Empresa</p>
                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
                            Asesoría Empresarial
                        </h1>
                    </div>
                    </div>
                </div>
        </section>

        <section className="bg-[#fff] pt-16 px-4">
            <div className="max-w-7xl mx-auto font-fam-ge text-justify">
                <p className="text-lg text-gray-700 text-center">
                    En Asesoría Empresarial, impulsamos el crecimiento y éxito de tu empresa. Ofrecemos asesoramiento integral en áreas clave como planificación estratégica, gestión financiera, marketing digital, optimización de procesos, recursos humanos y cumplimiento normativo. Nuestro equipo de expertos te guiará en cada etapa, desde la creación de tu plan de negocios hasta la consolidación de tu marca en el mercado.
                    
                    Nos especializamos en analizar a fondo cada realidad empresarial para ofrecer recomendaciones claras, viables y orientadas a resultados. Nuestra experiencia abarca desde pequeñas y medianas empresas hasta corporaciones en proceso de transformación, adaptándonos siempre a sus necesidades específicas.
                </p>
                <br />
            </div>
        </section>
        {/* Sección 2: Misión y visión con Description */}
        <NosotrosDescription></NosotrosDescription>

        {/* Sección 2: Misión y Visión con Acordeón */}
        <EquipoN></EquipoN>

        {/* Sección de Youtube video */}
        <NosotrosVideo></NosotrosVideo>
    </>
);
};

export default Nosotros;
