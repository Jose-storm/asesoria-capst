import { useEffect, useRef } from "react";
import type { Contacto } from "@/types";

interface Props {
    mensaje: Contacto;
    onClose: () => void;
}

const ContactoVer = ({ mensaje, onClose }: Props) => {
    const backdropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const escListener = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", escListener);
        return () => window.removeEventListener("keydown", escListener);
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === backdropRef.current) onClose();
    };

    return (
        <div
        ref={backdropRef}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
        <div
            className="relative w-11/12 max-w-lg rounded-xl bg-white shadow-2xl
                    p-6 transition-all duration-300 ease-out
                    animate-scaleIn"
        >
            <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl leading-none"
            aria-label="Cerrar"
            >
            &times;
            </button>

            <h3 className="text-2xl font-bold mb-5">Detalle del Mensaje</h3>

            <div className="max-h-[60vh] overflow-y-auto pr-2">
            <dl className="space-y-3 text-sm">
                <div>
                    <dt className="font-semibold text-gray-700">Nombre:</dt>
                    <dd className="text-gray-800">{mensaje.nombre}</dd>
                </div>
                <div>
                    <dt className="font-semibold text-gray-700">Email:</dt>
                    <dd className="text-gray-800 break-all">{mensaje.email}</dd>
                </div>
                <div>
                    <dt className="font-semibold text-gray-700">Teléfono:</dt>
                    <dd className="text-gray-800">
                    {mensaje.telefono || "No proporcionado"}
                </dd>
                </div>
                <div>
                    <dt className="font-semibold text-gray-700">Mensaje:</dt>
                    <dd className="text-gray-800 whitespace-pre-line">
                    {mensaje.mensaje}
                </dd>
                </div>
                <div>
                    <dt className="font-semibold text-gray-700">Fecha enviado:</dt>
                    <dd className="text-gray-800">{mensaje.enviado_en}</dd>
                </div>
            </dl>
            </div>

            <div className="mt-6 text-right">
            <button
                onClick={onClose}
                className="rounded bg-blue-600 px-5 py-2 font-semibold text-white
                        hover:bg-blue-700 active:scale-95 transition"
            >
                Cerrar
            </button>
            </div>
        </div>
        </div>
    );
};

export default ContactoVer;
