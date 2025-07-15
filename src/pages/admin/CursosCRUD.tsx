import { useEffect, useMemo, useState } from "react";
import axios from "@/api/axios";
import { useAuth } from "@/hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/Firebase";
import Swal from "sweetalert2";
import type { Taller, Docente } from "@/types";

const API_URL = "/talleres";
const API_DOCENTES = "/docentes";

const CursosCRUD = () => {
    const [talleres, setTalleres] = useState<Taller[]>([]);
    const [docentes, setDocentes] = useState<Docente[]>([]);
    const [editandoId, setEditandoId] = useState<number | null>(null);

    const [nuevoTaller, setNuevoTaller] = useState<Partial<Taller>>({
        nombre: "",
        modalidad: "Presencial",
        docente_id: 0,
        fecha_inicio: "",
        hora_inicio: "",
        hora_fin: "",
        indice: "",
        extracto: "",
        contenido: "",
        tipo_servicio: "",
        estado: true,
        imagen: "",
    });

    const FILAS_POR_PAGINA = 4;
    const [paginaActual, setPaginaActual] = useState(1);
    const totalPaginas = Math.ceil(talleres.length / FILAS_POR_PAGINA);

    const talleresPaginados = useMemo(() => {
        const inicio = (paginaActual - 1) * FILAS_POR_PAGINA;
        return talleres.slice(inicio, inicio + FILAS_POR_PAGINA);
    }, [talleres, paginaActual]);

    useEffect(() => {
        if (paginaActual > totalPaginas) setPaginaActual(1);
    }, [totalPaginas]);

    const { token } = useAuth();

    const fetchTalleres = async () => {
        const res = await axios.get(API_URL);
        setTalleres(res.data);
    };

    const fetchDocentes = async () => {
        const res = await axios.get(API_DOCENTES);
        setDocentes(res.data);
    };

    useEffect(() => {
        fetchTalleres();
        fetchDocentes();
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setNuevoTaller((prev) => ({ ...prev, [name]: val }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const storageRef = ref(storage, `talleres/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        setNuevoTaller((prev) => ({ ...prev, imagen: url }));
    };

    const crearTaller = async () => {
        try {
        await axios.post(API_URL, nuevoTaller, { headers: { Authorization: `Bearer ${token}` } });
        Swal.fire("¡Curso creado!", "El taller fue registrado exitosamente.", "success");
        fetchTalleres();
        resetForm();
        } catch {
        Swal.fire("Error", "No se pudo crear el curso.", "error");
        }
    };

    const actualizarTaller = async () => {
        try {
        await axios.put(`${API_URL}/${editandoId}`, nuevoTaller, {
            headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("¡Actualizado!", "El curso se actualizó correctamente.", "success");
        fetchTalleres();
        resetForm();
        } catch {
        Swal.fire("Error", "No se pudo actualizar el curso.", "error");
        }
    };

    const eliminarTaller = async (id: number) => {
        const result = await Swal.fire({
        title: "¿Eliminar curso?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        });
        if (!result.isConfirmed) return;

        await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        });
        fetchTalleres();
        Swal.fire("Eliminado", "El curso ha sido eliminado.", "success");
    };

    const resetForm = () => {
        setEditandoId(null);
        setNuevoTaller({
        nombre: "",
        modalidad: "Presencial",
        docente_id: 0,
        fecha_inicio: "",
        hora_inicio: "",
        hora_fin: "",
        indice: "",
        extracto: "",
        contenido: "",
        tipo_servicio: "",
        estado: true,
        imagen: "",
        });
    };

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md font-fam-ge">
        <h2 className="text-3xl font-bold mb-6 text-center">Gestión de Cursos / Talleres</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
            <div className="space-y-3 font-semibold text-gray-700 hidden md:block">
            <p>Nombre:</p>
            <p>Modalidad:</p>
            <p>Docente o Tutor:</p>
            <p>Tipo de Servicio:</p>
            <p>Fecha / Hora:</p>
            <p>Índice:</p>
            <p>Extracto:</p>
            <p>Contenido:</p>
            <p>Imagen:</p>
            </div>

            <div className="md:col-span-2 space-y-4">
            <input name="nombre" placeholder="Nombre del taller" value={nuevoTaller.nombre} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2" />
            <select name="modalidad" value={nuevoTaller.modalidad} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2">
                <option value="Presencial">Presencial</option>
                <option value="Virtual">Virtual</option>
            </select>
            <select name="docente_id" value={nuevoTaller.docente_id} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2">
                <option value="">Seleccione un docente o tutor</option>
                {docentes.map((d) => (
                <option key={d.id} value={d.id}>
                    {d.nombre} - {d.carrera}
                </option>
                ))}
            </select>
            <input name="tipo_servicio" placeholder="Tipo de servicio" value={nuevoTaller.tipo_servicio} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2" />
            <div className="grid grid-cols-3 gap-2">
                <input type="date" name="fecha_inicio" value={nuevoTaller.fecha_inicio} onChange={handleInput} className="border border-gray-300 rounded px-3 py-2" />
                <input type="time" name="hora_inicio" value={nuevoTaller.hora_inicio} onChange={handleInput} className="border border-gray-300 rounded px-3 py-2" />
                <input type="time" name="hora_fin" value={nuevoTaller.hora_fin} onChange={handleInput} className="border border-gray-300 rounded px-3 py-2" />
            </div>
            <input name="indice" placeholder="Índice" value={nuevoTaller.indice} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2" />
            <input name="extracto" placeholder="Resumen" value={nuevoTaller.extracto} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2" />
            <textarea name="contenido" placeholder="Contenido" value={nuevoTaller.contenido} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px]" />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {nuevoTaller.imagen && <img src={nuevoTaller.imagen} className="w-full max-h-48 object-contain rounded border" />}
            </div>
        </div>

        {editandoId ? (
            <button onClick={actualizarTaller} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full w-full mb-4">
            Guardar Cambios <i className="ml-2 fa-solid fa-floppy-disk" />
            </button>
        ) : (
            <button onClick={crearTaller} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full w-full mb-4">
            Crear Curso <i className="ml-2 fa-solid fa-plus" />
            </button>
        )}

        {editandoId && (
            <button onClick={resetForm} className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-full w-full mb-10">
            Cancelar Edición
            </button>
        )}

        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Modalidad</th>
                <th className="px-4 py-3">Tutor</th>
                <th className="px-4 py-3">Tipo</th>
                <th className="px-4 py-3">Inicio</th>
                <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {talleresPaginados.map((taller) => (
                <tr key={taller.id} className="border-b">
                    <td className="px-4 py-3 font-medium">{taller.nombre}</td>
                    <td className="px-4 py-3">{taller.modalidad}</td>
                    <td className="px-4 py-3">{taller.docente_nombre}</td>
                    <td className="px-4 py-3">{taller.tipo_servicio}</td>
                    <td className="px-4 py-3">
                    {new Date(taller.fecha_inicio).toLocaleDateString("es-PE", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    })}
                    </td>
                    <td className="px-4 py-3 flex justify-center gap-2">
                    <button
                        onClick={() => {
                        setNuevoTaller({ ...taller });
                        setEditandoId(taller.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full"
                        title="Editar curso"
                    >
                        <i className="fa-solid fa-pen-to-square" />
                    </button>
                    <button onClick={() => eliminarTaller(taller.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full" title="Eliminar curso">
                        <i className="fa-solid fa-trash" />
                    </button>
                    </td>
                </tr>
                ))}
                {talleresPaginados.length === 0 && (
                <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                    No hay cursos para mostrar
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>

        {totalPaginas > 1 && (
            <nav className="flex flex-wrap justify-center gap-2 mt-6">
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                <button
                key={num}
                onClick={() => setPaginaActual(num)}
                className={`px-4 py-2 rounded-t-lg border-b-2 ${
                    num === paginaActual ? "border-blue-600 bg-blue-50 text-blue-700" : "border-transparent hover:bg-gray-100"
                }`}
                >
                {num}
                </button>
            ))}
            </nav>
        )}
        </div>
    );
};

export default CursosCRUD;
