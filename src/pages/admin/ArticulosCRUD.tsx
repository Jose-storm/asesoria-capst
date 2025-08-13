import { useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "@/api/axios";
import type { Article } from "@/types";
import { useAuth } from "@/hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/Firebase";
import Swal from "sweetalert2";

const API_URL = "/articulos";

const ArticulosCRUD = () => {
  const [articulos, setArticulos] = useState<Article[]>([]);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [nuevoArticulo, setNuevoArticulo] = useState({
    titulo: "",
    contenido: "",
    imagen: "",
    extracto: "",
    autor_nombre: "",
  });

  const FILAS_POR_PAGINA = 4;
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(articulos.length / FILAS_POR_PAGINA);

  const articulosPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * FILAS_POR_PAGINA;
    return articulos.slice(inicio, inicio + FILAS_POR_PAGINA);
  }, [articulos, paginaActual]);

  useEffect(() => {
    if (paginaActual > totalPaginas) setPaginaActual(1);
  }, [totalPaginas]);

  const { token } = useAuth();
  // const navigate = useNavigate();

  const fetchArticulos = async () => {
    const res = await axios.get(API_URL);
    setArticulos(res.data);
  };

  useEffect(() => {
    fetchArticulos();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setNuevoArticulo({ ...nuevoArticulo, [e.target.name]: e.target.value });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const storageRef = ref(storage, `articulos/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    setNuevoArticulo((prev) => ({ ...prev, imagen: url }));
  };

  const crearArticulo = async () => {
    try {
      await axios.post(API_URL, nuevoArticulo, { headers: { Authorization: `Bearer ${token}` } });
      setNuevoArticulo({ titulo: "", contenido: "", imagen: "", extracto: "", autor_nombre: "" });
      fetchArticulos();
      Swal.fire({ title: "¡Artículo creado!", text: "Registrado correctamente.", icon: "success", confirmButtonColor: "#103778" });
    } catch {
      Swal.fire({ title: "Error", text: "No se pudo crear.", icon: "error", confirmButtonColor: "#d33" });
    }
  };

  const actualizarArticulo = async () => {
    try {
      await axios.put(`${API_URL}/${editandoId}`, nuevoArticulo, { headers: { Authorization: `Bearer ${token}` } });
      setNuevoArticulo({ titulo: "", contenido: "", imagen: "", extracto: "", autor_nombre: "" });
      setEditandoId(null);
      fetchArticulos();
      Swal.fire({ title: "¡Actualizado!", text: "Artículo actualizado.", icon: "success", confirmButtonColor: "#103778" });
    } catch {
      Swal.fire({ title: "Error", text: "No se pudo actualizar.", icon: "error", confirmButtonColor: "#d33" });
    }
  };

  const eliminarArticulo = async (id: number) => {
    const result = await Swal.fire({
      title: "¿Eliminar artículo?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (!result.isConfirmed) return;

    await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    fetchArticulos();
    Swal.fire({ title: "¡Eliminado!", text: "Artículo eliminado.", icon: "success", confirmButtonColor: "#103778" });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md font-fam-ge">
      <h2 className="text-3xl font-bold mb-6 text-center">Gestión de Artículos</h2>

      {/* FORMULARIO CREAR / EDITAR  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
        <div className="space-y-4 font-semibold text-gray-700 hidden md:block">
          <p>Título:</p>
          <p>Imagen:</p>
          <p>Resumen:</p>
          <p>Autor:</p>
          <p>Contenido:</p>
        </div>
        <div className="md:col-span-2 space-y-4">
          <input name="titulo" placeholder="Título" value={nuevoArticulo.titulo} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2" />

          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border border-gray-300 rounded" />
          {nuevoArticulo.imagen && <img src={nuevoArticulo.imagen} alt="Previsualización" className="w-full max-h-48 object-contain rounded border border-gray-200" />}

          <input name="extracto" placeholder="Resumen" value={nuevoArticulo.extracto} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2" />
          <input name="autor_nombre" placeholder="Autor" value={nuevoArticulo.autor_nombre} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2" />
          <textarea name="contenido" placeholder="Contenido" value={nuevoArticulo.contenido} onChange={handleInput} className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px] resize-none" />
        </div>
      </div>

      {editandoId ? (
        <button onClick={actualizarArticulo} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-colors w-full mb-4">
          Guardar Cambios <i className="ml-2 fa-solid fa-floppy-disk" />
        </button>
      ) : (
        <button onClick={crearArticulo} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors w-full mb-4">
          Crear Artículo <i className="ml-2 fa-solid fa-plus" />
        </button>
      )}

      {editandoId && (
        <button
          onClick={() => {
            setEditandoId(null);
            setNuevoArticulo({ titulo: "", contenido: "", imagen: "", extracto: "", autor_nombre: "" });
          }}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-full w-full mb-10"
        >
          Cancelar Edición
        </button>
      )}

      {/* TABLA */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3">Título</th>
              <th className="px-4 py-3">Resumen</th>
              <th className="px-4 py-3">Autor</th>
              <th className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {articulosPaginados.map((a) => (
              <tr key={a.id} className="border-b">
                <td className="px-4 py-3 font-medium">{a.titulo}</td>
                <td className="px-4 py-3">{a.extracto}</td>
                <td className="px-4 py-3">{a.autor_nombre}</td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setNuevoArticulo({ titulo: a.titulo, contenido: a.contenido, imagen: a.imagen, extracto: a.extracto, autor_nombre: a.autor_nombre });
                      setEditandoId(a.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full"
                  >
                    <i className="fa-solid fa-pen-to-square" />
                  </button>
                  <button onClick={() => eliminarArticulo(a.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full">
                    <i className="fa-solid fa-trash" />
                  </button>
                </td>
              </tr>
            ))}
            {articulosPaginados.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                  No hay artículos para mostrar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PESTAÑAS DE PÁGINA */}
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

export default ArticulosCRUD;
