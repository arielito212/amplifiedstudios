import { Language } from '../types';
import { ContactSteps } from './ContactSteps';

const content = {
  en: {
    title: "Contact Us"
  },
  es: {
    title: "Contáctanos"
  }
};

interface Props {
  language: Language;
}

export function ContactForm({ language }: Props) {
  const t = content[language];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.title}</h2>
        <ContactSteps language={language} />
      </div>
    </section>
  );
}