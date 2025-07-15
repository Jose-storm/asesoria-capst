import ImgF from "@/assets/img/finanza.jpg"
import ImgCd from "@/assets/img/finanza_two.png"
import ImgFC from "@/assets/img/finanzas_stwo.jpg"

type Servicio = {
    id: number;
    titulo: string;
    descripcion: string;
    icono: React.ReactNode;
};

const serviciosFinancieros: Servicio[] = [
    {
        id: 1,
        titulo: 'Diagnóstico financiero integral',
        descripcion:
        'Analizamos tus ingresos, costos, activos y pasivos para obtener una visión clara de tu situación económica actual.',
        icono: '🔍',
    },
    {
        id: 2,
        titulo: 'Análisis de rentabilidad',
        descripcion:
        'Evaluamos la eficiencia de tus operaciones para determinar qué tan rentable es tu negocio y cómo mejorarla.',
        icono: '💰',
    },
    {
        id: 3,
        titulo: 'Gestión de flujo de caja',
        descripcion:
        'Supervisamos tus ingresos y egresos para asegurar que siempre cuentes con liquidez y capacidad operativa.',
        icono: '💸',
    },
    {
        id: 4,
        titulo: 'Evaluación de riesgos financieros',
        descripcion:
        'Identificamos y analizamos riesgos financieros potenciales que puedan afectar la estabilidad de tu empresa.',
        icono: '⚠️',
    },
    {
        id: 5,
        titulo: 'Planificación y proyecciones',
        descripcion:
        'Diseñamos proyecciones financieras a corto y largo plazo para ayudarte a tomar decisiones estratégicas informadas.',
        icono: '📈',
    },
    {
        id: 6,
        titulo: 'Indicadores clave de desempeño (KPIs)',
        descripcion:
        'Te ayudamos a definir y monitorear métricas financieras clave para que midas el progreso y ajustes estrategias.',
        icono: '📊',
    },
];
/* Servicios incluidos en el análisis financiero */
const features = [
    "Análisis y diagnóstico de la situación financiera actual",
    "Elaboración de presupuestos y control de gastos",
    "Gestión y proyección de flujo de caja",
    "Evaluación de rentabilidad y toma de decisiones",
    "Asesoría para inversiones y financiamiento",
    "Planificación financiera personal y empresarial",
    "Optimización de costos y estructura financiera"
];
export default function AsesoriaFinanciera(){

    return(
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src={ImgF}
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
                                Asesoría Financiera
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
                        Impulsa <span className="text-[#103778]">la toma de decisiones</span> con nuestra Asesoría Financiera
                    </h2>
                    <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                        En <strong>Asesoría Empresarial</strong>, brindamos un servicio integral de <strong>asesoría financiera</strong> enfocado en fortalecer la estabilidad y rentabilidad de tu empresa. Analizamos en profundidad tus cifras para ayudarte a tomar decisiones estratégicas y sostenibles.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Evaluamos tus estados financieros, proyectamos escenarios futuros, optimizamos el flujo de caja y definimos indicadores clave para que tengas una visión clara de tu situación actual y futura. Nuestro acompañamiento permite que tu empresa crezca con seguridad y eficiencia.
                    </p>
                    </div>

                    {/* Imagen */}
                    <div className="w-full h-auto flex justify-center items-center">
                    <img
                        src={ImgCd}
                        alt="Asesoría Financiera"
                        className="w-full h-auto"
                    />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 font-fam">
                    ¿Cómo te ayudamos con nuestro <span className="text-[#103778]">Análisis Financiero?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-fam">
                    Acompañamos a tu empresa en la toma de decisiones estratégicas basadas en datos financieros sólidos, proyecciones realistas y control efectivo del rendimiento económico.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {serviciosFinancieros.map((item) => (
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

            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Imagen */}
                    <div className="w-full h-auto flex justify-center items-center">
                    <img
                        src={ImgFC} // Asegúrate que ImgCS esté importada correctamente
                        alt="Servicios de Asesoría Financiera"
                        className="w-full h-auto shadow-lg"
                    />
                    </div>

                    {/* Lista de servicios */}
                    <div className="text-gray-800 font-fam-ge">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-fam">
                        Servicios incluidos en nuestra <span className="text-[#103778]">Asesoría Financiera</span>
                    </h2>
                    <p className="text-base text-gray-700 font-fam mb-6">
                        Ponemos a tu disposición una variedad de servicios orientados a fortalecer la salud financiera de tu empresa o proyecto:
                    </p>
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