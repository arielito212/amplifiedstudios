import { Instagram } from 'lucide-react';
import { Language } from '../types';

const content = {
  en: {
    title: "How to Get Started",
    note: "Currently, we only handle interactions through DMs on these 2 profiles",
    steps: [
      "Visit the agency's or Operations Director's Instagram profile",
      "Send us a DM with your name and expressing your interest",
      "You'll receive personalized attention from our team where we'll address your questions and can schedule a meeting to discuss your profile and how we can help you!"
    ],
    profiles: [
      { name: "@amplified.studios", url: "https://instagram.com/amplified.studios" },
      { name: "@mauricioofm", url: "https://instagram.com/mauricioofm" }
    ]
  },
  es: {
    title: "Cómo Comenzar",
    note: "Actualmente, solo hacemos estas interacciones por medio de DM's ÚNICAMENTE en estos 2 perfiles",
    steps: [
      "Entra al perfíl de la agencia o al del Director de Operaciones por medio de Instagram",
      "Escribenos un DM con tu nombre y mostrando tu interes",
      "Recibiras Atención personalizada por parte de nuestro Equipo en donde resolveremos tus dudas y podremos planear una reunión para discutir tu Perfíl y como podemos ayudarte!"
    ],
    profiles: [
      { name: "@amplified.studios", url: "https://instagram.com/amplified.studios" },
      { name: "@mauricioofm", url: "https://instagram.com/mauricioofm" }
    ]
  }
};

interface Props {
  language: Language;
}

export function ContactSteps({ language }: Props) {
  const t = content[language];

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-center">{t.title}</h3>
      <div className="space-y-6">
        {t.steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-semibold">
              {index + 1}
            </div>
            <p className="text-lg text-neutral-700">{step}</p>
          </div>
        ))}
        
        <div className="pt-6">
          <p className="text-neutral-500 italic mb-4">{t.note}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {t.profiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5 text-neutral-700" />
                <span className="font-medium">{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}