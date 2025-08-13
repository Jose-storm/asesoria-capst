import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <section className="flex h-screen flex-col items-center justify-center gap-6 bg-gray-50 px-4">
            <h1 className="text-7xl font-extrabold text-gradient bg-gradient-to-r from-rose-600 to-indigo-600 bg-clip-text text-transparent">
                404
            </h1>

            <p className="text-2xl font-semibold text-gray-800">
                Página no encontrada
            </p>

            <p className="max-w-md text-center text-gray-500">
                La URL que intentas abrir no existe o fue movida.
            </p>

            <Link
                to="/"
                className="rounded-full bg-indigo-600 px-8 py-3 font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            >
                Volver al inicio
            </Link>
        </section>
    );
}
