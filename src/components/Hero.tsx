import { ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { scrollToSection } from '../utils/scroll';

const content = {
  en: {
    headline: "Elevate Your Modeling Journey",
    subheading: "Professional management solutions for ambitious OnlyFans creators",
    cta: "Start Growing Today"
  },
  es: {
    headline: "Eleva tu Carrera como Modelo",
    subheading: "Soluciones profesionales de gestión para creadores ambiciosos de OnlyFans",
    cta: "Comienza a Crecer Hoy"
  }
};

interface Props {
  language: Language;
}

export function Hero({ language }: Props) {
  const t = content[language];
  
  const handleCTAClick = () => {
    scrollToSection('contact');
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] pt-16 bg-gradient-to-br from-black to-neutral-900 text-white px-4 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t.headline}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-2xl mx-auto">
          {t.subheading}
        </p>
        <button 
          onClick={handleCTAClick}
          className="group bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center gap-2 mx-auto"
        >
          {t.cta}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}