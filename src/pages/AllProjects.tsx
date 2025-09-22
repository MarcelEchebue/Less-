import { useState } from 'react';
import { Link } from "react-router-dom";
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import projectsBackground from '@/assets/backgroundproject.jpg';
import casapatio1 from '@/assets/projects/Residenciales/CasaPatio/Casa-Patio1.jpg';
import elcubo1 from '@/assets/projects/Residenciales/ElCubo/El-Cubo1.jpg';
import casagenesis1 from '@/assets/projects/Residenciales/CasaGenesis/Casa-Genesis1.jpg';
// Importa más imágenes según sea necesario
import residential1 from '@/assets/residential-1.jpg';
import residential2 from '@/assets/residential-2.jpg';
import cultural1 from '@/assets/cultural-1.jpg';
import administrative1 from '@/assets/administrative-1.jpg';

interface AllProjectsProps {
    onNavigate: (section: string) => void;
}

const projectCategories = ['all', 'residential', 'cultural', 'administrative', 'educational', 'industrial', 'urban'];

const projectsData = {
    residential: [
        { title: "Casa Patio", image: casapatio1 },
        { title: "El Cubo", image: elcubo1 },
        { title: "Casa Genesis", image: casagenesis1 },
       // { title: "Villa Moderne", image: residential1 },
       // { title: "Résidence Urbaine", image: residential2 },
    ],
    cultural: [
        //{ title: "Centre Culturel", image: cultural1 },
    ],
    administrative: [
       // { title: "Bureau Municipal", image: administrative1 },
    ]
    // puedes seguir añadiendo
};

export function AllProjects({ onNavigate }: AllProjectsProps) {
    const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const getFilteredProjects = () => {
        if (selectedCategory === 'all') {
            return Object.values(projectsData).flat();
        }
        return projectsData[selectedCategory as keyof typeof projectsData] || [];
    };

    const filteredProjects = getFilteredProjects();

    return (
        <div className="min-h-screen bg-white">
            <Header onNavigate={onNavigate} />

            {/* Hero Section */}
            <section
                className="relative h-[40vh] md:h-[50vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${projectsBackground})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-wide">{t('projects.title')}</h1>
                    <button
                        onClick={() => onNavigate('home')}
                        className="mt-4 underline underline-offset-4 hover:text-gray-300 transition"
                    >
                        {t('projects.backToHome')}
                    </button>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="py-6 md:py-8 border-b border-gray-200">
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {projectCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`uppercase tracking-wide transition 
                            text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 
                            ${selectedCategory === cat
                                    ? 'border-b-2 border-black font-semibold'
                                    : 'text-gray-500 hover:text-black'}`}
                        >
                            {t(`projects.filter.${cat}`)}
                        </button>
                    ))}
                </div>
            </section>


            {/* Projects Grid */}
            <section className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => {
                            const slug = project.title.toLowerCase().replace(/\s+/g, "-"); // genera slug
                            const category = selectedCategory === "all"
                                ? Object.keys(projectsData).find(cat =>
                                    projectsData[cat as keyof typeof projectsData].includes(project)
                                )
                                : selectedCategory;

                            return (
                                <Link
                                    key={index}
                                    to={`/all-projects/${category}/${slug}`}  // ✅ CORREGIDO
                                    className="group relative overflow-hidden block"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-white text-2xl font-semibold text-center px-2">
                                            {project.title}
                                        </h3>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            {t('projects.noProjects')}
                        </p>
                    )}
                </div>
            </section>

        </div>
    );
}
