// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ImgL from "@/assets/img/Inicio_two.png"
import ImgInit from "@/assets/img/login_ae.jpg"
import API from "@/api/axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  try {
    const res = await API.post("/auth/login", form);
    const rol = res.data.role;
    login(res.data.token, rol);

    // Redirección inmediata después del login
    if (rol === "admin") {
      navigate("/admin");
    } else {
      navigate("/"); 
    }

  } catch (err) {
    console.error("Error al hacer login:", err);
    setError("Credenciales incorrectas.");
  }
};
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden max-w-4xl w-full font-fam-ge">
        
        {/* Imagen lateral */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={ImgInit}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulario con detalles */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex justify-center mb-2">
            <img
              src={ImgL}
              alt="Logo de la empresa"
              className="h-20 w-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Inicio de Sesión</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Ingresa tus credenciales para acceder al panel de gestión del sistema.
          </p>

          {/* Puedes agregar contenido dinámico como hora actual */}
          <div className="text-center text-sm text-blue-500 mb-4">
            {new Date().toLocaleString("es-PE", { dateStyle: "medium", timeStyle: "short" })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Correo"
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              placeholder="Contraseña"
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition duration-300"
            >
              Ingresar <i className="ml-2 fa-solid fa-arrow-right-to-bracket"></i>
            </button>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </section>

  );
};

export default Login;



