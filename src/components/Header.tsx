import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Instagram, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/LESS+Logo.png';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      setShowScrollButton(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);

    if (section === 'home') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (section === 'about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'projects') {
      navigate('/all-projects');
    } else if (section === 'store') {
      navigate('/store');
    } else if (section === 'research') {
      navigate('/research');
    } else if (section === 'contact') {
      navigate('/contact');
    } else if (onNavigate) {
      onNavigate(section);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 ">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Language Switcher */}
          <div className={`flex items-center space-x-2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button
              onClick={() => setLanguage('en')}
              className={`text-sm font-medium transition-fast ${language === 'en' ? 'text-brand-primary' : 'text-text-muted hover:text-brand-primary'}`}
            >
              EN
            </button>
            <span className="text-text-muted">|</span>
            <button
              onClick={() => setLanguage('fr')}
              className={`text-sm font-medium transition-fast ${language === 'fr' ? 'text-brand-primary' : 'text-text-muted hover:text-brand-primary'}`}
            >
              FR
            </button>
          </div>

          {/* Logo */}
          {!isMenuOpen && (
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
              <button onClick={() => handleNavigation('home')} className="transition-fast">
                <img
                  src={logo}
                  alt="Logo LESS+"
                  className="h-8 sm:h-10 lg:h-12 w-auto hover:opacity-100 transition-opacity duration-200"
                />
              </button>
            </div>
          )}

          {/* Hamburger Menu */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="p-2 hover:bg-surface-neutral relative z-10 "
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 z-40 h-full w-full md:w-[43%] bg-surface-white transition-transform duration-300 flex flex-col">

          <div className="flex flex-col items-center justify-center flex-1 space-y-8 px-6">
            <nav className="flex flex-col items-center space-y-6">
              <button onClick={() => handleNavigation('projects')} className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide">
                {t('nav.projects')}
              </button>
              <button onClick={() => handleNavigation('store')} className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide">
                {t('store.title')}
              </button>
              <button onClick={() => handleNavigation('research')} className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide">
                {t('nav.research')}
              </button>
              <button onClick={() => handleNavigation('about')} className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide">
                {t('nav.about')}
              </button>
              <button onClick={() => handleNavigation('contact')} className="text-2xl font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide">
                {t('nav.contact')}
              </button>
            </nav>
          </div>

          {/* Texto traducido + Redes Sociales */}
          <div className="flex flex-col items-center space-y-2 pb-6">
            <p className="text-sm text-gray-500">
              {t("all_rights_reserved")}
            </p>

            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/mmbila.e" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
                <Instagram size={28} />
              </a>
              <a href="https://github.com/MarcelEchebue" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
                <Github size={28} />
              </a>
              <a href="mailto:echebuemarcelino@gmail.com" className="hover:text-brand-primary">
                <Mail size={28} />
              </a>
              <a href="https://www.linkedin.com/in/marcelino-ebang-echebue-3920181a3" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      )}


      {/* Scroll to Top Button */}
      {showScrollButton && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gray-500/20 backdrop-blur-sm text-brand-primary hover:bg-gray-600/30 hover:text-brand-primary shadow-lg transition-base"
        >
          <ChevronUp size={20} />
        </Button>
      )}
    </>
  );
}
