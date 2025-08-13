import ImgaN from "@/assets/img/Note.jpg"

export default function NosotrosDescription(){
    return(
        <>
            <section className="bg-white pt-10 pb-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="w-full h-full">
                    <img
                        src={ImgaN}
                        alt="Nosotros"
                        className="w-full h-full"
                    />
                    </div>

                    {/* Descripción */}
                    <div className="text-gray-800 font-fam-ge">
                        <h2 className="text-4xl font-bold font-fam mb-4">
                            Reforzando en <span className="text-[#103778]">áreas claves</span> de una empresa - Asesoría Empresarial
                        </h2>
                        <p className="text-base mb-7 text-gray-700 font-fam">Principalmente alineados hacia un objetivo</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-8">
                                {/* Misión */}
                                <div className="bg-white">
                                    <h3 className="text-2xl font-semibold text-red-600 mb-2">Misión</h3>
                                    <p className="text-lg leading-relaxed">
                                        Impulsar el crecimiento y éxito de las empresas a través de una asesoría empresarial integral, innovadora y personalizada, que maximice su rentabilidad y sostenibilidad, contribuyendo al desarrollo económico de la comunidad.
                                    </p>
                                </div>

                                {/* Visión */}
                                <div className="bg-white">
                                    <h3 className="text-2xl font-semibold text-red-600 mb-2">Visión</h3>
                                    <p className="text-lg leading-relaxed">
                                        Ser reconocidos como la firma líder en asesoría empresarial, por nuestra excelencia en el servicio, la innovación en nuestras soluciones y el impacto positivo que generamos en el desarrollo y crecimiento de nuestros clientes.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-red-600 mb-2">Propósito</h3>
                                <p className="text-lg leading-relaxed">
                                    Ser reconocidos como la firma líder en asesoría empresarial, por nuestra excelencia en el servicio, la innovación en nuestras soluciones y el impacto positivo que generamos en el desarrollo y crecimiento de nuestros clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}