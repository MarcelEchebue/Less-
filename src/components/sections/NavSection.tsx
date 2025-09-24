import { useLanguage } from '@/contexts/LanguageContext';

interface NavSectionProps {
  onNavigate: (section: string) => void;
}

export function NavSection({ onNavigate }: NavSectionProps) {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('nav.transformative.title'),
      content: t('nav.transformative.text'),
      highlights: ['la arquitectura no solo construye espacios', 'la arquitectura no solo construye']//las palabras a resaltar
    },
    {
      title: t('nav.method.title'),
      content: t('nav.method.text'),
      highlights: ['neuroarquitectura', 'neuroarquitectura', 'psicología espacial', 'psicología espacial', 'antropología', 'antropología']//las palabras a resaltar
    },
    {
      title: t('nav.rigor.title'),
      content: t('nav.rigor.text'),
      highlights: ['rigor técnico', 'sensibilidad estética', 'reflexión poética', 'rigor técnico', 'sensibilidad estética', 'reflexión poética']//las palabras a resaltar
    },
    {
      title: t('nav.consciousness.title'),
      content: t('nav.consciousness.text'),
      highlights: ['Muchos desconocen lo que realmente pueden esperar de un arquitecto', 'Muchos desconocen lo que realmente pueden esperar de un arquitecto']//las palabras a resaltar
    },
    
  ];

  const highlightText = (text: string, highlights: string[]) => {
    let highlightedText = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<strong>$1</strong>');
    });
    return highlightedText;

    
  };

  const highlightedNavText = t('nav.description').replace(
    /(arquitectura| L’ARCHITECTURE| ARCHITECTURE|\s\+\s| hacer| FAIRE| DO| por ti| pour toi| FOR YOU|tÚ lugar| TON ESPACE| YOUR PLACE| paredes| MURS| WALLS| techos| TOITS| CEILINGS| humana| HUMAINE| HUMAN| coherente| COHÉRENTE| COHERENT| esencial| ESSENTIELLE| ESSENTIAL| psicología espacial|rigor técnico)/gi,
    '<span class="font-bold text-brand-primary">$1</span>'
  );

  return (
    <section id="nav" className="bg-surface-white py-20">
      <div className="container mx-auto px-6">
        {/* Navigation Links */}
        <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 mb-16 border-b border-border pb-8 px-3 sm:px-4 md:px-6">
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
          >
            {t('nav.projects')}
          </button>
          <button
            onClick={() => onNavigate('store')}
            className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
          >
            {t('store.title')}
          </button>
          <button
            onClick={() => onNavigate('research')}
            className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
          >
            {t('nav.research')}
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-brand-primary hover:text-brand-accent transition-fast tracking-wide"
          >
            {t('nav.contact')}
          </button>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p
            className="text-2xl md:text-2xl text-brand-primary leading-relaxed tracking-wide"
            dangerouslySetInnerHTML={{ __html: highlightedNavText }}
          />
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-sm md:text-xl text-text-primary leading-relaxed">
                {section.title}
              </h2>
              <div 
                className="text-sm md:text-xl text-text-primary leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: highlightText(section.content, section.highlights) 
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}