import Image from 'next/image';

export default function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
            <Image
              src="/images/k9-team.jpeg"
              alt="Nuestro Equipo"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
            <h3 className="text-3xl font-serif font-bold mb-6">Equipo Caninos & Consultores</h3>
            <p className="text-lg font-sans font-light mb-6">
              Como líderes en consultoría y evaluación de perros de trabajo para el sector de seguridad,
              combinamos nuestra vasta experiencia con un enfoque innovador. Nuestras soluciones personalizadas
              permiten a nuestros clientes maximizar la eficiencia y el bienestar de sus equipos caninos,
              elevando así los estándares de la industria.
            </p>
            <p className="text-lg font-sans font-light">
              Confía en Caninos & Consultores para potenciar el potencial de tus equipos caninos y
              garantizar su desempeño óptimo en cada misión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
