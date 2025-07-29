import ContactForm from "@/components/contacto/ContactForm";

//Por ahora aún
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
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3827.487955463073!2d-71.5302135!3d-16.4000262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a5424e10007%3A0xbd9a0494f35c5f9e!2sASESORIA%20EMPRESARIAL%E2%80%8B!5e0!3m2!1ses-419!2spe!4v1749076451093!5m2!1ses-419!2spe"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        /> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.78892095744771!2d-77.00377911664087!3d-12.137945115658123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8048e6c041b%3A0x6dd1cecd1284adcb!2sAv.%20Los%20Vicus%20560%2C%20Lima%2015048!5e0!3m2!1ses-419!2spe!4v1753810590179!5m2!1ses-419!2spe" width="100%" height="550" loading="lazy"></iframe>
                    </div>

                </div>
            </section>
        </>
    )
}