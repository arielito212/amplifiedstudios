import { useState } from 'react';
import { Language } from '../../types';
import { LanguageButton } from './LanguageButton';
import { LanguageMenu } from './LanguageMenu';
import { useClickOutside } from '../../hooks/useClickOutside';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageSelector({ language, setLanguage }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div 
      ref={ref}
      className="fixed bottom-5 right-5 z-50"
      role="region"
      aria-label="Language selection"
    >
      <LanguageButton
        language={language}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <LanguageMenu
        isOpen={isOpen}
        currentLanguage={language}
        onSelect={(lang) => {
          setLanguage(lang);
          setIsOpen(false);
        }}
      />
    </div>
  );
}