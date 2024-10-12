import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo.jpeg"
              alt="Caninos & Consultores"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-serif font-bold mb-2">Caninos & Consultores</h3>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Elevando los estándares de la seguridad canina con excelencia y profesionalismo.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-naranja" />
                <a href="mailto:info@k9-consultores.com" className="hover:text-naranja transition">
                  info@k9-consultores.com
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-naranja" />
                <a href="https://wa.me/573152740577" className="hover:text-naranja transition">
                  +57 315 2740577
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-naranja" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/caninosyconsultores?igsh=OHRpa3g3NHNkaDds" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-naranja transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Mantente al día con nuestras últimas noticias y actualizaciones.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Caninos & Consultores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
