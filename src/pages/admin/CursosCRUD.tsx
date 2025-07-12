import { useEffect, useMemo, useState } from "react";
import axios from "../../api/axios";
import { useAuth } from "../../hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/Firebase";
import Swal from "sweetalert2";
import type { Taller, Docente } from "../../types";

const API_URL      = "/talleres";
const API_DOCENTES = "/docentes";

const CursosCRUD = () => {
  /* ────────────────  ESTADOS PRINCIPALES  ──────────────── */
    const [talleres, setTalleres]   = useState<Taller[]>([]);
    const [docentes, setDocentes]   = useState<Docente[]>([]);
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

    /* ────────────────  PAGINACIÓN  ──────────────── */
    const FILAS_POR_PAGINA = 10;
    const [paginaActual, setPaginaActual] = useState(1);
    const totalPaginas = Math.ceil(talleres.length / FILAS_POR_PAGINA);

    const talleresPaginados = useMemo(() => {
        const inicio = (paginaActual - 1) * FILAS_POR_PAGINA;
        return talleres.slice(inicio, inicio + FILAS_POR_PAGINA);
    }, [talleres, paginaActual]);

    /* Si la página actual queda vacía tras un CRUD, vuelve a la 1 */
    useEffect(() => {
        if (paginaActual > totalPaginas) setPaginaActual(1);
    }, [totalPaginas]);

    const { token } = useAuth();

    /* ────────────────  PETICIONES  ──────────────── */
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

    /* ────────────────  HANDLERS  ──────────────── */
    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
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
        await axios.post(API_URL, nuevoTaller, {
            headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("¡Curso creado!", "El taller fue registrado exitosamente.", "success");
        fetchTalleres();
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
        } catch {
        Swal.fire("Error", "No se pudo crear el curso.", "error");
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

    /* ────────────────  RENDER  ──────────────── */
    return (
        <div className="p-8 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg font-fam-ge">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Gestión de <span className="text-blue-600">Cursos/Talleres</span>
        </h2>

        {/* ────────────────  FORMULARIO  ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <input
            name="nombre"
            placeholder="Nombre del taller"
            value={nuevoTaller.nombre}
            onChange={handleInput}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
            name="modalidad"
            value={nuevoTaller.modalidad}
            onChange={handleInput}
            className="border border-gray-300 rounded px-4 py-2"
            >
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
            </select>

            <select
            name="docente_id"
            value={nuevoTaller.docente_id}
            onChange={handleInput}
            className="border border-gray-300 rounded px-4 py-2"
            >
            <option value="">Seleccione un docente</option>
            {docentes.map((d) => (
                <option key={d.id} value={d.id}>
                {d.nombre} - {d.carrera}
                </option>
            ))}
            </select>

            <input
            type="date"
            name="fecha_inicio"
            value={nuevoTaller.fecha_inicio}
            onChange={handleInput}
            className="border border-gray-300 rounded px-4 py-2"
            />
            <input
            type="time"
            name="hora_inicio"
            value={nuevoTaller.hora_inicio}
            onChange={handleInput}
            className="border border-gray-300 rounded px-4 py-2"
            />
            <input
            type="time"
            name="hora_fin"
            value={nuevoTaller.hora_fin}
            onChange={handleInput}
            className="border border-gray-300 rounded px-4 py-2"
            />

            <input
            name="indice"
            placeholder="Índice del curso"
            value={nuevoTaller.indice}
            onChange={handleInput}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
            name="tipo_servicio"
            placeholder="Tipo de asesoría empresarial"
            value={nuevoTaller.tipo_servicio}
            onChange={handleInput}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
            name="extracto"
            placeholder="Resumen / extracto"
            value={nuevoTaller.extracto}
            onChange={handleInput}
            className="col-span-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
            name="contenido"
            placeholder="Contenido del curso"
            value={nuevoTaller.contenido}
            onChange={handleInput}
            className="resize-none col-span-full min-h-[100px] border border-gray-300 rounded px-4 py-2"
            />

            <div className="col-span-full">
            <label className="block mb-1 text-sm font-semibold text-gray-700">
                Imagen del curso
            </label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {nuevoTaller.imagen && (
                <img
                src={nuevoTaller.imagen}
                alt="Imagen subida"
                className="mt-4 max-h-48 rounded-lg shadow"
                />
            )}
            </div>
        </div>

        <button
            onClick={crearTaller}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 mb-12"
        >
            Crear Curso <i className="ml-2 fa-solid fa-plus"></i>
        </button>

        {/* ────────────────  TABLA CON PAGINACIÓN  ──────────────── */}
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Modalidad</th>
                <th className="px-4 py-3">Docente</th>
                <th className="px-4 py-3">Tipo</th>
                <th className="px-4 py-3">Inicio</th>
                <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {talleresPaginados.map((curso) => (
                <tr key={curso.id} className="border-b">
                    <td className="px-4 py-3 font-medium">{curso.nombre}</td>
                    <td className="px-4 py-3">{curso.modalidad}</td>
                    <td className="px-4 py-3">{curso.docente_nombre}</td>
                    <td className="px-4 py-3">{curso.tipo_servicio}</td>
                    <td className="px-4 py-3">{curso.fecha_inicio}</td>
                    <td className="px-4 py-3 flex justify-center">
                    <button
                        onClick={() => eliminarTaller(curso.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full"
                        title="Eliminar curso"
                    >
                        <i className="fa-solid fa-trash" />
                    </button>
                    </td>
                </tr>
                ))}
                {talleresPaginados.length === 0 && (
                <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                    No hay cursos para mostrar
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>

        {/* ────────────────  PESTAÑAS DE PÁGINA  ──────────────── */}
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
};

export default CursosCRUD;
