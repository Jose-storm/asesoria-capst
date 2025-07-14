import ImgT from "@/assets/img/asesoria_tributaria.jpg"
import ImgCd from "@/assets/img/tributo_tax.png"
type Servicio = {
    id: number;
    titulo: string;
    descripcion: string;
    icono: React.ReactNode;
};
const serviciosTributarios: Servicio[] = [
    {
        id: 1,
        titulo: 'Declaraciones de impuestos',
        descripcion:
        'Preparamos y presentamos tus tributos mensuales y anuales para que cumplas puntualmente la normativa y evites sanciones.',
        icono: '🧾',
    },
    {
        id: 2,
        titulo: 'Planificación fiscal',
        descripcion:
        'Diseñamos estrategias legales que optimizan tu carga tributaria, alineadas con los objetivos y proyección de tu empresa.',
        icono: '🗂️',
    },
    {
        id: 3,
        titulo: 'Regularización de deudas',
        descripcion:
        'Analizamos y negociamos fraccionamientos o refinanciamientos para que regularices tus obligaciones con SUNAT sin afectar tu liquidez.',
        icono: '💳',
    },
    {
        id: 4,
        titulo: 'Representación ante SUNAT',
        descripcion:
        'Te acompañamos y defendemos durante fiscalizaciones o requerimientos, respondiendo consultas y presentando descargos técnicos.',
        icono: '⚖️',
    },
    {
        id: 5,
        titulo: 'Gestión de retenciones y percepciones',
        descripcion:
        'Implementamos procedimientos correctos para aplicar, registrar y declarar retenciones y percepciones de IGV e Impuesto a la Renta.',
        icono: '📑',
    },
    {
        id: 6,
        titulo: 'Fiscalización preventiva',
        descripcion:
        'Auditamos internamente tu documentación contable y tributaria para detectar riesgos y corregirlos antes de inspecciones oficiales.',
        icono: '🔍',
    },
];

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
                        Cumple <span className="text-[#103778]">con tus obligaciones fiscales</span> con nuestra Asesoría Tributaria
                    </h2>
                    <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                        En <strong>Asesoría Empresarial</strong>, brindamos un servicio especializado en <strong>asesoría tributaria</strong> para pequeñas y medianas empresas, ayudándolas a cumplir con el marco legal vigente y optimizar su carga fiscal de forma responsable.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Te asesoramos en la correcta declaración de impuestos, gestión de tributos mensuales y anuales, fiscalizaciones y presentación de información ante SUNAT. Nuestro objetivo es reducir riesgos, evitar sanciones y mantener tu empresa en regla con total tranquilidad.
                    </p>
                    </div>

                    {/* Imagen */}
                    <div className="w-full h-auto flex justify-center items-center">
                    <img
                        src={ImgCd}
                        alt="Asesoría Tributaria"
                        className="w-full h-auto"
                    />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 font-fam">
                    ¿Cómo te ayudamos con nuestro <span className="text-[#103778]">Análisis Tributario?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-fam">
                    Acompañamos a tu empresa en la toma de decisiones estratégicas basadas en datos financieros sólidos, proyecciones realistas y control efectivo del rendimiento económico.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {serviciosTributarios.map((item) => (
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
        </>
    )
}