import MantenimientoImg from "@/assets/img/mantenimiento_two.png";

export default function Mantenimiento() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 text-center px-4">
        <div className="max-w-md flex flex-col items-center">
            <img
            src={MantenimientoImg}
            alt="Mantenimiento"
            className="w-120 h-120 object-contain"
            />
                <h1 className="text-4xl font-bold text-gray-800 mb-4 font-fam-ge">
                    Estamos en <span className="text-[#103778]">mantenimiento 🤗</span>
                </h1>
                <p className="text-lg text-gray-600 font-fam">
                    Estamos actualizando el sitio. Vuelve pronto.
                </p>
        </div>
        </div>
    );
}
