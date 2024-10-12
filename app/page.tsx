'use client';

import HeroSection from '../components/HeroSection';
import Servicios from '../components/Servicios';
import SobreNosotros from '../components/SobreNosotros';
import PorQueElegirnos from '../components/PorQueElegirnos';
import Contacto from '../components/Contacto';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <HeroSection />
      <Servicios />
      <SobreNosotros />
      <PorQueElegirnos />
      <Contacto />
    </main>
  );
}
