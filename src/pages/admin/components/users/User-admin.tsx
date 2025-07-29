// src/components/admin/FormularioNuevoUsuario.tsx
import { useState } from "react";
import axios from "@/api/axios";
import Swal from "sweetalert2";
import { useAuth } from "@/hooks/useAuth";

export default function FormularioNuevoUsuario({ onSuccess }: { onSuccess: () => void }) {
  const { token } = useAuth();

  // if (user?.email !== "asesoriaempresarial@empresa.com" && user?.rol_id !== 1) return null;

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    rol_id: "2", // por defecto: cliente
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.password || !form.rol_id) {
      return Swal.fire("Error", "Todos los campos son obligatorios", "error");
    }

    try {
      setLoading(true);
      await axios.post(
        "/auth/register",
        {
          nombre: form.nombre,
          email: form.email,
          password: form.password,
          rol_id: parseInt(form.rol_id),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      Swal.fire("¡Registrado!", "El usuario fue creado correctamente", "success");
      setForm({ nombre: "", email: "", password: "", rol_id: "" });
      onSuccess(); // recargar lista
    } catch (err: any) {
      console.error(err);
      Swal.fire("Error", err?.response?.data?.message || "No se pudo registrar", "error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="p-2 rounded-lg mb-6">
  <div className="grid md:grid-cols-2 gap-4">
    {/* Nombre */}
    <div className="flex flex-col">
      <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1">
        Nombre completo
      </label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
        Correo electrónico
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Contraseña */}
    <div className="flex flex-col">
      <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
        Contraseña
      </label>
      <input
        id="password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Rol */}
    <div className="flex flex-col">
      <label htmlFor="rol_id" className="text-sm font-medium text-gray-700 mb-1">
        Rol de usuario
      </label>
      <select
        id="rol_id"
        name="rol_id"
        value={form.rol_id}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="1">Administrador</option>
        <option value="2">Cliente</option>
        <option value="3">Administrador Secundario</option>
      </select>
    </div>
  </div>

  <button
    type="submit"
    disabled={loading}
    className="mt-6 bg-blue-600 hover:bg-blue-700 font-semibold text-white px-6 py-2 rounded-full transition duration-200"
  >
    {loading ? "Registrando..." : "Registrar usuario"}
    <i className="ml-2 fa-solid fa-plus" />
  </button>
</form>

  );
}
