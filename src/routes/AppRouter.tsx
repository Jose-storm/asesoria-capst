// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "@/pages/home/Home";
// import BlogDetail from "@/pages/blog/BlogDetail";
// // import ContactForm from "@/components/ContactForm";
// import Login from "@/pages/login/Login";
// import Dashboard from "@/pages/admin/Dashboard";
// import ArticulosCRUD from "@/pages/admin/ArticulosCRUD";
// import Contactos from "@/pages/admin/Contactos";
// import PrivateRoute from "./PrivateRoute";
// import MainLayout from "@/layouts/MainLayout";
// import AdminLayout from "@/layouts/AdminLayout";
// import Nosotros from "@/pages/aboutus/Nosotros";
// import Contacto from "@/pages/contact/Contacto";
// import Cursos from "@/pages/cursos/Cursos";
// import CursoDetail from "@/pages/cursos/CursoDetail";
// import BlogGe from "@/pages/blog/BlogGe";
// import AsesoriaContable from "@/pages/servicio/AsesoriaContable";
// import CursosCRUD from "@/pages/admin/CursosCRUD";
// import DocenteCRUD from "@/pages/admin/DocentesCRUD";
// import AsesoriaFinanciera from "@/pages/servicio/AsesoriaFinanciera";
// import AsesoriaTributaria from "@/pages/servicio/AsesoriaTributaria";
// import AsesoriaLaboral from "@/pages/servicio/AsesoriaLaboral";
// import ErrorPage from "@/pages/support/ErrorPage";
// import PoliticasPrivacity from "@/pages/support/PoliticasPrivacity";
// import Usuarios from "@/pages/admin/UsuariosCRUD";

// const AppRouter = () => {
//     return (
//         <BrowserRouter>
//         <Routes>
//             {/* Layout Público */}
//             <Route element={<MainLayout />}>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/blog/:id" element={<BlogDetail />} />
//                 <Route path="/nosotros" element={<Nosotros />} />
//                 <Route path="/contacto" element={<Contacto />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/cursos" element={<Cursos />} />
//                 <Route path="/cursos/:id" element={<CursoDetail />} />
//                 <Route path="/blog" element={<BlogGe></BlogGe>}/>
//                 <Route path="/asesoria-contable" element={<AsesoriaContable/>}/>
//                 <Route path="/asesoria-financiera" element={<AsesoriaFinanciera/>}/>
//                 <Route path="/asesoria-tributaria" element={<AsesoriaTributaria/>}/>
//                 <Route path="/asesoria-laboral" element={<AsesoriaLaboral/>}/>
//                 <Route path="/politica-privacidad" element={<PoliticasPrivacity/>}/>
//             </Route>

//             {/* Layout del Administrador */}
//             <Route
//             path="/admin"
//             element={
//                 <PrivateRoute>
//                 <AdminLayout />
//                 </PrivateRoute>
//             }
//             >
//             <Route index element={<Dashboard />} />
//             <Route path="articulos" element={<ArticulosCRUD />} />
//             <Route path="contactos" element={<Contactos />} />
//             <Route path="cursos" element={<CursosCRUD />} />
//             <Route path="docentes" element={<DocenteCRUD />} />
//             <Route path="usuarios" element={<Usuarios />} />

//             </Route>
//             <Route path="*" element={<ErrorPage />} />
//         </Routes>
//         </BrowserRouter>
//     );
// };

// export default AppRouter;
/* Modificación 29/07/2025-------------------------------------------------------------- */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home/Home";
import BlogDetail from "@/pages/blog/BlogDetail";
import Login from "@/pages/login/Login";
import Dashboard from "@/pages/admin/Dashboard";
import ArticulosCRUD from "@/pages/admin/ArticulosCRUD";
import Contactos from "@/pages/admin/Contactos";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";
import Nosotros from "@/pages/aboutus/Nosotros";
import Contacto from "@/pages/contact/Contacto";
import Cursos from "@/pages/cursos/Cursos";
import CursoDetail from "@/pages/cursos/CursoDetail";
import BlogGe from "@/pages/blog/BlogGe";
import AsesoriaContable from "@/pages/servicio/AsesoriaContable";
import CursosCRUD from "@/pages/admin/CursosCRUD";
import DocenteCRUD from "@/pages/admin/DocentesCRUD";
import AsesoriaFinanciera from "@/pages/servicio/AsesoriaFinanciera";
import AsesoriaTributaria from "@/pages/servicio/AsesoriaTributaria";
import AsesoriaLaboral from "@/pages/servicio/AsesoriaLaboral";
import ErrorPage from "@/pages/support/ErrorPage";
import PoliticasPrivacity from "@/pages/support/PoliticasPrivacity";
import Usuarios from "@/pages/admin/UsuariosCRUD";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            {/* Layout Público */}
            <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/:id" element={<CursoDetail />} />
            <Route path="/blog" element={<BlogGe />} />
            <Route path="/asesoria-contable" element={<AsesoriaContable />} />
            <Route path="/asesoria-financiera" element={<AsesoriaFinanciera />} />
            <Route path="/asesoria-tributaria" element={<AsesoriaTributaria />} />
            <Route path="/asesoria-laboral" element={<AsesoriaLaboral />} />
            <Route path="/politica-privacidad" element={<PoliticasPrivacity />} />
            </Route>

            {/* Layout del Administrador (admin y admin_secundario) */}
            <Route
            path="/admin"
            element={
                <PrivateRoute allowedRoles={["admin", "admin_secundario"]}>
                <AdminLayout />
                </PrivateRoute>
            }
            >
            <Route index element={<Dashboard />} />
            <Route path="articulos" element={<ArticulosCRUD />} />
            <Route path="contactos" element={<Contactos />} />
            <Route path="cursos" element={<CursosCRUD />} />
            <Route path="docentes" element={<DocenteCRUD />} />

            {/* Sección de usuarios: solo para ADMIN principal */}
            <Route
                path="usuarios"
                element={
                <PrivateRoute allowedRoles={["admin"]}>
                    <Usuarios />
                </PrivateRoute>
                }
            />
            </Route>

            {/* Página de error */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
