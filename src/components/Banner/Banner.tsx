import { useState, useEffect } from 'react';
import { Language } from '../../types';
import { BannerNav } from './BannerNav';
import { Logo } from '../brand/Logo';
import { MobileMenu } from './MobileMenu';

interface Props {
  language: Language;
  onNavigate: (sectionId: string) => void;
}

export function Banner({ language, onNavigate }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('services');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigate(sectionId);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Logo size="sm" />
        <div className="hidden md:block">
          <BannerNav 
            language={language} 
            activeSection={activeSection}
            onNavigate={handleNavigate} 
          />
        </div>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          language={language}
          activeSection={activeSection}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onNavigate={handleNavigate}
        />
      </div>
    </header>
  );
}