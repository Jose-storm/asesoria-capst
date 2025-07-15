import { useEffect, useMemo, useState } from "react";
import axios from "@/api/axios";
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/useAuth";
import ContactoModal from "@/components/contacto/ContactoVer";
import type { Contacto } from "@/types";

const FILAS_POR_PAGINA = 5;

export default function Contactos() {
  /* ───────── ESTADOS ───────── */
  const [mensajes, setMensajes] = useState<Contacto[]>([]);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [filtroFecha, setFiltroFecha] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [mensajeSeleccionado, setMensajeSeleccionado] = useState<Contacto | null>(null);
  const { token } = useAuth();

  /* ───────── PETICIÓN ───────── */
  const fetchMensajes = async () => {
    try {
      const res = await axios.get("/contacto", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMensajes(res.data);
    } catch (err) {
      console.error("Error al obtener mensajes:", err);
    }
  };

  useEffect(() => { fetchMensajes(); }, [token]);

  /* ───────── FILTROS ───────── */
  const mensajesFiltrados = useMemo(() => {
    const term = filtroTexto.toLowerCase();
    return mensajes.filter(({ nombre, email, telefono, enviado_en }) => {
      const coincideTexto =
        nombre.toLowerCase().includes(term) ||
        email.toLowerCase().includes(term) ||
        (telefono ?? "").toLowerCase().includes(term);

      const coincideFecha = filtroFecha
        ? enviado_en?.startsWith(filtroFecha)
        : true;

      return coincideTexto && coincideFecha;
    });
  }, [mensajes, filtroTexto, filtroFecha]);

  /* ───────── PAGINACIÓN ───────── */
  const totalPaginas = Math.ceil(mensajesFiltrados.length / FILAS_POR_PAGINA);

  const mensajesPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * FILAS_POR_PAGINA;
    return mensajesFiltrados.slice(inicio, inicio + FILAS_POR_PAGINA);
  }, [mensajesFiltrados, paginaActual]);

  useEffect(() => {
    if (paginaActual > totalPaginas) setPaginaActual(1);
  }, [totalPaginas]);

  /* ───────── ELIMINAR ───────── */
  const eliminarMensaje = async (id: number) => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Eliminar mensaje?",
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
      await axios.delete(`/contacto/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire("¡Eliminado!", "Mensaje eliminado correctamente.", "success");
      fetchMensajes();
    } catch (err) {
      console.error("Error al eliminar:", err);
      Swal.fire("Error", "No se pudo eliminar el mensaje.", "error");
    }
  };

  /* ───────── RENDER ───────── */
  return (
    <div className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg font-fam-ge">
      <h2 className="text-3xl font-bold mb-6 text-center">Mensajes de Contacto</h2>

      {/* ─── FILTROS ─── */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={filtroTexto}
          onChange={(e) => setFiltroTexto(e.target.value)}
          placeholder="Buscar por nombre, email o teléfono..."
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          type="date"
          value={filtroFecha}
          onChange={(e) => setFiltroFecha(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* ─── TABLA ─── */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white shadow-md">
          <thead className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 border-b">Nombre</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Teléfono</th>
              <th className="py-3 px-4 border-b">Mensaje</th>
              <th className="py-3 px-4 border-b">Fecha enviado</th>
              <th className="py-3 px-4 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mensajesPaginados.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{m.nombre}</td>
                <td className="py-2 px-4 border-b">{m.email}</td>
                <td className="py-2 px-4 border-b">{m.telefono}</td>
                <td className="py-2 px-4 border-b truncate max-w-[200px]">{m.mensaje}</td>
                <td className="py-2 px-4 border-b">{m.enviado_en}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => setMensajeSeleccionado(m)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full"
                      title="Ver"
                    >
                      <i className="fa-solid fa-eye" />
                    </button>

                    <button
                      onClick={() => eliminarMensaje(m.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full"
                      title="Eliminar"
                    >
                      <i className="fa-solid fa-trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {mensajesPaginados.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No hay mensajes disponibles.
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

      {/* ─── MODAL DETALLE ─── */}
      {mensajeSeleccionado && (
        <ContactoModal
          mensaje={mensajeSeleccionado}
          onClose={() => setMensajeSeleccionado(null)}
        />
      )}
    </div>
  );
}
