import ContactForm from "@/components/ContactForm";
const Contacto = () => {
    return(
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src="/src/assets/img/Contact.jpg"
                    alt="Publicidad"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Overlay oscuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

                    {/* Contenido centrado */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
                        Contacto
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
            <section className="max-w-6xl mx-auto px-0 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Texto descriptivo */}
                    <div className="font-fam-ge">
                    <h2 className="text-4xl font-bold mb-6 text-blue-700">Hablemos</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        ¿Tienes preguntas o deseas una asesoría personalizada? Llena el formulario y uno de nuestros especialistas se pondrá en contacto contigo lo antes posible.
                    </p>
                    <p className="text-gray-600">
                        Estamos comprometidos en brindarte una atención profesional y rápida. Ya sea que necesites orientación empresarial, resolver dudas o simplemente quieras conocernos más, estamos aquí para ti.
                    </p>
                    </div>

                    {/* Formulario de contacto */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacto