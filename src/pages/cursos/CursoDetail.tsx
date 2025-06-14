import { useParams } from "react-router-dom";
import { cursos } from "@/types/curso";

const CursoDetail = () => {
    const { id } = useParams<{ id: string }>();
    const curso = cursos.find((c) => c.id === id);

    if (!curso) return <p>Curso no encontrado</p>;

    return (
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src={curso.imagen}
                    alt="Publicidad"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Overlay oscuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

                    {/* Contenido centrado */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
                        {curso.nombre}
                        </h1>
                    </div>
                    </div>
                </div>
            </section>
            <div className="p-8 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{curso.nombre}</h1>
                <p className="text-gray-700 mb-4">{curso.descripcion}</p>
                <div className="bg-gray-100 p-4 rounded">{curso.contenido}</div>
            </div>
        </>
    );
};

export default CursoDetail;
