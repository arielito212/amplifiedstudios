import { Globe2, ChevronUp, ChevronDown } from 'lucide-react';
import { Language } from '../../types';

interface Props {
  language: Language;
  isOpen: boolean;
  onClick: () => void;
}

export function LanguageButton({ language, isOpen, onClick }: Props) {
  const label = language === 'en' ? 'English' : 'Español';
  const Icon = isOpen ? ChevronUp : ChevronDown;

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-colors"
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <Globe2 className="w-4 h-4 text-neutral-600" />
      <span className="font-medium text-neutral-800">{label}</span>
      <Icon className="w-4 h-4 text-neutral-400" />
    </button>
  );
}