// import { useState } from "react";
import { useEffect, useState } from "react";
// import type { Articulo } from "@/interfaces/Article";
// import BlogCard from "@/components/blog-card/Blogcard";
// import { articles } from "@/services/articles";
import axios from "@/api/axios";
import type { Article } from "@/types";
import ArticleCard from "@/components/ArticleCard";
const ArticleSection = () => {
    // const [visibleCount, setVisibleCount] = useState(3);

    // const handleShowMore = () => {
    // setVisibleCount((prev) => prev + 3); // carga 3 más
    // };
    const [articulos, setArticulos] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticulos = async () => {
        const res = await axios.get("/articulos");
        setArticulos(res.data);
        };
        fetchArticulos();
    }, []);
return (
    <section className="max-w-7xl mx-auto px-6 py-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-5 font-fam-two capitalize text-center">Tu empresa <span className="text-[#103778]">al día</span></h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Explora nuestros artículos informativos y mantente actualizado con las últimas tendencias, consejos y novedades del mundo empresarial.
        </p>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articulos.map((articulo) => (
            <ArticleCard key={articulo.id} articulo={articulo} />
            ))}
        </div>
    </section>
);
};

export default ArticleSection;
