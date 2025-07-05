import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useAuth } from "../../hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/Firebase";
import Swal from "sweetalert2";
import type { Taller, Docente } from "../../types";

const API_URL = "/talleres";
const API_DOCENTES = "/docentes";

const CursosCRUD = () => {
    const [talleres, setTalleres] = useState<Taller[]>([]);
    const [docentes, setDocentes] = useState<Docente[]>([]);
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

    const { token } = useAuth();
    const navigate = useNavigate();

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
        await axios.post("/talleres", nuevoTaller, {
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
        } catch (err) {
        Swal.fire("Error", "No se pudo crear el curso.", "error");
        }
    };

    const eliminarTaller = async (id: number) => {
        const result = await Swal.fire({
        title: "¿Eliminar curso?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        });

        if (result.isConfirmed) {
        await axios.delete(`${API_URL}/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        fetchTalleres();
        Swal.fire("Eliminado", "El curso ha sido eliminado.", "success");
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg font-fam-ge">
    <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Gestión de <span className="text-blue-600">Cursos/Talleres</span>
    </h2>

    {/* Formulario */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <input
        name="nombre"
        placeholder="Nombre del taller"
        value={nuevoTaller.nombre}
        onChange={handleInput}
        className="input"
        />

        <select
        name="modalidad"
        value={nuevoTaller.modalidad}
        onChange={handleInput}
        className="input"
        >
        <option value="Presencial">Presencial</option>
        <option value="Virtual">Virtual</option>
        </select>

        <select
        name="docente_id"
        value={nuevoTaller.docente_id}
        onChange={handleInput}
        className="input"
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
        className="input"
        />
        <input
        type="time"
        name="hora_inicio"
        value={nuevoTaller.hora_inicio}
        onChange={handleInput}
        className="input"
        />
        <input
        type="time"
        name="hora_fin"
        value={nuevoTaller.hora_fin}
        onChange={handleInput}
        className="input"
        />

        <input
        name="indice"
        placeholder="Índice del curso"
        value={nuevoTaller.indice}
        onChange={handleInput}
        className="input"
        />

        <input
        name="tipo_servicio"
        placeholder="Tipo de asesoría empresarial"
        value={nuevoTaller.tipo_servicio}
        onChange={handleInput}
        className="input"
        />

        <input
        name="extracto"
        placeholder="Resumen / extracto"
        value={nuevoTaller.extracto}
        onChange={handleInput}
        className="input col-span-full"
        />

        <textarea
        name="contenido"
        placeholder="Contenido del curso"
        value={nuevoTaller.contenido}
        onChange={handleInput}
        className="input resize-none col-span-full min-h-[100px]"
        />

        <div className="col-span-full">
        <label className="block mb-1 text-sm font-semibold text-gray-700">
            Imagen del curso
        </label>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="input"
        />
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

    {/* Lista de cursos */}
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-700">Cursos Registrados</h3>
        <ul className="space-y-4">
        {talleres.map((curso) => (
            <li
            key={curso.id}
            className="p-5 bg-gray-50 rounded-lg border border-gray-200 flex justify-between items-start hover:shadow transition duration-300"
            >
            <div>
                <h4 className="text-lg font-bold text-gray-800">{curso.nombre}</h4>
                <p className="text-sm text-gray-600 mb-1">{curso.extracto}</p>
                <p className="text-xs text-gray-500">
                Docente: {curso.docente_nombre}
                </p>
            </div>
            <button
                onClick={() => eliminarTaller(curso.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full transition"
                title="Eliminar curso"
            >
                <i className="fa fa-trash text-lg"></i>
            </button>
            </li>
        ))}
        </ul>
    </div>
    </div>

    );
};

export default CursosCRUD;
