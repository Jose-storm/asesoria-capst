import React from "react";
import ImgNosotros from "@/assets/img/us_two.jpg"
import ImgOne from "@/assets/img/objetivo.png"
import ImgTwo from "@/assets/img/tecno.png"
import ImgTree from "@/assets/img/cliente.png"
import ImgFour from "@/assets/img/rendi.png"
import { Link } from "react-router-dom";


type Referencias = {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string
}

const referencia_us: Referencias[]=[
    {
    id: 1,
    titulo: "Asesoría estratégica",
    descripcion:
        "Brindamos dirección y claridad para tus objetivos empresariales con planes adaptados a tus necesidades.",
    imagen: ImgOne,
    },
    {
        id: 2,
        titulo: "Transformación digital",
        descripcion:
        "Acompañamos a tu empresa en la modernización de procesos usando herramientas tecnológicas actuales.",
        imagen: ImgTwo,
    },
    {
        id: 3,
        titulo: "Atención personalizada",
        descripcion:
        "Cada cliente es único. Nos enfocamos en escuchar, comprender y actuar con soluciones adecuadas.",
        imagen: ImgTree,
    },
    {
        id: 4,
        titulo: "Resultados medibles",
        descripcion:
        "Creamos estrategias orientadas a objetivos claros, evaluables y con impacto tangible en tu negocio.",
        imagen: ImgFour,
    },
]


const NosotrosGrid: React.FC = () => {
return (
    <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="h-96 md:h-full">
                <img
                    src={ImgNosotros}
                    alt="Equipo de la empresa"
                    className="w-full h-full object-cover shadow-lg"
                />
            </div>

            {/* Contenido de texto */}
            <div className="font-fam-ge" data-aos="fade-left">
                <h2 className="text-4xl font-bold text-blue-700 mb-4 font-fam-two">¿Quiénes Somos?</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Somos una empresa dedicada a brindar soluciones integrales para el crecimiento empresarial. Nuestra misión es impulsar a emprendedores y organizaciones a alcanzar su máximo potencial mediante asesoría personalizada y estrategias efectivas.
                </p>

                <p className="text-gray-600 mb-4">
                    Con años de experiencia y un equipo apasionado, nos destacamos por ofrecer:
                </p>
                {/* Ruta de Props Padre */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                {referencia_us.map(({ id, titulo, descripcion, imagen }) => (
                    <div
                    key={id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 flex items-start gap-4"
                    >
                    {/* Imagen en vez de icono */}
                    <div className="flex-shrink-0">
                        <img
                        src={imagen}
                        alt={titulo}
                        className="w-14 h-20 object-contain"
                        />
                    </div>

                    {/* Texto */}
                    <div>
                        <h3 className="text-xl font-semibold mb-1 font-fam-ge">{titulo}</h3>
                        <p className="text-gray-600">{descripcion}</p>
                    </div>
                    </div>
                ))}
                </div>

                <div className="mt-6">
                    <Link
                    to="/nosotros"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                    >
                    Conoce más sobre nosotros<span className="ml-2">→</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
);
};

export default NosotrosGrid;
