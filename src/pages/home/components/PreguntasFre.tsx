import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ImgPre from "@/assets/img/ae_pre.png"

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
                    src={ImgPre}
                    alt="Preguntas Frecuentes Asesoría Empresarial"
                    className="w-full h-auto object-contain"
                />
                </div>

                {/* Acordeón */}
                <div className="w-full lg:w-1/2 text-white">
                    <h2 className="text-4xl font-bold text-center lg:text-left mb-5 font-fam">
                        ¿Preguntas Frecuentes?
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
            <section className="max-w-7xl mx-auto bg-white max-w-3xl mx-auto text-center font-fam text-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
                <p className="text-lg text-gray-600 mb-5">
                    ¿Tienes dudas? Estamos aquí para ayudarte en todo momento.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                    {/* Teléfono */}
                    <div className="flex flex-col items-center space-y-2">
                        <div className="text-3xl"><i className="fa-solid fa-phone mr-2"></i></div>
                        <span className="text-sm text-gray-500 uppercase tracking-wide">Teléfono</span>
                        <p className="text-base font-medium select-all">+51 993 568 867</p>
                    </div>

                    {/* Correo */}
                    <div className="flex flex-col items-center space-y-2">
                        <div className="text-3xl"><i className="fa-solid fa-envelope"></i></div>
                        <span className="text-sm text-gray-500 uppercase tracking-wide">Correo</span>
                        <p className="text-base font-medium select-all">asesoriaempresarial.info@gmail.com</p>
                    </div>
                </div>
            </section>

        </>
    );
};

export default PreguntasFre;
