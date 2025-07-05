import { useEffect, useState } from "react";
import axios from "../../api/axios"; // ✅ usa la instancia configurada
import type { Docente } from "../../types";
import Swal from 'sweetalert2';
export default function DocenteCRUD() {
    const [docentes, setDocentes] = useState<Docente[]>([]); // ✅ Correcto
    const [nuevoDocente, setNuevoDocente] = useState({ nombre: "", carrera: "" });

    const fetchDocentes = async () => {
    try {
        const res = await axios.get("/docentes");
        console.log("Respuesta completa:", res);         // ← log completo
        console.log("Datos devueltos:", res.data);       // ← ¿es un array?
        setDocentes(res.data);
    } catch (error) {
        console.error("Error al obtener docentes", error);
    }
};


    const crearDocente = async () => {
        try {
        await axios.post("/docentes", nuevoDocente);
        Swal.fire("!Docente registrado!", "El Docente fue registrado exitosamente.", "success");
        setNuevoDocente({ nombre: "", carrera: "" });
        fetchDocentes();
        } catch (error) {
        console.error("Error al crear docente", error);
        }
    };

    const eliminarDocente = async (id: number) => {
    const result = await Swal.fire({
        title: '¿Eliminar Docente?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#aaa',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
    });
    if (result.isConfirmed) {
        // Eliminar solo si el usuario confirmó
        await axios.delete(`/docentes/${id}`); 
        fetchDocentes();

        Swal.fire({
        title: '¡Eliminado!',
        text: 'El docente ha sido eliminado correctamente.',
        icon: 'success',
        confirmButtonColor: '#103778',
        });
    }
};


    useEffect(() => {
        fetchDocentes();
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoDocente({ ...nuevoDocente, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-fam-ge">
                Gestión de Docentes
            </h2>

            {/* Formulario */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 font-fam-ge">
                {/* Campo: Nombres y Apellidos */}
                <div className="flex flex-col">
                    <label htmlFor="nombre" className="mb-1 font-semibold text-gray-700">Nombres y Apellidos</label>
                    <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={nuevoDocente.nombre}
                    onChange={handleInput}
                    placeholder="Nombre del docente"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Campo: Carrera */}
                <div className="flex flex-col">
                    <label htmlFor="carrera" className="mb-1 font-semibold text-gray-700">Carrera</label>
                    <input
                    type="text"
                    id="carrera"
                    name="carrera"
                    value={nuevoDocente.carrera}
                    onChange={handleInput}
                    placeholder="Carrera"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <button
                onClick={crearDocente}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mb-8 transition font-fam-ge"
            >
                Crear Docente <i className="ml-2 fa-solid fa-plus"></i>
            </button>

            {/* Tabla de docentes */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-200 rounded shadow-sm">
                <thead className="bg-gray-100 text-gray-700 font-fam-ge">
                    <tr>
                    <th className="px-4 py-2 text-left">Nombre</th>
                    <th className="px-4 py-2 text-left">Carrera</th>
                    <th className="px-4 py-2 text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody className="font-fam-ge">
                    {docentes.map((docente) => (
                    <tr key={docente.id} className="border-t hover:bg-gray-50">
                        <td className="px-4 py-2">{docente.nombre}</td>
                        <td className="px-4 py-2">{docente.carrera}</td>
                        <td className="px-4 py-2 text-center">
                        <button
                            onClick={() => eliminarDocente(docente.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full transition"
                            title="Eliminar"
                        >
                            <i className="fa fa-trash" />
                        </button>
                        </td>
                    </tr>
                    ))}
                    {docentes.length === 0 && (
                    <tr>
                        <td colSpan={3} className="px-4 py-4 text-center text-gray-500">
                        No hay docentes registrados.
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
        </div>
    );
}
