import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useAuth } from "../../hooks/useAuth";
import type { Contacto } from "@/types/index";

const Contactos = () => {
  const [mensajes, setMensajes] = useState<Contacto[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchMensajes = async () => {
      try {
        const res = await axios.get("/contacto", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMensajes(res.data);
      } catch (error) {
        console.error("Error al obtener mensajes de contacto:", error);
      }
    };

    fetchMensajes();
  }, [token]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center font-fam-two">Mensajes de Contacto</h2>
      <div className="overflow-x-auto font-fam-ge">
        <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-3 px-4 border-b">Nombre</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Teléfono</th>
              <th className="py-3 px-4 border-b">Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {mensajes.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{m.nombre}</td>
                <td className="py-2 px-4 border-b">{m.email}</td>
                <td className="py-2 px-4 border-b">{m.telefono}</td>
                <td className="py-2 px-4 border-b">{m.mensaje}</td>
              </tr>
            ))}
            {mensajes.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No hay mensajes disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contactos;
