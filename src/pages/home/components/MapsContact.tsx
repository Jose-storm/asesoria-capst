import ContactForm from "@/components/contacto/ContactForm";

export default function MapsContact(){
    return(
        <>
            <section className="max-w-7xl mx-auto px-0 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Formulario de contacto */}
                    <div>
                        <ContactForm />
                    </div>
                    {/* Mapa de Google */}
                    <div className="w-full h-full mt-10">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7655.10323126247!2d-71.5323906!3d-16.396788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a5132cddd13%3A0x30ff727da5941dc6!2sC.%20San%20Jos%C3%A9%20209%2C%20Arequipa%2004001!5e0!3m2!1ses-419!2spe!4v1754084387620!5m2!1ses-419!2spe" width="100%" height="550" loading="lazy"></iframe>
                    </div>

                </div>
            </section>
        </>
    )
}