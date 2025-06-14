import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "@/api/axios";
import type { Article } from "@/types";

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [otrosArticulos, setOtrosArticulos] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/articulos/${id}`);
        setArticle(res.data);

        const resAll = await axios.get("/articulos");
        const relacionados = resAll.data.filter((a: Article) => a.id !== Number(id)).slice(0, 4);
        setOtrosArticulos(relacionados);
      } catch (error) {
        console.error("Error al cargar los artículos", error);
      }
    };
    fetchData();
  }, [id]);

  if (!article) return <p className="text-center py-10">Cargando artículo...</p>;

  return (
    <>
      {/* Imagen de Publicidad Superior */}
      <section className="max-w-7xl mx-auto w-full bg-gradient-to-r from-white to-gray-50 shadow-md rounded-lg">
        <div className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration w-full">
          <img
            src="/src/assets/img/publi_one.jpg"
            alt="Publicidad"
            className="w-full h-42 object-cover bg-center duration-300"
          />
        </div>
      </section>

      {/* Contenido principal y aside */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 font-fam-ge">
          {/* Contenido del artículo */}
          {/* shadow-md */}
          <article className="col-span-2 bg-white p-6 rounded">
            <img
              src={article.imagen}
              alt={article.titulo}
              className="w-full h-64 object-cover mb-6 rounded"
            />
            <h1 className="text-4xl font-bold mb-2 text-gray-800">{article.titulo}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 mt-6">
              <p><span className="font-medium text-gray-700">{article.autor}</span></p>
              <span className="text-gray-400">|</span>
              <p>Fecha de publicación: {new Date(article.creado_en || "").toLocaleDateString()}</p>
            </div>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
              {article.contenido}
            </div>
          </article>

          {/* Aside: otros artículos + redes + sección CTA */}
          <aside className="space-y-10">
            {/* Otros artículos */}
            {/* <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Otros artículos</h2>
              <ul className="space-y-4">
                {otrosArticulos.map((a) => (
                  <li key={a.id}>
                    <Link
                      to={`/blog/${a.id}`}
                      className="text-blue-700 hover:underline block"
                    >
                      <p className="font-semibold">{a.titulo}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(a.creado_en || "").toLocaleDateString()}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
            {/* Otros artículos */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Otros artículos</h2>
              <ul className="space-y-4">
                {otrosArticulos.map((a) => (
                  <li key={a.id} className="flex items-start gap-4">
                    <img
                      src={a.imagen}
                      alt={a.titulo}
                      className="w-20 h-16 object-cover"
                    />
                    <div>
                      <Link
                        to={`/blog/${a.id}`}
                        className="text-blue-700 hover:underline block"
                      >
                        <p className="font-semibold">{a.titulo}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(a.creado_en || "").toLocaleDateString()}
                        </p>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes sociales */}
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="bold mb-2 text-base">Visítanos en nuestras redes sociales</h2>
              <ul>
                <li className="inline-block mr-2">
                  <a className="hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-square-instagram"></i></a>
                </li>
                <li className="inline-block mr-2">
                  <a href="https://www.tiktok.com/@asesoriaempresarial?is_from_webapp=1&sender_device=pc" className="hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-tiktok"></i></a>
                </li>
                <li className="inline-block mr-2">
                  <a className="hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-x-twitter"></i></a>
                </li>
                <li className="inline-block mr-2">
                  <a href="https://www.facebook.com/ConsultorioEmpresarialPeru" className="hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-5 py-3 inline-block rounded-full"><i className="fa-brands fa-facebook-f"></i></a>
                </li>
                <li className="inline-block mr-2 mt-2">
                  <a href="https://youtube.com/@asesoriaempresarialperu?si=frIb5vys2VU6EQp9" className="hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-youtube"></i></a>
                </li>
                <li className="inline-block mr-2 mt-2">
                        <a href="https://www.linkedin.com/company/asesor%C3%ADa-empresarial-per%C3%BA/" className="text-base hover:text-[#103778] border-blue-400 hover:bg-blue-400 transition delay-50 duration-300 border-1 px-4 py-3 inline-block rounded-full"><i className="fa-brands fa-linkedin"></i></a>
                </li>
              </ul>
            </div>

            {/* Call to action */}
            <div className="sticky top-17 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2">¡Contáctanos para una asesoría gratuita!</h3>
              <p className="mb-4 text-base">Estamos listos para ayudarte a potenciar tu negocio. Agenda una consulta hoy mismo.</p>
              <img
                src="/src/assets/img/llamativo_ae.png"
                alt="Asesoría"
                className="mx-auto mb-4 h-40 w-70"
              />
              <a
                href="/contacto"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Deseo una Asesoría Virtual
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
