import { Language } from '../../types';
import { LanguageOption } from './LanguageOption';

interface Props {
  isOpen: boolean;
  currentLanguage: Language;
  onSelect: (language: Language) => void;
}

export function LanguageMenu({ isOpen, currentLanguage, onSelect }: Props) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute bottom-full right-0 mb-2 p-1 bg-white rounded-lg shadow-lg"
      role="menu"
    >
      <LanguageOption
        language="en"
        label="English"
        isSelected={currentLanguage === 'en'}
        onClick={() => onSelect('en')}
      />
      <LanguageOption
        language="es"
        label="Español"
        isSelected={currentLanguage === 'es'}
        onClick={() => onSelect('es')}
      />
    </div>
  );
}