import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import projectsBackground from '@/assets/backgroundproject.jpg';
import casapatio1 from '@/assets/projects/Residenciales/CasaPatio/Casa-Patio1.jpg';
import elcubo1 from '@/assets/projects/Residenciales/ElCubo/El-Cubo1.jpg';
import casagenesis1 from '@/assets/projects/Residenciales/CasaGenesis/Casa-Genesis1.jpg';
import TL1 from '@/assets/projects/Administrativo/TorreLuz/TL1.png';
import VS1 from '@/assets/projects/Culturales/LaVozDelSilencio/VS1.png'
import OE1 from '@/assets/projects/Culturales/OdeonEsculpido/OE1.png'
import Pi1 from '@/assets/projects/Educativos/EscuelaPrimaria/Pi1.png'

interface ProjectsSectionProps {
  onNavigate: (section: string) => void;
}

const projectCategories = ['administrative', 'culturel', 'residential', 'educational', 'industrial', 'urban'];
{/* Aqui se pone la categoria de proyectos a mostrar y las 3 imagenes deseadas */}
const mockProjects = {
  administrative: [
    { title: "Torre Luz", image: TL1 },
    
  ],
  culturel: [
    { title: "La Voz del Silencio", image: VS1 },
    { title: "El Odeon Esculpido", image: OE1 }, 
  ],
  residential: [
    { title: "El Cubo", image: elcubo1 },
    { title: "Casa Genesis", image: casagenesis1 },
    { title: "Casa Patio", image: casapatio1 }
  ],
  educational: [
    { title: "Escuela Primaria", image: Pi1 },
  ],
  industrial: [],
  urban: [],
};

export function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${projectsBackground})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="space-y-12">
          {projectCategories.map((category) => (
            <div key={category} className="space-y-6">
              {/* Encabezado de categoría */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setSelectedCategory(selectedCategory === category ? null : category)
                  }
                  className={`text-xl md:text-2xl tracking-wide transition-all underline decoration-brand-accent/50 underline-offset-[6px] hover:decoration-brand-accent/30 
                    font-roboto font-light
                    ${selectedCategory === category
                      ? 'text-brand-accent'
                      : 'text-text-inverse hover:text-brand-accent'
                    }`}
                >
                  {t(`projects.${category}`)}
                </button>
                {/* Signo + → Nos lleva a AllProjects con categoría activa */}
                <Button
                  variant="ghost"
                  onClick={() => onNavigate(`/all-projects?category=${category}`)}
                  className="text-text-inverse hover:text-brand-accent p-0"
                >
                  {/* Poner los nombres de la categoria en roboto light y el + en roboto bold */}
                  <span className="font-roboto font-bold text-xl md:text-2xl">
                    +
                  </span>
                </Button>
              </div>
              {/* Mostrar proyectos si la categoría está seleccionada */}
              {selectedCategory === category && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-500">
                  {mockProjects[selectedCategory as keyof typeof mockProjects].map((project, index) => {
                    const slug = project.title.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <button
                        key={index}
                        onClick={() => onNavigate(`/all-projects/${category}/${slug}`)}
                        className="aspect-[4/3] bg-surface-neutral rounded-sm overflow-hidden hover:scale-105 transition-base group"
                      >
                        <img
                          src={project.image}
                          alt={`${category} project ${index + 1}`}
                          className="w-full h-full object-cover group-hover:opacity-90 transition-base"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
