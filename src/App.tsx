import { useState } from 'react';
import { Language } from './types';
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector';
import { Banner } from './components/Banner/Banner';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { scrollToSection } from './utils/scroll';

type Page = 'main' | 'privacy';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<Page>('main');

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <PrivacyPolicy 
          language={language} 
          onBack={() => setCurrentPage('main')} 
        />
        <Footer 
          language={language} 
          onPrivacyClick={() => setCurrentPage('privacy')} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Banner language={language} onNavigate={handleNavigate} />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <AboutUs language={language} />
        <div id="services">
          <Services language={language} />
        </div>
        <div id="benefits">
          <Benefits language={language} />
        </div>
        <div id="contact">
          <ContactForm language={language} />
        </div>
      </main>
      <Footer 
        language={language} 
        onPrivacyClick={() => setCurrentPage('privacy')} 
      />
    </div>
  );
}

export default App;