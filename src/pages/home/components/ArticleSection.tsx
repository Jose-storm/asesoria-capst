import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "@/api/axios";
import ArticleCard from "@/components/article-card/ArticleCard";
import type { Article } from "@/types";

const ArticleSection = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(3);

    useEffect(() => {
        const fetchArticles = async () => {
        try {
            const { data } = await axios.get("/articulos");
            setArticles(data);
        } catch (error) {
            console.error("Error al cargar artículos:", error);
        } finally {
            setLoading(false);
        }
        };
        fetchArticles();
    }, []);

    const updateVisible = useCallback(() => {
        const w = window.innerWidth;
        if (w >= 1024) setVisible(3);
        else if (w >= 640) setVisible(2);
        else setVisible(1);
    }, []);

    useEffect(() => {
        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, [updateVisible]);

    const maxIndex = Math.max(0, articles.length - visible);
    const next = () => setCurrent((i) => (i >= maxIndex ? 0 : i + 1));
    const prev = () => setCurrent((i) => (i === 0 ? maxIndex : i - 1));

    const translateX = -(current * (100 / visible));

    return (
        <section className="max-w-7xl mx-auto px-6 py-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-5 font-fam-two capitalize text-center">
            Tu empresa <span className="text-[#103778]">al día</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Explora nuestros artículos y mantente actualizado con las últimas tendencias del mundo empresarial.
        </p>

        {loading ? (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-fam-ge">Cargando artículos...</p>
                </div>
            </div>
        ) : articles.length === 0 ? (
            <div className="text-center text-gray-500 py-10 font-fam-ge">No hay artículos disponibles.</div>
        ) : (
            <div className="relative overflow-hidden">
            {/* Botón izquierdo */}
            <button
                aria-label="Artículo anterior"
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#103778] border border-[#103778] hover:bg-[#103778] hover:text-white transition-colors rounded-full p-3 shadow-lg"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Carrusel */}
            <div className="flex transition-transform duration-500 ease-in-out gap-6" style={{ transform: `translateX(${translateX}%)` }}>
                {articles.map((art) => (
                <div key={art.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 box-border">
                    <div className="h-full flex flex-col">
                    <ArticleCard articulo={art} />
                    </div>
                </div>
                ))}
            </div>

            {/* Botón derecho */}
            <button
                aria-label="Artículo siguiente"
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#103778] border border-[#103778] hover:bg-[#103778] hover:text-white transition-colors rounded-full p-3 shadow-lg"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            </div>
        )}

        {/* CTA “Ver más artículos” */}
        <div className="text-center mt-10">
            <Link
            to="/blog"
            className="inline-block rounded-full bg-[#103778] text-white px-6 py-3 font-semibold hover:bg-[#0d2f6b] transition-colors"
            >
            Ver más artículos
            </Link>
        </div>
        </section>
    );
};

export default ArticleSection;
