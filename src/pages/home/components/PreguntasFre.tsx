import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Pregunta = {
    id: string;
    pregunta: string;
    respuesta: string;
};

const faqs: Pregunta[] = [
    {
        id: "faq1",
        pregunta: "¿Qué servicios de asesoría empresarial ofrecen?",
        respuesta:
        "Brindamos asesoría integral en áreas clave como gestión financiera, contabilidad, tributación, asuntos laborales y estrategias corporativas adaptadas a tu negocio.",
    },
    {
        id: "faq2",
        pregunta: "¿Cómo puedo solicitar una consulta personalizada?",
        respuesta:
        "Simplemente completa el formulario en nuestra página de contacto o llámanos directamente. Te responderemos en menos de 24 horas para coordinar una reunión.",
    },
    {
        id: "faq3",
        pregunta: "¿Atienden a emprendedores o solo a empresas grandes?",
        respuesta:
        "Sí, trabajamos con empresas de todos los tamaños: desde emprendimientos en etapa inicial hasta grandes corporaciones consolidadas.",
    },
    {
        id: "faq4",
        pregunta: "¿Qué beneficios obtengo al contratar su asesoría?",
        respuesta:
        "Nuestros clientes obtienen soluciones personalizadas, cumplimiento normativo, optimización fiscal y mejoras estratégicas que impulsan el crecimiento sostenible.",
    },
];

const PreguntasFre: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <>
            <section className="w-full px-6 py-16 bg-[#103778] mb-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-12 lg:items-start">
                {/* Imagen */}
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <img
                    src="/src/assets/img/ae_pre.png"
                    alt="Preguntas Frecuentes Asesoría Empresarial"
                    className="w-full h-auto object-contain"
                />
                </div>

                {/* Acordeón */}
                <div className="w-full lg:w-1/2 text-white">
                <h2 className="text-4xl font-bold text-center lg:text-left mb-5 font-fam-ge">
                    <i className="fa-solid fa-question rotate-180 mr-2"></i>
                    Preguntas Frecuentes
                    <i className="fa-solid fa-question rotate-0 ml-2"></i>
                </h2>
                <p className="text-gray-200 text-lg mb-8 font-fam-ge">
                    Conoce más sobre cómo podemos ayudarte a fortalecer y optimizar tu empresa.
                </p>

                <div className="space-y-4 font-fam-ge">
                    {faqs.map(({ id, pregunta, respuesta }) => (
                    <div
                        key={id}
                        className="rounded-md shadow-md overflow-hidden transition-all"
                    >
                        <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-white bg-[#791137] hover:bg-[#5d0e2c] transition"
                        >
                        <span className="text-left">{pregunta}</span>
                        <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                            openId === id ? "rotate-180" : ""
                            }`}
                        />
                        </button>
                        <div
                        className={`px-6 text-gray-800 bg-white transition-all duration-300 overflow-hidden ${
                            openId === id ? "max-h-48 py-4" : "max-h-0"
                        }`}
                        >
                        {respuesta}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </section>

            {/* Sección de contacto */}
            <section className="max-w-7xl mx-auto px-10 py-12 bg-[#791137] mb-5 mt-10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-white font-fam-ge shadow-lg">
                <div className="text-center lg:text-left space-y-3">
                    <h2 className="text-3xl lg:text-4xl font-bold">¿Tienes más preguntas?</h2>
                    <p className="text-xl lg:text-2xl">
                        Te responderemos en la menor brevedad posible por nuestros canales de red. ¡Consulta Gratis!
                    </p>
                </div>

                <a
                    href="/Contacto"
                    className="bg-white text-[#791137] font-semibold text-lg rounded-full px-10 py-4 transition hover:bg-gray-100 hover:scale-105 shadow-md"
                >
                    Contáctanos
                </a>
            </section>
        </>
    );
};

export default PreguntasFre;
