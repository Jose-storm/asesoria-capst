export default function NosotrosVideo(){
    return(
        <>
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                    {/* Video de YouTube */}
                    <div className="w-full overflow-hidden">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Zzu9fjQHtk8?si=FTr2CI3vs45G1Xr4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>

                    {/* Descripción y botón */}
                    <div className="space-y-6 text-gray-800 font-fam-ge">
                        <h2 className="text-4xl font-bold text-[#0b2142] font-fam capitalize">
                            <span className="text-[#103778]">Talleres</span> en YouTube
                        </h2>
                        <p className="text-lg leading-relaxed">
                            En nuestro canal de YouTube, compartimos talleres enfocados en gestión empresarial, marketing digital, finanzas y desarrollo profesional. Estos espacios buscan fortalecer las capacidades de emprendedores y empresarios peruanos.
                        </p>
                        <a
                            href="https://www.youtube.com/@asesoriaempresarialperu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
                        >
                            Ir al Canal de YouTube <i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}