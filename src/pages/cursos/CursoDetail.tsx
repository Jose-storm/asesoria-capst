import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "@/api/axios";
import { motion } from "framer-motion";
import { CalendarDays, Clock, GraduationCap, LayoutGrid, UsersRound } from "lucide-react";
import type { Taller } from "@/types";

const CursoDetail = () => {
    const { id } = useParams();
    const [curso, setCurso] = useState<Taller | null>(null);

    useEffect(() => {
        (async () => {
        const { data } = await axios.get(`/talleres/${id}`);
        setCurso(data);
        window.scrollTo({ top: 0 });
        })();
    }, [id]);

    if (!curso)
        return (
        <p className="py-10 text-center animate-pulse font-medium text-gray-600">
            Cargando curso…
        </p>
        );

    const Badge = ({ children, color }: { children: string; color: string }) => (
        <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${color}`}
        >
        {children}
        </span>
    );

    const mensaje_w = encodeURIComponent(`Hola, me gustaría obtener más información sobre el curso: "${curso.nombre}"`)
    const numero_contacto = "51993568867";

    return (
        <section className="font-fam-ge">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-72 md:h-96 w-full"
        >
            <img
            src={curso.imagen}
            alt={curso.nombre}
            className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white space-y-2">
                <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                    {curso.nombre}
                </h1>
                <div className="flex flex-wrap gap-2">
                    <Badge color="bg-emerald-600">
                    {curso.estado ? "Disponible" : "No disponible"}
                    </Badge>
                    <Badge color="bg-indigo-600">{curso.modalidad}</Badge>
                    <Badge color="bg-rose-600">{curso.tipo_servicio}</Badge>
                </div>
            </div>
        </motion.div>

        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="max-w-5xl mx-auto px-6 md:px-0 py-10 space-y-10"
        >
            <Link
            to="/cursos"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
                ← Volver a cursos
            </Link>

            {/* Extracto / resumen */}
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4">
            <p className="text-gray-700 italic">{curso.extracto}</p>
            </div>

            {/* Datos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-sm">
            <p className="flex items-center gap-2">
                <CalendarDays size={18} />
                <strong>Inicio:</strong>{" "}
                {new Date(curso.fecha_inicio).toLocaleDateString("es-PE")}
            </p>
            <p className="flex items-center gap-2">
                <Clock size={18} />
                <strong>Horario:</strong> {curso.hora_inicio}‑{curso.hora_fin}
            </p>
            <p className="flex items-center gap-2">
                <UsersRound size={18} />
                <strong>Tutor:</strong> {curso.docente_nombre}
            </p>
            {curso.carrera && (
                <p className="flex items-center gap-2">
                <GraduationCap size={18} />
                <strong>Carrera:</strong> {curso.carrera}
                </p>
            )}
            <p className="flex items-center gap-2">
                <LayoutGrid size={18} />
                <strong>Índice:</strong> {curso.indice}
            </p>
            </div>

            {/* Contenido */}
            <article className="prose max-w-none prose-sky">
                <h2>Contenido del curso</h2>
                <p>{curso.contenido}</p>
            </article>

            {/* CTA */}
            <div className="text-center pt-6 space-y-4">
            {curso.estado ? (
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                    href={`https://wa.me/${numero_contacto}?text=${mensaje_w}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition"
                >
                    <i className="fa-brands fa-whatsapp text-lg" />
                    Unirme al grupo
                </a>

                {/* Enlace a YouTube */}
                <a
                    href="https://youtube.com/@asesoriaempresarialperu?si=frIb5vys2VU6EQp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition"
                >
                    <i className="fa-brands fa-youtube text-lg" />
                        Ver en YouTube
                </a>
                </div>
            ) : (
                <p className="text-gray-500 italic">Este curso estará disponible próximamente.</p>
            )}
            </div>

        </motion.div>
        </section>
    );
};

export default CursoDetail;
