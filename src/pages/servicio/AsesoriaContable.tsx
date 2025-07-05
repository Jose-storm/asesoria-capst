//Asesoria Contable page
//Importación de imágenes por variables
import ImgC from "@/assets/img/I_contable.jpg"
import ImgCd from "@/assets/img/acont_one.png"
import ImgCS from "@/assets/img/AC_servicio.jpg"

const features = [
    "Registro y clasificación de operaciones contables",
    "Elaboración y presentación de libros contables electrónico",
    "Declaraciones mensuales y anuales de impuestos",
    "Preparación de estados financieros (Balance general, Estado de resultados)",
    "Conciliaciones bancarias periódicas",
    "Asesoría permanente en temas contables y tributarios",
    "Revisión de obligaciones frente a SUNAT y otros entes reguladores"
];
export default function AsesoriaContable(){

    return(
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src={ImgC}
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
                                Asesoría Contable
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
            {/* Seccion de información Ayuda recibidad en la asesoría */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 font-fam mb-4">
                    ¿Qué ayuda puedes recibir con nuestra <span className="text-[#103778]">Asesoría Contable</span>?
                    </h2>
                    <p className="text-base text-gray-600 font-fam">
                        Nos convertimos en tu aliado estratégico para que tu empresa mantenga sus finanzas organizadas, cumpla con la ley y crezca con solidez.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Item 1 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-[#103778] mb-3">Organización contable</h3>
                    <p className="text-gray-700">
                        Clasificamos, registramos y controlamos toda tu información financiera conforme a las normas vigentes.
                    </p>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-[#103778] mb-3">Declaraciones tributarias</h3>
                    <p className="text-gray-700">
                        Te ayudamos a presentar correctamente tus impuestos, evitando sanciones y optimizando tus recursos.
                    </p>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-[#103778] mb-3">Análisis financiero</h3>
                    <p className="text-gray-700">
                        Evaluamos tu situación financiera para ayudarte a tomar decisiones estratégicas con mayor seguridad.
                    </p>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-[#103778] mb-3">Elaboración de estados financieros</h3>
                    <p className="text-gray-700">
                        Preparamos tus balances, cuentas de resultados y otros reportes esenciales para inversionistas o bancos.
                    </p>
                    </div>

                    {/* Item 5 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-[#103778] mb-3">Soporte permanente</h3>
                    <p className="text-gray-700">
                        Resolvemos tus consultas contables de forma clara, rápida y con total compromiso profesional.
                    </p>
                    </div>

                    {/* Item 6 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold text-[#103778] mb-3">Adaptación a tu rubro</h3>
                    <p className="text-gray-700">
                        Nuestro servicio se ajusta a las necesidades específicas de tu sector, ya seas comercio, servicios o industria.
                    </p>
                    </div>
                </div>
            </section>
            {/* Sección de servicios de Asesoría contable */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Imagen */}
                    <div className="w-full h-auto flex justify-center items-center">
                    <img
                        src={ImgCS} // Asegúrate que ImgCd esté importada
                        alt="Servicios de Asesoría Contable"
                        className="w-full h-auto shadow-lg"
                    />
                    </div>

                    {/* Lista de servicios */}
                    <div className="text-gray-800 font-fam-ge">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-fam">
                        Servicios incluidos en nuestra <span className="text-[#103778]">Asesoría Contable</span>
                    </h2>
                    <p className="text-base text-gray-700 font-fam mb-6">En su disposición se encuentra los siguientes servicios en Asesoría Contable:</p>
                    <ul className="space-y-3">
                        {features.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 font-fam-ge">
                            <span className="text-[#103778] text-lg"><i className="fa-solid fa-circle-check"></i></span>
                            <span className="text-gray-800 text-lg">{item}</span>
                        </li>
                        ))}
                    </ul>
                    </div>

                </div>
            </section>
        </>
    )
}