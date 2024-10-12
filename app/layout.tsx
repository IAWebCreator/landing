import type { Metadata } from "next";
import { Montserrat, Merriweather } from 'next/font/google';
import "./globals.css";

import Footer from '../components/Footer';
import Header from '../components/Header';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '700'],
});
const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: "Caninos & Consultores",
  description: "Especialistas en bienestar animal canino y evaluación profesional de unidades caninas de élite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${merriweather.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
