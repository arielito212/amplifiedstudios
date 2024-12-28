import { Check } from 'lucide-react';
import { Language } from '../../types';

interface Props {
  language: Language;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function LanguageOption({ label, isSelected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
        isSelected ? 'bg-rose-50 text-rose-600' : 'hover:bg-neutral-50'
      }`}
      role="menuitem"
    >
      <span className="font-medium">{label}</span>
      {isSelected && <Check className="w-4 h-4 ml-auto" />}
    </button>
  );
}