import React from "react";
import { Link } from "react-router-dom";
import ImgFoo from "@/assets/img/ae_logo.png"

const enlaces = [
    { nombre: "Inicio", href: "/" },
    { nombre: "Nosotros", href: "/nosotros" },
    { nombre: "Talleres", href: "/cursos" },
    { nombre: "Contacto", href: "/contacto" },
    { nombre: "Blog", href: "/blog" },
];

/* Mensaje de whatsapp */
const mensaje_w = encodeURIComponent("Hola, estoy interesado en este servicio:");
const numero_contacto = "51993568867";


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
                        <a href={`https://wa.me/${numero_contacto}?text=${mensaje_w}`} className="hover:text-blue-300" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-phone mr-2"></i>993 568 867</a>
                    </li>
                    <li>
                        <a href="mailto:asesoriaempresarial.info@gmail.com" className="hover:text-blue-300"><i className="fa-solid fa-envelope mr-2"></i>asesoriaempresarial.info@gmail.com</a>
                    </li>
                </ul>
            </div>
            {/* Redes sociales */}
            <div className="justify-center md:justify-start gap-4 font-fam-ge">
                <h2 className="bold mb-2">Síguenos</h2>
                <ul>
                    <li className="inline-block mr-2">
                        <a href="https://www.instagram.com/asesoriaempresarial.info?igsh=eW5qMXpxMTcyYXpu" className="text-1xl hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                    </li>
                    <li className="inline-block mr-2">
                        <a href="https://www.tiktok.com/@asesoriaempresarial?is_from_webapp=1&sender_device=pc" className="hover:text-[#103778] border-blue-400 border-1 hover:bg-blue-400 transition delay-50 duration-300 px-4 py-3 inline-block rounded-full" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                    </li>
                    <li className="inline-block mr-2">
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2FAsesoraEmpresa1%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExMUJtazZSY1dmdjhxQkoyMAEeyYMNl3ZS1eKNQrWLXtGASVMCgf5AcWn0_09HkYFKu2MG59GTWZTmoUzUnZk_aem_nrCVtk43KaKXsCCESac1sw&h=AT1Tqvr3whv5HRRHoPbd4MqhPgAvW0cJ3Vsy52r5QrO-V3Nek9bDTZg1TkcTbzomvhFZNkG97a6wby-vbB29r0tKAd4momG-nouiCBj82wZyDZ94k3wzxd8KEqM4-AyaQ1r7" className="hover:text-[#103778] border-blue-400 border-1 hover:bg-blue-400 transition delay-50 duration-300 px-4 py-3 inline-block rounded-full" target="_blank"><i className="fa-brands fa-x-twitter" ></i></a>
                    </li>
                    <li className="inline-block mr-2">
                        <a href="https://www.facebook.com/ConsultorioEmpresarialPeru" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-5 py-3 inline-block rounded-full" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li className="inline-block mr-2 mt-2">
                        <a href="https://youtube.com/@asesoriaempresarialperu?si=frIb5vys2VU6EQp9" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                    </li>
                    <li className="inline-block mr-2 mt-2">
                        <a href="https://www.linkedin.com/company/asesor%C3%ADa-empresarial-per%C3%BA/" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li className="inline-block mr-2 mt-2">
                        <a href="https://open.spotify.com/show/4bkgkDJAXILQZ9PVFKy3xr?si=6348889ba4514e86" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full" target="_blank"><i className="fa-brands fa-spotify"></i></a>
                    </li>
                    <li className="inline-block mr-2 mt-2">
                        <a href="https://asesoriaempresarialaqp.blogspot.com/" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full" target="_blank"><i className="fa-brands fa-blogger"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500 p-3 border-t border-gray-300 my-3 font-fam-ge">
            &copy; {new Date().getFullYear()} Asesoría Empresarial. Todos los derechos reservados.
            <Link to="/politica-privacidad" className="ml-2 link-underline text-gray-400 hover:text-white transition-colors duration-300">
                Políticas de Privacidad
            </Link>
        </div>
    </footer>
);
};

export default Footer;
