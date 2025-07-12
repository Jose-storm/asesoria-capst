import { useEffect, useState } from "react";
import axios from "@/api/axios";
import type { Article } from "@/types";
import ArticleCard from "@/components/ArticleCard";
import ImgBlog from "@/assets/img/espacio_blog.jpg"
const BlogGe = () => {
    const [articulos, setArticulos] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticulos = async () => {
        const res = await axios.get("/articulos");
        setArticulos(res.data);
        };
        fetchArticulos();
    }, []);

    return (
        <>
        {/* Portada superior */}
        <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
            <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
            <img
                src={ImgBlog}
                alt="Publicidad"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
                <p className="text-base">Blog</p>
                <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
                    Infórmate
                </h1>
                </div>
            </div>
            </div>
        </section>

        {/* Sección de artículos en formato grid */}
        <section className="max-w-7xl mx-auto px-6 py-16" data-aos="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((articulo) => (
                <ArticleCard key={articulo.id} articulo={articulo} />
            ))}
            </div>
        </section>
        </>
    );
};

export default BlogGe;
