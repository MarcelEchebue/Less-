import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/Home.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage();

  // Obtener tagline y reemplazar palabras clave por strong en blanco y negrita
  const tagline = t('hero.tagline'); // "Menos forma, más significado" tanto en español como en francés e inglés
  const highlightedTagline = tagline
    //.replace('M', '<strong class="font-semibold text-white">M</strong>')
    .replace('L', '<strong class="font-semibold text-white">L</strong>')
    .replace('p', '<strong class="font-semibold text-white">p</strong>')
    
    .replace('forma', '<strong class="font-semibold text-white">forma</strong>')
    .replace('significado', '<strong class="font-semibold text-white">significado</strong>')
    .replace('forme', '<strong class="font-semibold text-white">forme</strong>')
    .replace('sens', '<strong class="font-semibold text-white">sens</strong>')
    .replace('form', '<strong class="font-semibold text-white">form</strong>')
    .replace('meaning', '<strong class="font-semibold text-white">meaning</strong>');

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col justify-end bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-20 flex justify-center">
        <div className="text-center">
          {/* Main Brand */}
          <h1 className="text-6xl md:text-8xl font-bold text-text-inverse mb-6 tracking-wider">
            LESS +
          </h1>
          
          {/* Tagline con palabras en blanco y negrita */}
          <p
            className="text-xl md:text-2xl text-text-inverse/90 mb-12 font-light tracking-wide"
            dangerouslySetInnerHTML={{ __html: highlightedTagline }}
          />
          
          {/* Arrow to next section */}
          <Button
            variant="ghost"
            onClick={() => onNavigate('nav')}
            className="text-text-inverse hover:text-brand-accent transition-base p-0 h-auto group"
          >
            <ChevronDown 
              size={40} 
              className="animate-bounce group-hover:animate-none transition-base" 
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
