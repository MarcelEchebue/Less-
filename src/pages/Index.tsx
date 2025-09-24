import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- importa esto
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { NavSection } from '@/components/sections/NavSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { StoreSection } from '@/components/sections/StoreSection';
import { LaboratoireSection } from '@/components/sections/LaboratoireSection';
import { AboutSection } from '@/components/sections/AboutSection';


const Index = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const navigate = useNavigate(); // <--- hook de navegación

  const handleNavigation = (section: string) => {
    if (section === 'all-projects') {
      navigate('/all-projects'); // <--- va a la página AllProjects
      return;
    }

    const element = sectionRefs.current[section];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Set up section refs
    sectionRefs.current = {
      home: document.getElementById('home'),
      nav: document.getElementById('nav'),
      projects: document.getElementById('projects'),
      store: document.getElementById('store'),
      research: document.getElementById('research'),
      about: document.getElementById('about'),
      contact: document.getElementById('contact'),
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header onNavigate={handleNavigation} />
        
        <main>
          <HeroSection onNavigate={handleNavigation} />
          <NavSection onNavigate={handleNavigation} />
          <ProjectsSection onNavigate={(path) => navigate(path)} /> {/* ✅ Ahora sí navega */}
          <StoreSection onNavigate={handleNavigation} />
          <LaboratoireSection onNavigate={handleNavigation} />
          <AboutSection onNavigate={handleNavigation} />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
