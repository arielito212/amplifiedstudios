import { Globe2 } from 'lucide-react';
import { Language } from '../types';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageToggle({ language, setLanguage }: Props) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <Globe2 className="w-4 h-4" />
        <span className="text-sm font-medium">{language === 'en' ? 'ES' : 'EN'}</span>
      </button>
    </div>
  );
}