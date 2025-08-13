import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const AdminLayout = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-md"
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 pt-16 space-y-4 shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0 w-72" : "-translate-x-full"
        } md:rounded-e-3xl`}
      >
        <h2 className="text-xl font-bold text-gray-400 font-fam">Panel Administrador</h2>
        <h2 className="text-3xl font-bold font-fam-ge mb-6">Asesoría Empresarial SAC</h2>

        <nav className="flex flex-col gap-3 font-fam">
          <NavLink to="/admin" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>
            <i className="fa-solid fa-house mr-2"></i> Inicio
          </NavLink>

          <NavLink to="/admin/articulos" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>
            <i className="fa-solid fa-pen-to-square mr-2"></i> Artículos
          </NavLink>

          <NavLink to="/admin/contactos" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>
            <i className="fa-solid fa-envelope mr-2"></i> Mensajes
          </NavLink>

          <NavLink to="/admin/docentes" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>
            <i className="fa-solid fa-user-tie mr-2"></i> Docentes
          </NavLink>

          <NavLink to="/admin/cursos" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>
            <i className="fa-solid fa-book-bookmark mr-2"></i> Cursos
          </NavLink>

          {/* Solo muestra "Usuarios" si el rol es "admin principal" */}
          {role === "admin" && (
            <NavLink to="/admin/usuarios" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>
              <i className="fa-solid fa-users mr-2"></i> Usuarios
            </NavLink>
          )}
        </nav>

        <button
          onClick={handleLogout}
          className="w-full py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition mt-8"
        >
          <i className="fa-solid fa-circle-xmark mr-2"></i> Cerrar sesión
        </button>
      </aside>

      {/* Contenido principal */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out p-6 ${
          isOpen ? "ml-72" : "ml-0"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
