import ContactForm from "@/components/contacto/ContactForm";
import ImgCo from "@/assets/img/contact.jpg"

const mensaje_w = encodeURIComponent("Hola, Deseo adquirir información");
const numero_contacto = "51993568867";

const Contacto = () => {
    return(
        <>
            <section className="w-full bg-gradient-to-r from-white to-gray-50 shadow-md">
                <div className="relative w-full h-80 sm:h-96 lg:h-[21rem] overflow-hidden">
                    <img
                    src={ImgCo}
                    alt="Publicidad"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Overlay oscuro para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

                    {/* Contenido centrado */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center px-4 sm:px-8 max-w-3xl text-white">
                        <p className="text-base">Asesoría Empresarial</p>
                        <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-fam-ge">
                        Contáctenos
                        </h1>
                    </div>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-0 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Texto descriptivo */}
                    <div className="flex flex-col font-fam-desk">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-fam-ge">
                            Contáctanos <br />fácilmente
                        </h2>
                        <p className="text-base mb-6 font-fam">
                            Ya sea que estés interesado en adoptar, ser voluntario, donar o simplemente conocer más
                            sobre nuestro trabajo, no dudes en escribirnos.
                        </p>

                        <ul className="space-y-4 text-gray-800 text-md font-fam">
                            {/* Teléfono */}
                            <li className="flex items-start gap-3">
                                <div>
                                <a
                                    href={`https://wa.me/${numero_contacto}?text=${mensaje_w}`}
                                    className="block hover:text-blue-500 transition-colors mb-2"
                                >
                                    <i className="fa-solid fa-phone text-blue-400 text-lg mr-2"></i>
                                    +51 993 568 867
                                </a>
                                <p className="text-gray-600 text-base">
                                    Lunes a Viernes 8:00am - 20:00pm<br />
                                    Sábados y domingos 8:00am - 17:00pm
                                </p>
                                </div>
                            </li>

                            {/* Correo */}
                            <li className="flex items-start gap-3">
                                <div>
                                <a
                                    href="mailto:asesoriaempresarial.info@gmail.com"
                                    className="block hover:text-blue-500 transition-colors break-all"
                                >
                                    <i className="fa-solid fa-envelope text-blue-400 text-lg mr-2"></i>
                                    asesoriaempresarial.info@gmail.com
                                </a>
                                </div>
                            </li>
                        </ul>
                        <p className="mt-6 text-gray-600 text-lg font-fam">
                            Nuestro equipo está listo para brindarte toda la información que necesites. 
                            ¡Gracias por apoyar una causa que da esperanza!
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