/* Reutilización de Cards desde componentes generales para su reutilización
    Introducción, Img, cursos, precio
*/
import CursoCard from "@/components/curso-card/CursoCard";
import { cursos } from "@/types/curso";

const Cursos = () => {
    return (
        /* Sección 1 */
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src="/src/assets/img/taller.jpg"
                    alt="Publicidad"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Overlay oscuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

                    {/* Contenido centrado */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
                        Talleres especializados
                        </h1>
                        <p className="mt-6 text-base sm:text-lg font-fam-ge">
                        Asesoría empresarial estratégica para ayudarte a tomar decisiones inteligentes,
                        optimizar procesos y lograr un crecimiento sostenible. Más de 10 años acompañando
                        a emprendedores y empresas en su camino al éxito.
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursos.map((curso) => (
                <CursoCard key={curso.id} curso={curso} />
            ))}
            </div>
        </>
    );
};

export default Cursos;


