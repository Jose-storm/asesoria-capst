import { useEffect, useMemo, useState } from "react";
import axios from "../../api/axios";
import Swal from "sweetalert2";
import type { Docente } from "../../types";

const API_URL = "/docentes";
const FILAS_POR_PAGINA = 4;

export default function DocenteCRUD() {
  /* ─────────  ESTADOS PRINCIPALES  ───────── */
    const [docentes, setDocentes] = useState<Docente[]>([]);
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [nuevoDocente, setNuevoDocente] = useState({ nombre: "", carrera: "" });

    /* ─────────  PAGINACIÓN  ───────── */
    const [paginaActual, setPaginaActual] = useState(1);
    const totalPaginas = Math.ceil(docentes.length / FILAS_POR_PAGINA);

    const docentesPaginados = useMemo(() => {
        const inicio = (paginaActual - 1) * FILAS_POR_PAGINA;
        return docentes.slice(inicio, inicio + FILAS_POR_PAGINA);
    }, [docentes, paginaActual]);

    useEffect(() => {
        if (paginaActual > totalPaginas) setPaginaActual(1);
    }, [totalPaginas]);

    /* ─────────  PETICIONES  ───────── */
    const fetchDocentes = async () => {
        try {
        const res = await axios.get(API_URL);
        setDocentes(res.data);
        } catch (error) {
        Swal.fire("Error", "No se pudo obtener la lista de docentes.", "error");
        }
    };

    useEffect(() => {
        fetchDocentes();
    }, []);

    /* ─────────  HANDLERS  ───────── */
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoDocente({ ...nuevoDocente, [e.target.name]: e.target.value });
    };

    const crearDocente = async () => {
        try {
        await axios.post(API_URL, nuevoDocente);
        Swal.fire("¡Docente creado!", "Registrado correctamente.", "success");
        resetForm();
        fetchDocentes();
        } catch {
        Swal.fire("Error", "No se pudo crear el docente.", "error");
        }
    };

    const actualizarDocente = async () => {
        try {
        await axios.put(`${API_URL}/${editandoId}`, nuevoDocente);
        Swal.fire("¡Actualizado!", "Docente actualizado.", "success");
        resetForm();
        fetchDocentes();
        } catch {
        Swal.fire("Error", "No se pudo actualizar el docente.", "error");
        }
    };

    const eliminarDocente = async (id: number) => {
        const result = await Swal.fire({
        title: "¿Eliminar docente?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#aaa",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        });
        if (!result.isConfirmed) return;

        try {
        await axios.delete(`${API_URL}/${id}`);
        fetchDocentes();
        Swal.fire("¡Eliminado!", "Docente eliminado.", "success");
        } catch {
        Swal.fire("Error", "No se pudo eliminar el docente.", "error");
        }
    };

    /* ─────────  UTIL  ───────── */
    const resetForm = () => {
        setNuevoDocente({ nombre: "", carrera: "" });
        setEditandoId(null);
    };

    /* ─────────  RENDER  ───────── */
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md font-fam-ge">
        <h2 className="text-3xl font-bold mb-6 text-center">Gestión de Docentes</h2>

        {/* ─── FORMULARIO CREAR / EDITAR ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
            <div className="space-y-4 font-semibold text-gray-700 hidden md:block">
            <p>Nombre:</p>
            <p>Carrera:</p>
            </div>
            <div className="md:col-span-2 space-y-4">
            <input
                name="nombre"
                placeholder="Nombre del docente"
                value={nuevoDocente.nombre}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
                name="carrera"
                placeholder="Carrera"
                value={nuevoDocente.carrera}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
            </div>
        </div>

        {editandoId ? (
            <button
            onClick={actualizarDocente}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full w-full mb-4"
            >
            Guardar Cambios <i className="ml-2 fa-solid fa-floppy-disk" />
            </button>
        ) : (
            <button
            onClick={crearDocente}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full w-full mb-4"
            >
            Crear Docente <i className="ml-2 fa-solid fa-plus" />
            </button>
        )}

        {editandoId && (
            <button
            onClick={resetForm}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-full w-full mb-10"
            >
            Cancelar Edición
            </button>
        )}

        {/* ─── TABLA ─── */}
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Carrera</th>
                <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {docentesPaginados.map((d) => (
                <tr key={d.id} className="border-b">
                    <td className="px-4 py-3 font-medium">{d.nombre}</td>
                    <td className="px-4 py-3">{d.carrera}</td>
                    <td className="px-4 py-3 flex justify-center gap-2">
                    <button
                        onClick={() => {
                        setNuevoDocente({ nombre: d.nombre, carrera: d.carrera });
                        setEditandoId(d.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full"
                        title="Editar"
                    >
                        <i className="fa-solid fa-pen-to-square" />
                    </button>
                    <button
                        onClick={() => eliminarDocente(d.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full"
                        title="Eliminar"
                    >
                        <i className="fa-solid fa-trash" />
                    </button>
                    </td>
                </tr>
                ))}
                {docentesPaginados.length === 0 && (
                <tr>
                    <td colSpan={3} className="px-4 py-6 text-center text-gray-500">
                    No hay docentes para mostrar
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>

        {/* ─── PESTAÑAS DE PÁGINA ─── */}
        {totalPaginas > 1 && (
            <nav className="flex flex-wrap justify-center gap-2 mt-6">
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                <button
                key={num}
                onClick={() => setPaginaActual(num)}
                className={`px-4 py-2 rounded-t-lg border-b-2 ${
                    num === paginaActual
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-transparent hover:bg-gray-100"
                }`}
                >
                {num}
                </button>
            ))}
            </nav>
        )}
        </div>
    );
}
