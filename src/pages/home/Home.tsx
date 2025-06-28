// Home.tsx
import ServiciosGrid from "./components/ServiciosGrid";
import NosotrosGrid from "./components/NosotrosGrid";
import PreguntasFre from "./components/PreguntasFre";
import ArticleSection from "./components/ArticleSection";
import MapsContact from "./components/MapsContact";
// import { Link } from "react-router-dom";

const Home = () => {
  // const [articulos, setArticulos] = useState<Article[]>([]);

  // useEffect(() => {
  //   const fetchArticulos = async () => {
  //     const res = await axios.get("/articulos");
  //     setArticulos(res.data);
  //   };
  //   fetchArticulos();
  // }, []);

  return (
    <>
      <section
        className="relative relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8 h-dvh bg-[url('/img/fondo_one.jpg')]"
      >
        {/* Capa oscura para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
        
        {/* Contenido */}
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl font-fam-ge">
            Impulsa tu empresa al siguiente nivel
          </h1>
          <p className="mt-6 text-lg font-fam-ge">
            Asesoría empresarial estratégica para ayudarte a tomar decisiones inteligentes, 
            optimizar procesos y lograr un crecimiento sostenible. Más de 10 años acompañando 
            a emprendedores y empresas en su camino al éxito.
          </p>
          <div className="mt-8">
            <a
            href="/Contacto"
            className="inline-block rounded-full bg-gradient-to-r from-[#791137] via-pink-600 to-[#791137] bg-[length:200%_auto] bg-position-0 hover:bg-[position:100%_0] px-8 py-3 text-white text-lg font-fam-ge font-semibold transition-all duration-500 ease-in-out"
          >
            Agenda tu consulta gratuita<span className="ml-2">→</span>
          </a>
          </div>
        </div>
      </section>

      <ServiciosGrid></ServiciosGrid>
      <NosotrosGrid></NosotrosGrid>
      <ArticleSection></ArticleSection>
      <PreguntasFre></PreguntasFre>
      <MapsContact></MapsContact>
    </>
  );
};

export default Home;
