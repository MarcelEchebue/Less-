import { useState } from 'react'; 
import { Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import projectsBackground from '@/assets/backgroundproject.jpg';
import casapatio1 from '@/assets/projects/Residenciales/CasaPatio/Casa-Patio1.jpg';
import elcubo1 from '@/assets/projects/Residenciales/ElCubo/El-Cubo1.jpg';
import casagenesis1 from '@/assets/projects/Residenciales/CasaGenesis/Casa-Genesis1.jpg';


interface ProjectsSectionProps {
  onNavigate: (section: string) => void;
}

const projectCategories = [
  'residential',
  //'cultural', 
  //'administrative',
  //'educational',
  //'industrial',
  //'urban'
];
// Mock data para proyectos, Insertamos las 3 imágenes que queremos que se ilustren a la hora de desplegar cada categoría.
const mockProjects = {
  residential: [casagenesis1,elcubo1,casapatio1],
  cultural: ['/api/placeholder/400/300','/api/placeholder/400/300','/api/placeholder/400/300'],
  administrative: ['/api/placeholder/400/300','/api/placeholder/400/300','/api/placeholder/400/300'],
  educational: ['/api/placeholder/400/300','/api/placeholder/400/300','/api/placeholder/400/300'],
  industrial: ['/api/placeholder/400/300','/api/placeholder/400/300','/api/placeholder/400/300'],
  urban: ['/api/placeholder/400/300','/api/placeholder/400/300','/api/placeholder/400/300']
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
        {/* Eliminamos el título y el botón "ver todo" */}
        <div className="space-y-12">
          {projectCategories.map((category) => (
            <div key={category} className="space-y-6">
              {/* Encabezado de categoría */}
              <div className="flex items-center gap-2">
                {/* Título de la categoría en Roboto Light */}
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

                {/* Signo + en Roboto Bold */}
                <Button
                  variant="ghost"
                  onClick={() => onNavigate(`projects-${category}`)}
                  className="text-text-inverse hover:text-brand-accent p-0"
                >
                  <span className="font-roboto font-bold text-xl md:text-2xl">
                    +
                  </span>
                </Button>
              </div>

              {/* Mostrar proyectos si la categoría está seleccionada */}
              {selectedCategory === category && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-500">
                  {mockProjects[selectedCategory as keyof typeof mockProjects].map((image, index) => (
                    <button
                      key={index}
                      onClick={() => onNavigate(`project-${selectedCategory}-${index}`)}
                      className="aspect-[4/3] bg-surface-neutral rounded-sm overflow-hidden hover:scale-105 transition-base group"
                    >
                      <img 
                        src={image}
                        alt={`${category} project ${index + 1}`}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-base"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
