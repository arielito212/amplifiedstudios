import { Briefcase, MessageSquare, TrendingUp, Target } from 'lucide-react';
import { Language, Service } from '../types';

const services: Record<Language, Service[]> = {
  en: [
    {
      title: "Account Management",
      description: "We provide unique strategies for your social networks and optimize engagement to reach more fans",
      icon: "Briefcase"
    },
    {
      title: "Chatting",
      description: "With our team of chatters, we optimize your interactions so you only have to worry about creating content",
      icon: "MessageSquare"
    },
    {
      title: "Growth Optimization",
      description: "Strategic approaches to expand your audience and increase revenue",
      icon: "TrendingUp"
    },
    {
      title: "Marketing Support",
      description: "With our various tools, we'll drive consumer traffic to generate interaction on your OnlyFans page",
      icon: "Target"
    }
  ],
  es: [
    {
      title: "Gestión de Cuentas",
      description: "Brindamos estrategias únicas para tus redes sociales y optimizamos el Engagement para alcanzar más fans",
      icon: "Briefcase"
    },
    {
      title: "Chatting",
      description: "Con nuestro equipo de Chatters, optimizamos tus interacciones y solo te tendrás que preocupar por crear contenido",
      icon: "MessageSquare"
    },
    {
      title: "Optimización de Crecimiento",
      description: "Enfoques estratégicos para expandir tu audiencia y aumentar ingresos",
      icon: "TrendingUp"
    },
    {
      title: "Soporte de Marketing",
      description: "Con nuestras distintas herramientas, enviaremos tráfico de consumidores para generar interacción en tu página de OnlyFans",
      icon: "Target"
    }
  ]
};

const icons = {
  Briefcase,
  MessageSquare,
  TrendingUp,
  Target
};

interface Props {
  language: Language;
}

export function Services({ language }: Props) {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services[language].map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <div key={service.title} className="p-6 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                <Icon className="w-10 h-10 text-rose-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}