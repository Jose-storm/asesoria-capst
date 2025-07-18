import { Link } from "react-router-dom";
import type { Taller } from "../../types";

interface Props {
    curso: Taller;
}

const CursoCard = ({ curso }: Props) => {
    return (
        <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
            src={curso.imagen}
            alt={curso.nombre}
            className="w-full h-52 object-cover"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        />
        <div className="p-4 space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{curso.nombre}</h3>
            <p className="text-sm text-gray-600">{curso.extracto}</p>
            <Link
            to={`/cursos/${curso.id}`}
            className="inline-block mt-2 text-blue-600 hover:underline font-medium"
            >
            Ver más →
            </Link>
        </div>
        </div>
    );
};

export default CursoCard;

