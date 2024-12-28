import { Trophy, Users, TrendingUp } from 'lucide-react';
import { Benefit, Language } from '../types';

const benefits: Record<Language, Benefit[]> = {
  en: [
    {
      title: "Proven Results",
      description: "Through our methods, we manage to scale your image and your income.",
      stat: "1500% Growth",
      icon: "TrendingUp"
    },
    {
      title: "Expert Team",
      description: "Work with a qualified team that understands the platform and will be available to meet your needs.",
      stat: "2+ Years General Marketing Experience",
      icon: "Trophy"
    }
  ],
  es: [
    {
      title: "Estrategias de Crecimiento Exclusivas y Verificadas",
      description: "Por medio de nuestros metodos, logramos escalar tu imagen y tus ingresos.",
      stat: "1500% Crecimiento",
      icon: "TrendingUp"
    },
    {
      title: "Equipo Cualificado",
      description: "Trabaja con un equipo que entienden de la plataforma y que estara a dispocisión para cumplir tus necesidades.",
      stat: "2+ Años de Experiencia en Marketing General",
      icon: "Trophy"
    }
  ]
};

const icons = {
  Trophy,
  Users,
  TrendingUp
};

interface Props {
  language: Language;
}

export function Benefits({ language }: Props) {
  return (
    <section className="py-24 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {language === 'en' ? 'Why Choose Us' : '¿Por Qué Elegirnos?'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits[language].map((benefit) => {
            const Icon = icons[benefit.icon as keyof typeof icons];
            return (
              <div key={benefit.title} className="p-8 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors">
                <Icon className="w-12 h-12 text-rose-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-neutral-400 mb-4">{benefit.description}</p>
                <p className="text-rose-500 font-semibold">{benefit.stat}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}