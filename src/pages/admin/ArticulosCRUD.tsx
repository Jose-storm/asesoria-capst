import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import type { Article } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/Firebase";
import Swal from 'sweetalert2';
const API_URL = "/articulos";

const ArticulosCRUD = () => {
  const [articulos, setArticulos] = useState<Article[]>([]);
  const [nuevoArticulo, setNuevoArticulo] = useState({
    titulo: "",
    contenido: "",
    imagen: "",        // antes era "image"
    extracto: "",      // antes era "excerpt"
    autor_nombre: "",
  });
  /* ---------------------------------------------------------------------------Sección de imagen en firebase función */

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const storageRef = ref(storage, `articulos/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    setNuevoArticulo((prev) => ({
      ...prev,
      imagen: url,
    }));

    console.log("Imagen subida y URL:", url);
  };

  /* ------------------------------------------------- */

  const { token } = useAuth();
  const navigate = useNavigate();

  const fetchArticulos = async () => {
    const res = await axios.get(API_URL);
    setArticulos(res.data);
  };

  useEffect(() => {
    fetchArticulos();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNuevoArticulo({ ...nuevoArticulo, [e.target.name]: e.target.value });
  };
  /* Modificación de Sweetalert2 */
  // const crearArticulo = async () => {
  //   await axios.post(API_URL, nuevoArticulo, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   setNuevoArticulo({ titulo: "", contenido: "", imagen: "", extracto: "", autor_nombre: "" });
  //   fetchArticulos();
  // };
  const crearArticulo = async () => {
  try {
    await axios.post(API_URL, nuevoArticulo, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setNuevoArticulo({
      titulo: "",
      contenido: "",
      imagen: "",
      extracto: "",
      autor_nombre: "",
    });

    fetchArticulos();

    Swal.fire({
      title: '¡Artículo creado!',
      text: 'El nuevo artículo ha sido registrado correctamente.',
      icon: 'success',
      confirmButtonColor: '#103778',
    });
  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: 'No se pudo crear el artículo.',
      icon: 'error',
      confirmButtonColor: '#d33',
    });
  }
  };

  const eliminarArticulo = async (id: number) => {
  const result = await Swal.fire({
    title: '¿Eliminar artículo?',
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
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchArticulos();

    Swal.fire({
      title: '¡Eliminado!',
      text: 'El artículo ha sido eliminado correctamente.',
      icon: 'success',
      confirmButtonColor: '#103778',
    });
  }
};

  // Función que verifica si hay datos no guardados
  const hayCambiosNoGuardados = () => {
    return Object.values(nuevoArticulo).some(value => value.trim() !== "");
  };

  // Función para volver al dashboard con confirmación
  const volverDashboard = () => {
    if (hayCambiosNoGuardados()) {
      const confirmar = window.confirm(
        "Tienes cambios sin guardar. ¿Seguro quieres salir y perder esos cambios?"
      );
      if (!confirmar) return; // Si el usuario cancela, no navegamos
    }
    navigate("/admin");
  };

  return (
    
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md font-fam-ge">
      <h2 className="text-3xl font-bold mb-6 text-center">Gestión de Artículos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
        {/* Columna de etiquetas */}
        <div className="space-y-4 font-semibold text-gray-700 hidden md:block">
          <p>Título:</p>
          <p>URL Imagen:</p>
          <p>Resumen:</p>
          <p>Autor:</p>
          <p>Contenido:</p>
        </div>

        {/* Columna de inputs */}
        <div className="md:col-span-2 space-y-4">
          <input
            name="titulo"
            placeholder="Título"
            value={nuevoArticulo.titulo}
            onChange={handleInput}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* -----------------------------------------------------------------------Modificación de imagen con firebase Service */}
          {/* <input
            name="imagen"
            placeholder="URL imagen"
            value={nuevoArticulo.imagen}
            onChange={handleInput}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          {/* <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const storageRef = ref(storage, `articulos/${file.name}`);
              await uploadBytes(storageRef, file);

              const url = await getDownloadURL(storageRef);
              setNuevoArticulo({ ...nuevoArticulo, imagen: url });
              console.log("Imagen subida", url)
            }}
            className="w-full bg-green-400"
          /> */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded"
          />
          {nuevoArticulo.imagen && (
            <img
              src={nuevoArticulo.imagen}
              alt="Previsualización"
              className="w-full max-h-48 object-contain rounded border border-gray-200"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          )}

          
          {/* ------------------------------------------------------------------------------------------------------ */}
          <input
            name="extracto"
            placeholder="Resumen"
            value={nuevoArticulo.extracto}
            onChange={handleInput}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="autor_nombre"
            placeholder="Autor"
            value={nuevoArticulo.autor_nombre}
            onChange={handleInput}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="contenido"
            placeholder="Contenido"
            value={nuevoArticulo.contenido}
            onChange={handleInput}
            className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        onClick={crearArticulo}
        className="btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors w-full mb-10"
      >
        Crear Artículo<i className="ml-2 fa-solid fa-plus"></i>
      </button>

      {/* Lista de artículos */}
      <ul className="space-y-4">
        {articulos.map((a) => (
          <li
            key={a.id}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{a.titulo}</h3>
                <p className="text-gray-600 text-sm font-fam-ge">{a.extracto}</p>
              </div>
              <button
                onClick={() => eliminarArticulo(a.id)}
                className="btn-danger bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full ml-4 transition-colors"
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticulosCRUD;
