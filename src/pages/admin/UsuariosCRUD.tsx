/* src/pages/admin/Usuarios.tsx */
import { useEffect, useMemo, useState } from "react";
import axios from "@/api/axios";
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/useAuth";
import FormularioNuevoUsuario from "./components/users/User-admin";

const FILAS_POR_PAGINA = 5;

export type Usuario = { 
    id: number;
    nombre: string;
    email: string;
    rol_id: number;      
    creado_en: string;  
};

export default function Usuarios() {
  /* ───────── ESTADOS ───────── */
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [filtroTexto, setFiltroTexto] = useState("");
    const [filtroRol,   setFiltroRol]   = useState<string>(""); 
    const [paginaActual, setPaginaActual] = useState(1);
    const [mostrarModal, setMostrarModal] = useState(false);

    // const { token } = useAuth();
    /* Cambio today---------------------------------------- */
    const { token } = useAuth();

    /* ───────── PETICIÓN ───────── */
    const fetchUsuarios = async () => {
        try {
        const res = await axios.get("/usuarios", {
            headers: { Authorization: `Bearer ${token}` },
        });
        setUsuarios(res.data);
        } catch (err) {
        console.error("Error al obtener usuarios:", err);
        }
    };

    useEffect(() => { fetchUsuarios(); }, [token]);

  /* ───────── FILTROS ───────── */
    const usuariosFiltrados = useMemo(() => {
    const term = filtroTexto.toLowerCase();

    return usuarios.filter((u) => {
        const coincideTexto =
            u.nombre.toLowerCase().includes(term) ||
            u.email.toLowerCase().includes(term);

        const coincideRol =
            filtroRol === "" ? true : String(u.rol_id) === filtroRol;

        return coincideTexto && coincideRol;
        });
    }, [usuarios, filtroTexto, filtroRol]);

  /* ───────── PAGINACIÓN ───────── */
    const totalPaginas = Math.ceil(usuariosFiltrados.length / FILAS_POR_PAGINA);

    const usuariosPaginados = useMemo(() => {
        const inicio = (paginaActual - 1) * FILAS_POR_PAGINA;
        return usuariosFiltrados.slice(inicio, inicio + FILAS_POR_PAGINA);
    }, [usuariosFiltrados, paginaActual]);

    useEffect(() => {
        if (paginaActual > totalPaginas) setPaginaActual(1);
    }, [totalPaginas]);

  /* ───────── ELIMINAR ───────── */
    const eliminarUsuario = async (id: number) => {
        const { isConfirmed } = await Swal.fire({
        title: "¿Eliminar usuario?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#aaa",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        });
        if (!isConfirmed) return;

        try {
        await axios.delete(`/usuarios/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("¡Eliminado!", "Usuario eliminado correctamente.", "success");
        fetchUsuarios();               // refrescar
        } catch (err) {
        console.error("Error al eliminar:", err);
        Swal.fire("Error", "No se pudo eliminar el usuario.", "error");
        }
    };

  /* ───────── RENDER ───────── */
    return (
        <div className="p-8 max-w-6xl mx-auto bg-white rounded-xl shadow-lg font-fam-ge">
            <h2 className="text-3xl font-bold mb-4 text-center">Usuarios del Sistema</h2>
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setMostrarModal(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold"
                >
                    <i className="fa-solid fa-user-plus mr-2" />
                    Nuevo Usuario
                </button>
                </div>

            {/* Nuevos cambios 28/07/2025 */}
            {mostrarModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="relative w-full max-w-2xl mx-4 md:mx-auto bg-white rounded-2xl shadow-xl p-6 animate-scaleIn transition-all duration-300 ease-out">
                
                {/* Botón Cerrar */}
                <button
                    onClick={() => setMostrarModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
                    title="Cerrar"
                >
                    <i className="fa-solid fa-xmark text-xl" />
                </button>

                {/* Título del Modal */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    Registrar nuevo usuario
                </h3>

                {/* Formulario */}
                <FormularioNuevoUsuario
                    onSuccess={() => {
                    fetchUsuarios();     // Refrescar lista
                    setMostrarModal(false); // Cerrar modal
                    }}
                />
                </div>
            </div>
            )}


        {/* ─── FILTROS ─── */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <input
            type="text"
            value={filtroTexto}
            onChange={(e) => setFiltroTexto(e.target.value)}
            placeholder="Buscar por nombre o email…"
            className="w-full lg:w-1/2 border border-gray-300 rounded-lg px-4 py-2"
            />

            <select
            value={filtroRol}
            onChange={(e) => setFiltroRol(e.target.value)}
            className="w-full lg:w-48 border border-gray-300 rounded-lg px-4 py-2"
            >
            <option value="">Todos los roles</option>
            <option value="1">Administrador</option>
            <option value="2">Cliente</option>
            <option value="3">Administrador secundario</option>
            </select>
        </div>

        {/* ─── TABLA ─── */}
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 bg-white shadow-md">
            <thead className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
                <tr>
                <th className="py-3 px-4 border-b">Nombre</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Rol</th>
                <th className="py-3 px-4 border-b">Fecha registro</th>
                <th className="py-3 px-4 border-b text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {usuariosPaginados.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{u.nombre}</td>
                    <td className="py-2 px-4 border-b">{u.email}</td>
                    {/* <td className="py-2 px-4 border-b">
                    <span
                        className={
                        u.rol_id === 1
                            ? "text-green-700 font-semibold"
                            : "text-gray-700"
                        }
                    >
                        {u.rol_id === 1 ? "Administrador" : "Cliente"}
                    </span>
                    </td> */}
                    <td className="py-2 px-4 border-b">
                        <span className="text-gray-800 font-medium">
                            {u.rol_id === 1
                            ? "Administrador Principal"
                            : u.rol_id === 3
                            ? "Administrador Secundario"
                            : "Cliente"}
                        </span>
                    </td>

                    <td className="py-2 px-4 border-b">{u.creado_en}</td>
                    <td className="py-2 px-4 border-b">
                    <div className="flex justify-center items-center gap-2">
                        {/* Si tuvieras modal de detalle/edición, colócalo aquí */}
                        <button
                        onClick={() => eliminarUsuario(u.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full"
                        title="Eliminar"
                        >
                        <i className="fa-solid fa-trash" />
                        </button>
                    </div>
                    </td>
                </tr>
                ))}
                {usuariosPaginados.length === 0 && (
                <tr>
                    <td colSpan={5} className="text-center py-4 text-gray-500">
                    No hay usuarios disponibles.
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>

        {/* ─── PAGINACIÓN ─── */}
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
