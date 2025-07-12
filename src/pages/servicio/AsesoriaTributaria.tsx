import ImgT from "@/assets/img/asesoria_tributaria.jpg"
import ImgCd from "@/assets/img/tributaria_one.png"

export default function AsesoriaTributaria(){
    return(
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src={ImgT}
                    alt="Publicidad"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Overlay oscuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

                    {/* Contenido centrado */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
                            {/* <p className="text-base">Cursos y talleres</p> */}
                            <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
                                Asesoría Tributaria
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* Posibilidad de segmentarlo por componentes */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Descripción */}
                    <div className="text-gray-800 font-fam-ge">
                    <h2 className="text-4xl font-bold font-fam mb-4 leading-tight">
                        Optimizando <span className="text-[#103778]">la gestión del talento</span> con nuestra Asesoría Laboral
                    </h2>
                    <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                        En <strong>Asesoría Empresarial</strong>, ofrecemos servicios especializados en <strong>asesoría laboral</strong> para pequeñas y medianas empresas, ayudándolas a cumplir con la normativa vigente y a establecer relaciones laborales justas, estables y eficientes.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Desde la elaboración de contratos hasta la implementación de políticas internas y manejo de planillas, nuestro acompañamiento permite reducir riesgos legales y mejorar la productividad, fomentando un clima laboral saludable y alineado con los objetivos del negocio.
                    </p>
                    </div>

                    {/* Imagen */}
                    <div className="w-full h-auto flex justify-center items-center">
                    <img
                        src={ImgCd}
                        alt="Asesoría Laboral"
                        className="w-full h-auto"
                    />
                    </div>
                </div>
            </section>
        </>
    )
}