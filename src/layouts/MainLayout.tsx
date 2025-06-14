import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { ArrowUp } from "lucide-react";

const MainLayout = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setShowScrollTop(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

return (
    <div className="flex flex-col min-h-screen font-fam">
        <Header />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />

        {/* Botón WhatsApp */}
        <a
            href="https://wa.me/+51993568867"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-4xl text-white px-4 py-3 rounded-full shadow-lg z-50"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>

        {/* Botón Volver Arriba */}
        {showScrollTop && (
            <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-8.5 bg-[#103778] transition delay-300 hover:transition hover:delay-100 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-opacity"
            aria-label="Volver arriba"
            >
            <ArrowUp className="w-5 h-5" />
            </button>
        )}
    </div>
);
};

export default MainLayout;
