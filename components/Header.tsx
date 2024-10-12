'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['inicio', 'servicios', 'sobre-nosotros', 'por-que-elegirnos', 'contacto'];
      let current = '';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = sectionId;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="#inicio" onClick={() => scrollToSection('inicio')} className="flex items-center">
            <Image
              src="/images/logo.jpeg"
              alt="Caninos & Consultores"
              width={50}
              height={50}
              priority
              className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
            />
            <span className={`ml-3 font-serif font-bold transition-all duration-300 ${isScrolled ? 'text-xl text-gray-800' : 'text-2xl text-white'}`}>
              Caninos & Consultores
            </span>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className={`text-2xl ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex space-x-1 md:space-x-4 font-sans ${isMobileMenuOpen ? 'block absolute top-16 left-0 w-full bg-white shadow-md md:static md:bg-transparent md:shadow-none' : 'hidden md:flex'}`}>
          {['inicio', 'servicios', 'sobre-nosotros', 'por-que-elegirnos', 'contacto'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`block px-4 py-2 md:px-3 md:py-0 rounded-full transition-all duration-300 ${
                  activeSection === item
                    ? 'bg-naranja text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                } text-center`}
              >
                {item === 'por-que-elegirnos' ? 'Por Qué Elegirnos' : item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}