// import { useParams } from "react-router-dom";
// import { cursos } from "@/types/curso";

// const CursoDetail = () => {
//     const { id } = useParams<{ id: string }>();
//     const curso = cursos.find((c) => c.id === id);

//     if (!curso) return <p>Curso no encontrado</p>;

//     return (
//         <>
//             <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
//                 <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
//                     <img
//                     src={curso.imagen}
//                     alt="Publicidad"
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                     />
//                     {/* Overlay oscuro para contraste */}
//                     <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

//                     {/* Contenido centrado */}
//                     <div className="relative z-10 flex items-center justify-center h-full">
//                     <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
//                         <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
//                         {curso.nombre}
//                         </h1>
//                     </div>
//                     </div>
//                 </div>
//             </section>
//             <div className="p-8 max-w-7xl mx-auto">
//                 <h1 className="text-3xl font-bold mb-4">{curso.nombre}</h1>
//                 <p className="text-gray-700 mb-4">{curso.descripcion}</p>
//                 <div className="bg-gray-100 p-4 rounded">{curso.contenido}</div>
//             </div>
//         </>
//     );
// };

// export default CursoDetail;
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import type { Taller } from "../../types";

const CursoDetail = () => {
    const { id } = useParams();
    const [curso, setCurso] = useState<Taller | null>(null);

    useEffect(() => {
        const fetchCurso = async () => {
        const res = await axios.get(`/talleres/${id}`);
        setCurso(res.data);
        };
        fetchCurso();
    }, [id]);

    if (!curso) return <p className="text-center py-10">Cargando curso...</p>;

    return (
        <section className="max-w-5xl mx-auto py-10 px-6 font-fam-ge">
        <Link to="/cursos" className="text-blue-600 hover:underline mb-6 inline-block">
            ← Volver a cursos
        </Link>

        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{curso.nombre}</h1>
            {curso.imagen && (
            <img
                src={curso.imagen}
                alt={curso.nombre}
                className="w-full max-h-[400px] object-cover rounded-lg shadow"
            />
            )}

            <p className="text-gray-600 text-lg italic">{curso.extracto}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <p><strong>Modalidad:</strong> {curso.modalidad}</p>
            <p><strong>Tipo de servicio:</strong> {curso.tipo_servicio}</p>
            <p><strong>Fecha de inicio:</strong> {curso.fecha_inicio}</p>
            <p><strong>Horario:</strong> {curso.hora_inicio} - {curso.hora_fin}</p>
            <p><strong>Docente:</strong> {curso.docente_nombre}</p>
            {curso.carrera && <p><strong>Carrera:</strong> {curso.carrera}</p>}
            <p><strong>Índice:</strong> {curso.indice}</p>
            <p><strong>Estado:</strong> {curso.estado ? "Disponible" : "No disponible"}</p>
            </div>

            <div className="prose max-w-none prose-blue">
            <h2>Contenido del Curso</h2>
            <p>{curso.contenido}</p>
            </div>
        </div>
        </section>
    );
};

export default CursoDetail;
