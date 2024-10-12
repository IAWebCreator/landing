'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const phrases = [
  "Excelencia en seguridad canina",
  "Bienestar animal garantizado",
  "Formación de élite para perros",
  "Soluciones K9 personalizadas"
];

const backgroundImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/hero4.jpg',
  '/images/hero5.jpg',
];

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Hero Image ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
          Caninos & Consultores
        </h1>
        <p className="text-xl md:text-2xl font-sans font-light mb-8 h-12">
          {phrases[currentPhrase]}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="#contacto"
            className="bg-naranja text-white py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 transform hover:scale-105 font-sans font-medium"
          >
            Contáctanos
          </a>
          <a
            href="#servicios"
            className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-naranja transition duration-300 transform hover:scale-105 font-sans font-medium"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#servicios" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
