export type Curso = {
    id: string;
    nombre: string;
    imagen: string;
    descripcion: string;
    contenido: string;
};

export const cursos: Curso[] = [
    {
        id: "laboral",
        nombre: "Comercio Internacional",
        imagen: "/src/assets/img/curso_one.jpg",
        descripcion: "🧑‍💻 Aprende sobre derechos laborales y normativas.",
        contenido: "Contenido detallado del curso de asesoría laboral..."
    },
    {
        id: "tributaria",
        nombre: "Impulsa tu Negocio digital",
        imagen: "/src/assets/img/curso_two.jpg",
        descripcion: "💼 Aprende sobre impuestos y obligaciones tributarias.",
        contenido: "Contenido detallado del curso de asesoría tributaria..."
    }
];
