// ArticleCard.tsx
import { Link } from "react-router-dom";
import type { Article } from "@/types";

const ArticleCard = ({ articulo }: { articulo: Article }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={articulo.imagen}
        alt={articulo.titulo}
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{articulo.titulo}</h3>
        <p className="text-sm text-gray-500 mb-3">
          por <span className="font-medium">{articulo.autor}</span> &middot;{" "}
          {new Date(articulo.creado_en || "").toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-3 font-fam-ge">{articulo.extracto}</p>
        <Link
          to={`/blog/${articulo.id}`}
          className="inline-block text-blue-600 font-medium hover:underline transition duration-200"
        >
          Leer más →
        </Link>
      </div>
    </div>

  );
};

export default ArticleCard;
