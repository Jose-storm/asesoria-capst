import ImgL from "@/assets/img/laboral_one.jpg"
import ImgCd from "@/assets/img/tributaria_one.png"

type Servicio = {
    id: number;
    titulo: string;
    descripcion: string;
    icono: React.ReactNode;
};
const serviciosLaborales: Servicio[] = [
    {
        id: 1,
        titulo: 'Elaboración de contratos',
        descripcion:
        'Redactamos y actualizamos contratos laborales conforme a la normativa vigente, cuidando cada cláusula para proteger a la empresa y al trabajador.',
        icono: '📄',
    },
    {
        id: 2,
        titulo: 'Gestión de planillas',
        descripcion:
        'Calculamos sueldos, retenciones y aportes, emitimos boletas electrónicas y llevamos tus planillas al día para evitar contingencias.',
        icono: '🗂️',
    },
    {
        id: 3,
        titulo: 'Cumplimiento normativo',
        descripcion:
        'Revisamos tus procesos para garantizar el cumplimiento de la legislación laboral y atender fiscalizaciones sin riesgos de sanción.',
        icono: '🛡️',
    },
    {
        id: 4,
        titulo: 'Políticas internas y reglamento',
        descripcion:
        'Diseñamos políticas de convivencia y reglamentos internos que fomentan un ambiente laboral ordenado y productivo.',
        icono: '📚',
    },
    {
        id: 5,
        titulo: 'Liquidación de beneficios sociales',
        descripcion:
        'Calculamos CTS, gratificaciones, vacaciones y otros beneficios, asegurando pagos correctos y oportunos a tus colaboradores.',
        icono: '💰',
    },
    {
        id: 6,
        titulo: 'Prevención de conflictos',
        descripcion:
        'Asesoramos en la resolución temprana de desacuerdos y desarrollamos estrategias para mantener relaciones laborales saludables.',
        icono: '🤝',
    },
];

export default function AsesoriaLaboral(){

    return(
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src={ImgL}
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
                                Asesoría Laboral
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

            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 font-fam">
                    ¿Cómo te ayudamos con nuestra <span className="text-[#103778]">Asesoría Laboral?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-fam">
                    Acompañamos a tu empresa en la toma de decisiones estratégicas basadas en datos financieros sólidos, proyecciones realistas y control efectivo del rendimiento económico.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {serviciosLaborales.map((item) => (
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