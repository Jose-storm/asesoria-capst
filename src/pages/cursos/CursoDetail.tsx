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
            <p><strong>Fecha de inicio:</strong> {new Date(curso.fecha_inicio).toLocaleDateString("es-PE", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    })}</p>
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
