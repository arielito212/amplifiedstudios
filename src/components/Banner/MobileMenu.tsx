import { Menu, X } from 'lucide-react';
import { Language } from '../../types';
import { sections } from './constants';

interface Props {
  isOpen: boolean;
  language: Language;
  activeSection: string;
  onToggle: () => void;
  onNavigate: (sectionId: string) => void;
}

export function MobileMenu({ isOpen, language, activeSection, onToggle, onNavigate }: Props) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col gap-2">
            {sections[language].map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onNavigate(section.id);
                  onToggle();
                }}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-rose-500 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-medium">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}