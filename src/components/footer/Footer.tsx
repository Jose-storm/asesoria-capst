import React from "react";
import { Link } from "react-router-dom";
import ImgFoo from "@/assets/img/ae_logo.png"

const enlaces = [
    { nombre: "Inicio", href: "/" },
    { nombre: "Servicios", href: "/servicios" },
    { nombre: "Nosotros", href: "/nosotros" },
    { nombre: "Talleres", href: "/cursos" },
    { nombre: "Contacto", href: "/contacto" },
    { nombre: "Blog", href: "/blog" },
];

const Footer: React.FC = () => {
return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-start pb-10">
            <Link to="/">
            <img
                src={ImgFoo}
                alt="Logo Asesoría Empresarial"
                className="h-16 w-auto"
            />
            </Link>

            {/* Enlaces de navegación */}
            <div className="justify-center md:justify-start gap-4 font-fam-ge">
            <ul>
                {enlaces.map((enlace) => (
                <li key={enlace.nombre} className="block h-8">
                    <Link
                    to={enlace.href}
                    className="link-underline text-gray-400 hover:text-white transition-colors duration-300"
                    >
                    {enlace.nombre}
                    </Link>
                </li>
                ))}
            </ul>
            </div>

            {/* Contacto */}
            <div className="justify-center md:justify-start gap-4 font-fam-ge">
                <h2 className="bold mb-2">Contacto</h2>
                <ul>
                    <li>
                        <a href="" className="hover:text-blue-300"><i className="fa-solid fa-phone mr-2"></i>993 568 867</a>
                    </li>
                    <li>
                        <a href="" className="hover:text-blue-300"><i className="fa-solid fa-envelope mr-2"></i>asesoriaempresarial.info@gmail.com</a>
                    </li>
                </ul>
            </div>
            {/* Redes sociales */}
            <div className="justify-center md:justify-start gap-4 font-fam-ge">
                <h2 className="bold mb-2">Síguenos</h2>
                <ul>
                    <li className="inline-block mr-2">
                        <a href="https://www.instagram.com/asesoriaempresarial.info?igsh=eW5qMXpxMTcyYXpu" className="text-1xl hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-square-instagram"></i></a>
                    </li>
                    <li className="inline-block mr-2">
                        <a href="https://www.tiktok.com/@asesoriaempresarial?is_from_webapp=1&sender_device=pc" className="hover:text-[#103778] border-blue-400 border-1 hover:bg-blue-400 transition delay-50 duration-300 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-tiktok"></i></a>
                    </li>
                    <li className="inline-block mr-2">
                        <a href="" className="hover:text-[#103778] border-blue-400 border-1 hover:bg-blue-400 transition delay-50 duration-300 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li className="inline-block mr-2">
                        <a href="https://www.facebook.com/ConsultorioEmpresarialPeru" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-5 py-3 inline-block rounded-full"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li className="inline-block mr-2 mt-2">
                        <a href="https://youtube.com/@asesoriaempresarialperu?si=frIb5vys2VU6EQp9" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-youtube"></i></a>
                    </li>
                    <li className="inline-block mr-2 mt-2">
                        <a href="https://www.linkedin.com/company/asesor%C3%ADa-empresarial-per%C3%BA/" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500 p-3 border-t border-gray-300 my-3 font-fam-ge">
            &copy; {new Date().getFullYear()} Asesoría Empresarial. Todos los derechos reservados.
        </div>
    </footer>
);
};

export default Footer;
