import { Language } from '../../types';

const content = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: March 2024",
    sections: [
      {
        title: "Information We Collect",
        content: "We collect information that you provide directly to us, including name, email address, and social media handles when you contact us through our services."
      },
      {
        title: "How We Use Your Information",
        content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations."
      },
      {
        title: "Information Sharing",
        content: "We do not sell or share your personal information with third parties except as described in this policy or with your consent."
      },
      {
        title: "Data Security",
        content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure."
      }
    ]
  },
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última Actualización: Marzo 2024",
    sections: [
      {
        title: "Información que Recopilamos",
        content: "Recopilamos la información que nos proporciona directamente, incluido nombre, correo electrónico y perfiles de redes sociales cuando nos contacta a través de nuestros servicios."
      },
      {
        title: "Cómo Usamos su Información",
        content: "Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, comunicarnos con usted y cumplir con las obligaciones legales."
      },
      {
        title: "Compartir Información",
        content: "No vendemos ni compartimos su información personal con terceros, excepto como se describe en esta política o con su consentimiento."
      },
      {
        title: "Seguridad de Datos",
        content: "Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra acceso o divulgación no autorizados."
      }
    ]
  }
};

interface Props {
  language: Language;
  onBack: () => void;
}

export function PrivacyPolicy({ language, onBack }: Props) {
  const t = content[language];

  return (
    <div className="min-h-screen bg-white pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-6 text-rose-500 hover:text-rose-600 transition-colors"
        >
          ← {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
        </button>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-neutral-500 mb-8">{t.lastUpdated}</p>
        
        <div className="space-y-8">
          {t.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-neutral-700 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}