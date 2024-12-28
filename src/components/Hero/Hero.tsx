import { ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { Background } from './background/Background';
import { scrollToSection } from '../../utils/scroll';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Background />
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white">
          {t.headline}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 mb-12 max-w-2xl mx-auto">
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