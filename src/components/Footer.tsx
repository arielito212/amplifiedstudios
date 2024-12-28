import { Instagram } from 'lucide-react';
import { Language } from '../types';

// Custom TikTok icon component since Lucide doesn't have one
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const content = {
  en: {
    privacy: "Privacy Policy",
    rights: "All rights reserved"
  },
  es: {
    privacy: "Política de Privacidad",
    rights: "Todos los derechos reservados"
  }
};

interface Props {
  language: Language;
  onPrivacyClick: () => void;
}

export function Footer({ language, onPrivacyClick }: Props) {
  const t = content[language];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Amplified Studios</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/amplified.studios" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-rose-500 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://tiktok.com/@amplified.studios" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-rose-500 transition-colors"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="hover:text-rose-500 transition-colors"
                >
                  {t.privacy}
                </button>
              </li>
            </ul>
          </div>
          <div className="text-neutral-400">
            © {year} Amplified Studios. {t.rights}.
          </div>
        </div>
      </div>
    </footer>
  );
}