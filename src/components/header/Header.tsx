import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ChevronDown } from "lucide-react";
import Imgll from "@/assets/img/ae_logo.png"

export default function Header() {
const [isOpen, setIsOpen] = useState<boolean>(false);
const [, setOpenSubmenu] = useState<string | null>(null);

const toggleMenu = () => setIsOpen(!isOpen);

const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };
  return (
    <header className="shadow-md sticky w-full z-20 left-0 top-0 bg-[#103778]">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-5 h-16 bg-[#103778]">
        {/* Logo */}
        <Link to="/">
          <img
            src={Imgll}
            alt="Logo Asesoría Empresarial"
            className="h-16 w-auto"
          />
        </Link>

        {/* Botón hamburguesa */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navegación principal */}
        <nav
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-40`}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-auto capitalize font-bold font-fam-one capitalize text-lg">
            <li>
              <Link to="/" onClick={closeMenu} className="link-underline inline-block px-4 py-3 text-black hover:text-gray-300 md:text-white transition">
                Inicio
              </Link>
            </li>
            {/* Submenú */}
            <li className="relative group">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 text-black transition-colors duration-200 md:text-white hover:text-gray-300"
              >
                Servicios
                <ChevronDown
                  className="w-5 h-5 ml-1 transform transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <ul
                className={`
                  absolute left-0 top-full bg-white shadow-md min-w-[210px] z-50
                  transition-all duration-300 ease-in-out origin-top transform overflow-hidden
                  max-h-0 opacity-0 scale-y-95
                  group-hover:max-h-96 group-hover:opacity-100 group-hover:scale-y-100
                `}
              >
                <li>
                  <Link
                    to="/asesoria-contable"
                    className="capitalize block px-4 py-2 hover:bg-gray-100"
                  >
                    Asesoría Contable
                  </Link>
                </li>
                <li>
                  <Link
                    to="/asesoria-financiera"
                    className="capitalize block px-4 py-2 hover:bg-gray-100"
                  >
                    Asesoría Financiera
                  </Link>
                </li>
                <li>
                  <Link
                    to="/asesoria-tributaria"
                    className="capitalize block px-4 py-2 hover:bg-gray-100"
                  >
                    Asesoría Tributaria
                  </Link>
                </li>
                <li>
                  <Link
                    to="/asesoria-laboral"
                    className="capitalize block px-4 py-2 hover:bg-gray-100"
                  >
                    Asesoría Laboral
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/nosotros" onClick={closeMenu} className="link-underline block px-4 py-3 text-black md:text-white hover:text-gray-300 transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/cursos" onClick={closeMenu} className="link-underline block px-4 py-3 text-black md:text-white hover:text-gray-300">
                Talleres
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu} className="link-underline block px-4 py-3 text-black md:text-white hover:text-gray-300">
                Blog
              </Link>
            </li>

            {/* Botones móviles (login + registro) */}
            <li className="md:hidden w-full px-4 py-2">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block w-full py-3 text-white font-semibold text-center bg-[#103778] rounded-full hover:bg-[#791137] transition duration-300"
              >
                Iniciar Sesión
              </Link>
            </li>
            {/* <li className="md:hidden">
              <Link to="/registro" onClick={closeMenu} className="block w-full px-4 py-2 text-[#103778] font-bold text-center bg-white rounded-full hover:bg-[#103778] hover:text-white transition">
                Registrarse
              </Link>
            </li> */}
          </ul>
        </nav>

        {/* Botones escritorio (login + registro) */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login" onClick={closeMenu} className="px-2 py-2 text-white font-bold rounded-full">
            <i className="fa-regular fa-user"></i>
          </Link>
          <Link to="/contacto" className='px-5 py-2 text-[#103778] font-bold bg-white rounded-full hover:bg-[#791137] hover:text-white transition'>
            Contacto <span className="">→</span>
          </Link>
          {/* <Link to="/registro" onClick={closeMenu} className="px-5 py-2 text-[#103778] font-bold bg-white rounded-full hover:bg-[#103778] hover:text-white transition">
            Registrarse
          </Link> */}
        </div>
      </div>
    </header>
  );
}
