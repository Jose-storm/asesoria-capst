//Asesoria Contable page
//Importación de imágenes por variables
import ImgC from "@/assets/img/I_contable.jpg"
import ImgCd from "@/assets/img/acont_one.png"
import ImgCS from "@/assets/img/AC_servicio.jpg"
// data/serviciosContables.ts
// types.ts o dentro del componente
type Servicio = {
  id: number;
  titulo: string;
  descripcion: string;
  icono: React.ReactNode;
};

const serviciosContable: Servicio[] = [
    {
        id: 1,
        titulo: 'Organización contable',
        descripcion:
        'Clasificamos y registramos tus operaciones conforme a las normas contables vigentes, manteniendo tu contabilidad al día.',
        icono: '📁',
    },
    {
        id: 2,
        titulo: 'Declaraciones tributarias',
        descripcion:
        'Preparamos y presentamos tus impuestos mensuales y anuales cumpliendo con las obligaciones fiscales para evitar sanciones.',
        icono: '🧾',
    },
    {
        id: 3,
        titulo: 'Elaboración de estados financieros',
        descripcion:
        'Preparamos tus balances, estados de resultados y reportes contables clave para inversionistas, bancos y SUNAT.',
        icono: '📊',
    },
    {
        id: 4,
        titulo: 'Asesoría en libros contables',
        descripcion:
        'Llevamos y supervisamos tus libros contables obligatorios y electrónicos conforme a lo exigido por la normativa vigente.',
        icono: '📚',
    },
    {
        id: 5,
        titulo: 'Soporte contable personalizado',
        descripcion:
        'Atendemos tus dudas contables y tributarias de forma clara y profesional, acompañándote en cada etapa del proceso.',
        icono: '💬',
    },
    {
        id: 6,
        titulo: 'Adaptación a tu sector',
        descripcion:
        'Personalizamos el servicio contable según el rubro de tu empresa: comercio, servicios, construcción, industria u otros.',
        icono: '⚙️',
    },
];



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
                        Fortalece <span className="text-[#103778]">la salud financiera</span> de tu negocio con nuestra Asesoría Contable
                    </h2>
                    <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                        En <strong>Asesoría Empresarial</strong>, brindamos servicios especializados en <strong>asesoría contable</strong> para pequeñas y medianas empresas, ayudándolas a mantener sus finanzas ordenadas, cumplir con sus obligaciones fiscales y tomar decisiones estratégicas con información precisa.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Nos encargamos de la organización contable, elaboración de estados financieros, declaraciones tributarias, y más. Nuestro acompañamiento personalizado te permite enfocarte en hacer crecer tu negocio, mientras nosotros cuidamos de tu contabilidad con responsabilidad y profesionalismo.
                    </p>
                    </div>

                    {/* Imagen */}
                    <div className="w-full h-auto flex justify-center items-center">
                    <img
                        src={ImgCd}
                        alt="Asesoría Contable"
                        className="w-full h-auto"
                    />
                    </div>
                </div>
            </section>

            {/* Seccion de información Ayuda recibidad en la asesoría */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 font-fam">
                    ¿Cómo te ayudamos con nuestra <span className="text-[#103778]">Asesoría Contable?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-fam">
                    Acompañamos a tu empresa en la toma de decisiones estratégicas basadas en datos financieros sólidos, proyecciones realistas y control efectivo del rendimiento económico.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {serviciosContable.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 text-left flex flex-col gap-4"
                    >
                        <div className="text-4xl text-[#103778]">{item.icono}</div>
                        <h3 className="text-xl font-semibold text-[#103778]">{item.titulo}</h3>
                        <p className="text-gray-700 leading-relaxed text-base">{item.descripcion}</p>
                    </div>
                    ))}
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