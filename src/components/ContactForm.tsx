import { useState } from "react";
import API from "../api/axios";

const ContactForm = () => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await API.post("/contacto", form);
        setEnviado(true);
        setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    };

    return (
        <>
                {/* Formulario funcional */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                        <input
                            id="nombre"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu nombre"
                            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="ejemplo@correo.com"
                            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            />
                    </div>

                    <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono (opcional)</label>
                        <input
                            id="telefono"
                            type="tel"
                            name="telefono"
                            value={form.telefono}
                            onChange={handleChange}
                            placeholder="123456789"
                            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            />
                    </div>

                    <div>
                        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={form.mensaje}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Escribe tu mensaje..."
                            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-full w-full hover:bg-blue-700 transition duration-300"
                            >
                            Enviar mensaje
                        </button>
                        {enviado && (
                            <p className="text-green-600 mt-3">Mensaje enviado correctamente.</p>
                        )}
                    </div>
                </form>
        </>
    );
};

export default ContactForm;

