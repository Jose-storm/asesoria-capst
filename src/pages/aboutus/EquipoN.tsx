import React from "react";

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
        imagen: "/src/assets/img/profesional_one.jpg",
        profesion: "Administración de Empresas"
    },
    {
        id: 2,
        nombreCompleto: "Julio Zapata",
        imagen: "/src/assets/img/profesional_two.jpg",
        profesion: "Contabilidad"
    },
    {
        id: 3,
        nombreCompleto: "Guillermo Perez",
        imagen: "/src/assets/img/profesional_tree.jpg",
        profesion: "Ingeniería Financiera"
    },
    {
        id: 4,
        nombreCompleto: "Pablo Terrones",
        imagen: "/src/assets/img/profesional_six.jpg",
        profesion: "Abogado"
    },
    {
        id: 5,
        nombreCompleto: "Sara Gutierrez",
        imagen: "/src/assets/img/profesional_five.jpg",
        profesion: "Administración Bancaria"
    },
]

const EquipoN: React.FC = () =>{
    return(
        <>
            <section className="max-w-7xl mx-auto pb-16 bg-[#ffff]">
                <div className="px-4 sm:px-6 font-fam-ge">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
                    Equipo de Trabajo
                </h2>
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
