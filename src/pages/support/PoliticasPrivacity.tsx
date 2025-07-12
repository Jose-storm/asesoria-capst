// src/pages/PrivacyPolicy.tsx
import { Link } from 'react-router-dom';

export default function PoliticasPrivacity() {
    return (
        <section className="bg-white text-gray-800 px-6 py-10 max-w-5xl mx-auto font-fam-ge">
        <h1 className="text-5xl font-bold mb-6 text-center font-fam-desk">
            Políticas de Privacidad
        </h1>

        <div className="space-y-6 text-justify text-md leading-relaxed font-fam-two">
            {/* ENCABEZADO */}
            <p className='text-lg font-bold'>
                “TU CONFIANZA, NUESTRA PRIORIDAD”
            </p>

            {/* 1. Información legal */}
            <h2 className="font-bold text-xl">
            Información conforme a la normativa de protección de datos personales
            </h2>
            <p className="text-base">
            En Perú, la Ley N.° 29733 y normas
            afines protegen tu información personal. En
            <strong className="ml-1">Asesoría Empresarial</strong> nos
            comprometemos a usar tus datos de forma segura y transparente.
            </p>

            {/* 2. Identidad del responsable */}
            <h2 className="font-bold text-xl">¿Quiénes somos?</h2>
            <ul className="text-base space-y-1">
            <li>
                <span className="font-bold">Denominación:</span> Asesoría
                Empresarial
            </li>
            <li>
                <span className="font-bold">Actividad:</span> Servicios de consultoría
                y acompañamiento empresarial
            </li>
            <li>
                <span className="font-bold">Correo electrónico:</span>{' '}
                asesoriaempresarial.info@gmail.com
            </li>
            <li>
                <span className="font-bold">Sitio web:</span>{' '}
                https://asesoria-empresarial.netlify.app/
            </li>
            <li>
                <span className="font-bold">Supervisión:</span> Ley N.° 29733 –
                Autoridad Nacional de Protección de Datos Personales
            </li>
            </ul>

            {/* 3. Finalidades */}
            <h2 className="font-bold text-xl">¿Para qué usamos tus datos?</h2>
            <p className="text-base">
            Solo solicitamos información imprescindible para:
            </p>
            <ul
            className="list-disc list-inside space-y-1 text-base"
            role="list"
            >
            <li role="listitem">
                Gestionar tu <strong>inicio de sesión</strong> como usuario
                registrado (correo electrónico y contraseña cifrada).
            </li>
            <li role="listitem">
                Responder mensajes enviados mediante nuestro{' '}
                <strong>formulario de contacto</strong>.
            </li>
            <li role="listitem">
                Enviarte información sobre nuestros servicios o eventos, cuando lo
                solicites o autorices.
            </li>
            </ul>

            {/* 4. Base legal */}
            <h2 className="font-bold text-xl">¿Por qué necesitamos tu información?</h2>
            <p className="text-base">
            Tratamos tus datos sobre la base de tu <strong>consentimiento</strong>{' '}
            y de la <strong>ejecución de un contrato</strong> (cuando contratas
            nuestros servicios). Nunca pediremos datos excesivos ni los
            utilizaremos con fines distintos a los aquí descritos.
            </p>

            {/* 5. Acceso a la información */}
            <h2 className="font-bold text-xl">¿Quién accede a tu información?</h2>
            <p className="text-base">El acceso está restringido a:</p>
            <ul
            className="list-disc list-inside space-y-1 text-base"
            role="list"
            >
            <li role="listitem">
                Personal autorizado de Asesoría Empresarial
            </li>
            <li role="listitem">
                Proveedores tecnológicos (hosting, email, autenticación) bajo
                contratos de confidencialidad.
            </li>
            <li role="listitem">
                Autoridades competentes, si una norma lo exige.
            </li>
            </ul>
            <p className="text-base">
            No vendemos ni cedemos tus datos a terceros con fines comerciales.
            </p>

            {/* 6. Seguridad */}
            <h2 className="font-bold text-xl">¿Cómo protegemos tu información?</h2>
            <p className="text-base">Aplicamos medidas como:</p>
            <ul
            className="list-disc list-inside space-y-1 text-base"
            role="list"
            >
            <li role="listitem">Cifrado (HTTPS, contraseñas con hash bcrypt).</li>
            <li role="listitem">
                Firewalls y monitoreo periódico de seguridad.
            </li>
            <li role="listitem">Accesos con roles y permisos.</li>
            <li role="listitem">Backups y planes de contingencia.</li>
            </ul>

            {/* 7. Transferencias internacionales */}
            <h2 className="font-bold text-xl">
            ¿Se enviarán tus datos al extranjero?
            </h2>
            <p className="text-base">
            Podríamos usar servicios en la nube (p. ej. AWS, GCP) alojados fuera
            de {`{país}`}. Nos aseguramos de que cumplan estándares internacionales
            de privacidad (p. ej. RGPD, SCC) antes de transferir datos.
            </p>

            {/* 8. Conservación */}
            <h2 className="font-bold text-xl">
            ¿Por cuánto tiempo conservamos tus datos?
            </h2>
            <p className="text-base">
            - Datos de cuenta: mientras mantengas tu usuario activo.<br />
            - Mensajes de contacto: hasta 1 año después de responder tu consulta o
            durante el plazo legal necesario.<br />
            Al expirar dichos plazos, los eliminamos o anonimizaramos.
            </p>

            {/* 9. Derechos del titular */}
            <h2 className="font-bold text-xl">¿Cuáles son tus derechos?</h2>
            <p className="text-base">Puedes:</p>
            <ul
            className="list-disc list-inside space-y-1 text-base"
            role="list"
            >
            <li role="listitem">Acceder a tus datos.</li>
            <li role="listitem">Solicitar rectificación o supresión.</li>
            <li role="listitem">Oponerte o limitar el tratamiento.</li>
            <li role="listitem">Solicitar portabilidad.</li>
            </ul>
            <p className="text-base">
            Escríbenos a <strong>asesoriaempresarial.info@gmail.com</strong> con tu nombre y número de
            documento para ejercerlos.
            </p>

            {/* 10. Revocación del consentimiento */}
            <h2 className="font-bold text-xl">¿Puedes retirar tu consentimiento?</h2>
            <p className="text-base">
            Sí, en cualquier momento. No afectará la licitud del tratamiento
            basado en el consentimiento previo.
            </p>

            {/* 11. Reclamos */}
            <h2 className="font-bold text-xl">¿Dónde presentar un reclamo?</h2>
            <p className="text-base">
            Puedes acudir a la Autoridad Nacional de Protección de Datos
            Personales o contactarnos directamente.
            </p>

            {/* 12. Decisiones automatizadas */}
            <h2 className="font-bold text-xl">¿Elaboramos perfiles?</h2>
            <p className="text-base">
            No realizamos perfiles automatizados ni decisiones basadas
            exclusivamente en tratamiento automático.
            </p>

            {/* 13. Cambios en la política */}
            <h2 className="font-bold text-xl">
            ¿Cambios en esta Política de Privacidad?
            </h2>
            <p className="text-base">
            Publicaremos cualquier actualización aquí. Si los cambios son
            relevantes, te los notificaremos vía email o al iniciar sesión.
            </p>

            {/* AGRADECIMIENTO */}
            <h3 className="text-xl font-semibold text-indigo-700">
            ¡Gracias por confiar en nosotros!
            </h3>
            <p className="text-base">
            En Asesoría Empresarial Perú protegemos tu información para que te
            enfoques en hacer crecer tu negocio.
            </p>
        </div>

        {/* BOTÓN DE REGRESO (opcional) */}
        <div className="mt-10 text-center">
            <Link
            to="/"
            className="rounded-full bg-indigo-600 px-8 py-3 font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            >
            Volver al inicio
            </Link>
        </div>
        </section>
    );
}
