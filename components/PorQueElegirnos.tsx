import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faHome, faClipboardCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function PorQueElegirnos() {
  return (
    <section id="por-que-elegirnos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
          ¿POR QUÉ ELEGIRNOS?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start" data-aos="fade-up">
            <FontAwesomeIcon icon={faDog} className="text-naranja text-3xl mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Perros de trabajo</h3>
              <p className="text-gray-700">
                Cuidamos y entrenamos a los perros de trabajo para que rindan al máximo, priorizando su bienestar.
              </p>
            </div>
          </div>
          <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
            <FontAwesomeIcon icon={faHome} className="text-naranja text-3xl mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Bienestar para perros de hogar</h3>
              <p className="text-gray-700">
                Ofrecemos servicios para asegurar la felicidad y salud de tu mascota, tratándola con cariño.
              </p>
            </div>
          </div>
          <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
            <FontAwesomeIcon icon={faClipboardCheck} className="text-naranja text-3xl mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Cumplimiento Normativo</h3>
              <p className="text-gray-700">
                Aseguramos que tu operación cumpla con las normativas, promoviendo el bienestar animal.
              </p>
            </div>
          </div>
          <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
            <FontAwesomeIcon icon={faChartLine} className="text-naranja text-3xl mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Análisis de Riesgos y Soluciones Personalizadas</h3>
              <p className="text-gray-700">
                Evaluamos riesgos y proponemos soluciones a medida que mejoran la calidad de vida y el rendimiento de tus perros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
