// import React from "react";
// /* Obejto curso */
// type Curso = {
//     id: string,
//     nombre: string,
//     imagen: string,
//     descripcion: string,
//     contenido: string
// }
/* Array de cursos */
// const curso: Curso[] = [
//     {
//         id: "empresa",
//         nombre: "Asesoría Laboral",
//         imagen: "",
//         descripcion: "🧑‍💻",
//         contenido: ""
//     },
//     {
//         id: "empresa",
//         nombre: "Asesoría Laboral",
//         imagen: "",
//         descripcion: "🧑‍💻",
//         contenido: ""
import React from "react";
import { Link } from "react-router-dom";
import type { Curso } from "@/types/curso";

type Props = {
    curso: Curso;
};

const CursoCard: React.FC<Props> = ({ curso }) => {
    return (
        <Link to={`/cursos/${curso.id}`}>
            <div className="shadow hover:shadow-lg transition-all bg-white">
                <img
                src={curso.imagen}
                alt={curso.nombre}
                className="w-full h-50 object-cover mb-4"
                />
                <div className="py-2 px-4">
                    <h2 className="text-xl font-semibold">{curso.nombre}</h2>
                    <p className="text-gray-600">{curso.descripcion}</p>
                </div>
            </div>
        </Link>
    );
};

export default CursoCard;
