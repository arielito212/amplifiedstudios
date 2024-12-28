import { sections } from './constants';
import { BannerLink } from './BannerLink';
import { Language } from '../../types';

interface Props {
  language: Language;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function BannerNav({ language, activeSection, onNavigate }: Props) {
  return (
    <nav className="flex gap-2">
      {sections[language].map((section) => (
        <BannerLink
          key={section.id}
          icon={section.icon}
          label={section.label}
          isActive={activeSection === section.id}
          onClick={() => onNavigate(section.id)}
          variant={section.id === 'community' ? 'primary' : 'default'}
        />
      ))}
    </nav>
  );
}