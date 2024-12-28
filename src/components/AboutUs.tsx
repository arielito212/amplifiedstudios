import { Language } from '../types';
import { DecorativeImages } from './common/DecorativeImages';

const content = {
  en: {
    title: "About Us",
    description: "Amplified Studios is a leading OnlyFans management agency for creators looking to take their platform career to the next level"
  },
  es: {
    title: "Sobre Nosotros",
    description: "Amplified Studios es una Agencia líder en la gestión de OnlyFans para creadores que quieran llevar su carrera en la plataforma a otro nivel"
  }
};

interface Props {
  language: Language;
}

export function AboutUs({ language }: Props) {
  const t = content[language];
  
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Images */}
      <DecorativeImages className="z-0" />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-white/75 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900">
          {t.title}
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed text-neutral-700">
          {t.description}
        </p>
      </div>
    </section>
  );
}