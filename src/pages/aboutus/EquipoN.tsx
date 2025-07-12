import React from "react";
import ImgNone from "@/assets/img/profesional_one.jpg"
import ImgNtwo from "@/assets/img/profesional_two.jpg"
import ImgNtree from "@/assets/img/profesional_tree.jpg"
import ImgNfour from "@/assets/img/profesional_six.jpg"
import ImgNfive from "@/assets/img/profesional_five.jpg"
/* Interface-objeto */
type Equipo ={
    id: number,
    nombreCompleto: string,
    imagen: string,
    profesion: string
}

const equipos_carrera: Equipo[] =[
    {
        id: 1,
        nombreCompleto: "Martín Fernandez",
        imagen: ImgNone,
        profesion: "Admnistración de Empresas"
    },
    {
        id: 2,
        nombreCompleto: "Julio Zapata",
        imagen: ImgNtwo,
        profesion: "Contabilidad"
    },
    {
        id: 3,
        nombreCompleto: "Guillermo Perez",
        imagen: ImgNtree,
        profesion: "Ingeniería Financiera"
    },
    {
        id: 4,
        nombreCompleto: "Pablo Terrones",
        imagen: ImgNfour,
        profesion: "Abogado"
    },
    {
        id: 5,
        nombreCompleto: "Sara Gutierrez",
        imagen: ImgNfive,
        profesion: "Administración Bancaria"
    },
]

const EquipoN: React.FC = () =>{
    return(
        <>
            <section className="max-w-7xl mx-auto pb-16 bg-[#ffff]">
                <div className="px-4 sm:px-6 font-fam-ge">
                    <h2 className="text-center text-4xl font-bold font-fam text-gray-800 mb-4 capitalize">
                        Equipo de <span className="text-[#103778]">Profesionales</span>
                    </h2>
                    <p className="text-center text-base text-gray-600 mb-8 max-w-2xl font-fam mx-auto">Nuestros asesores están especializados en diversas áreas: </p>
                    <div className="overflow-hidden relative">
                        <div className="flex animate-scroll-x-loop w-max">
                        {[...equipos_carrera, ...equipos_carrera].map(({ id, nombreCompleto, imagen, profesion }, index) => (
                            <div
                                key={`${id}-${index}`}
                                className="relative min-w-[250px] max-w-[280px] h-72 mx-3 overflow-hidden flex-shrink-0 shadow-lg group"
                                >
                                <img
                                    src={imagen}
                                    alt={nombreCompleto}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white px-4 py-3">
                                    <h3 className="text-lg font-semibold">{nombreCompleto}</h3>
                                    <p className="text-sm text-gray-300">{profesion}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default EquipoN
