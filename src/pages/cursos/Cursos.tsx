import { useEffect, useState } from "react";
import axios from "@/api/axios";
import CursoCard from "@/components/curso-card/CursoCard";
import type { Taller } from "@/types";

const CursosPublicos = () => {
    const [cursos, setCursos] = useState<Taller[]>([]);
    const [filtroModalidad, setFiltroModalidad] = useState("Todos");
    const [filtroTipo, setFiltroTipo] = useState("Todos");

    useEffect(() => {
        const fetchCursos = async () => {
        const res = await axios.get("/talleres");
        setCursos(res.data);
        };
        fetchCursos();
    }, []);

    const cursosFiltrados = cursos.filter((curso) => {
        const coincideModalidad = filtroModalidad === "Todos" || curso.modalidad === filtroModalidad;
        const coincideTipo = filtroTipo === "Todos" || curso.tipo_servicio === filtroTipo;
        return coincideModalidad && coincideTipo;
    });

    const tiposUnicos = Array.from(new Set(cursos.map((c) => c.tipo_servicio))).filter(Boolean);

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto font-fam-ge">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#0b2142]">Nuestros Talleres y Cursos</h1>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <select
            value={filtroModalidad}
            onChange={(e) => setFiltroModalidad(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 text-gray-700"
            >
            <option value="Todos">Todas las modalidades</option>
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
            </select>

            <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 text-gray-700"
            >
            <option value="Todos">Todos los tipos de asesoría</option>
            {tiposUnicos.map((tipo) => (
                <option key={tipo} value={tipo}>
                {tipo}
                </option>
            ))}
            </select>
        </div>

        {/* Lista de cursos */}
        {cursosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosFiltrados.map((curso) => (
                <CursoCard key={curso.id} curso={curso} />
            ))}
            </div>
        ) : (
            <p className="text-center text-gray-500">No hay cursos disponibles con esos filtros.</p>
        )}
        </section>
    );
};

export default CursosPublicos;


