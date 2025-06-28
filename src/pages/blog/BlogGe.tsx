const BlogGe = () =>{
    return(
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src="/src/assets/img/espacio_blog.jpg"
                    alt="Publicidad"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Overlay oscuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

                    {/* Contenido centrado */}
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
        </>
    )
}

export default BlogGe;