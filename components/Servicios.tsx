'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faUsers, faDog, faBrain, faHome } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const servicios = [
  {
    icon: faPaw,
    title: "Bienestar Animal",
    description: "Optimizamos las condiciones físicas y emocionales de los perros, brindando asesoría en la implementación de programas de enriquecimiento ambiental. Garantizamos su bienestar integral y felicidad.",
  },
  {
    icon: faUsers,
    title: "Gestión Canina",
    description: "Asesoramos en la administración y organización de unidades caninas, cumpliendo con las normativas vigentes para garantizar la máxima eficiencia y bienestar.",
  },
  {
    icon: faDog,
    title: "Adiestramiento",
    description: "Evaluamos el estado real y perfeccionamos técnicas de adiestramiento en seguridad canina, potenciando las habilidades de los perros en tareas operativas y de vigilancia.",
  },
  {
    icon: faBrain,
    title: "Capacitación",
    description: "Ofrecemos herramientas teórico-prácticas diseñadas para fortalecer el vínculo entre el perro y su manejador, mejorando tanto la comunicación como la eficiencia en el trabajo colaborativo.",
  },
  {
    icon: faHome,
    title: "Bienestar Integral para Perros de Hogar",
    description: "Nos dedicamos a asegurar que tu perro disfrute de una vida plena y feliz. Ofrecemos servicios personalizados que abarcan desde su bienestar físico y emocional hasta el adiestramiento necesario para una convivencia armoniosa.",
  },
];

export default function Servicios() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`text-center mb-6 transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                <FontAwesomeIcon 
                  icon={servicio.icon} 
                  className={`text-5xl ${hoveredIndex === index ? 'text-naranja' : 'text-gray-600'}`} 
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 text-center">{servicio.title}</h3>
              <p className="text-gray-600 text-center">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 italic max-w-2xl mx-auto px-4 py-2 border-t border-b border-gray-200">
            Atendemos necesidades de empresas de seguridad y hogares, priorizando el bienestar y la responsabilidad canina.
          </p>
        </div>
      </div>
    </section>
  );
}
