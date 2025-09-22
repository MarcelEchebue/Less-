import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    'nav.projects': 'PROYECTOS',
    'nav.news': 'NOTICIAS', 
    'nav.research': 'LABORATORIO',
    'nav.about': 'NOSOTROS',
    'nav.contact': 'CONTACTO',
    'hero.tagline': 'Menos forma, más significado',
    'nav.description': 'LESS + ES TÚ LUGAR PARA DESCUBRIR LO QUE LA ARQUITECTURA PUEDE HACER POR TI, MÁS ALLÁ DE PAREDES Y TECHOS: UNA EXPERIENCIA HUMANA, COHERENTE Y ESENCIAL.',
    'nav.transformative.title': 'UNA ARQUITECTURA QUE TRANSFORMA',
    'nav.transformative.text': 'Nuestro enfoque parte de la premisa de que la arquitectura no solo construye espacios, sino que transforma la manera en que vivimos, sentimos y nos relacionamos con nuestro entorno. Cada proyecto nace del entendimiento profundo de la persona: sus necesidades, hábitos, emociones y contexto. No nos limitamos a cumplir programas; buscamos generar espacios que tengan un impacto positivo y tangible en la vida diaria.',
    'nav.method.title': 'MÉTODO INTERDISCIPLINARIO',
    'nav.method.text': 'Integramos neuroarquitectura, psicología espacial y antropología para comprender cómo los espacios afectan la percepción, la conducta y la experiencia emocional. Cada decisión —desde la distribución hasta la luz, la textura y el ritmo— se toma pensando en cómo potenciar la actividad de cada persona en su entorno, haciendo que cada espacio sea más fluido, funcional y significativo.',
    'nav.rigor.title': 'RIGOR SENSIBILIDAD Y POESÍA',
    'nav.rigor.text': 'Nuestro proceso combina rigor técnico, sensibilidad estética y reflexión poética. Analizamos el contexto social, cultural y económico para garantizar coherencia y pertinencia. Evitamos lo superfluo y nos centramos en lo esencial, creando proyectos únicos donde funcionalidad, belleza y emoción se encuentran, y donde las artes se integran de manera orgánica.',
    'nav.consciousness.title': 'CONCIENCIA Y COLABORACIÓN',
    'nav.consciousness.text': 'Muchos desconocen lo que realmente pueden esperar de un arquitecto. Por eso acompañamos a nuestros clientes en un proceso educativo: identificamos las oportunidades y fallas de sus espacios actuales y mostramos cómo una intervención consciente puede transformar su vida cotidiana. Esto genera una relación más profunda y colaborativa, basada en comprensión y confianza.',
    
    'projects.viewall': 'ver todo',
    'projects.filter.all': 'Todos',
    'projects.residential': 'PROYECTOS RESIDENCIALES',
    'projects.filter.residential': 'Residencial',
    'projects.cultural': 'PROYECTOS CULTURALES',
    'projects.filter.cultural': 'Cultural',
    'projects.administrative': 'PROYECTOS ADMINISTRATIVOS',
    'projects.filter.administrative': 'Administrativo',
    'projects.educational': 'PROYECTOS EDUCATIVOS',
    'projects.filter.educational': 'Educativo',
    'projects.industrial': 'PROYECTOS INDUSTRIALES',
    'projects.filter.industrial': 'Industrial',
    'projects.urban': 'PROYECTOS URBANOS',
    'projects.filter.urban': 'Urbano',
    'store.title': 'TIENDA',
    'store.link': 'Ir a Tienda',
    'store.description': 'En LESS+ la arquitectura también se escribe. En la tienda encontrarás libros y publicaciones que recogen reflexiones, ideas y relatos creados desde el mismo enfoque humanista que guía nuestros proyectos. Un espacio donde la práctica arquitectónica se conecta con la escritura.',
    'research.title': 'LABORATORIO +',
    'research.link': 'Ir a laboratorio',
    'research.description': 'Aquí experimentamos con ideas y conceptos que van más allá de los encargos. Funcionando como laboratorio de arquitectura. Cada proyecto es un ejercicio de investigación donde aplicamos neuroarquitectura, psicología espacial y antropología para explorar cómo se comunican los espacios.',
    'about.title': 'NOSOTROS +',
    'about.description': `
      <p>Didier Yambá Chalé (<strong><strong>DDR</strong></strong>), arquitecto y fundador de LESS+, descubrió la arquitectura a los 13 años y se graduó como <strong><strong>primero de su promoción</strong></strong> en el Collège Universitaire d'Architecture de Dakar (2023-2024). Su trayectoria incluye <strong><strong>experiencia internacional</strong></strong> en proyectos de <strong><strong>rehabilitación patrimonial</strong></strong> para la <strong><strong>UNESCO</strong></strong> y colaboraciones con estudios en <strong><strong>Senegal, Costa de Marfil</strong></strong> e <strong><strong>Italia</strong></strong>.</p>

      <p><strong><strong>LESS+</strong></strong> es un <strong><strong>estudio colaborativo</strong></strong> dirigido por Didier Yambá Chalé como <strong><strong>arquitecto principal</strong></strong>. Cada proyecto se desarrolla con un equipo adaptado a sus necesidades específicas, incorporando profesionales de distintas disciplinas. La metodología combina <strong><strong>BIM (Revit)</strong></strong>, <strong><strong>inteligencia artificial</strong></strong>, renderizado avanzado y <strong><strong>realidad aumentada</strong></strong>, integrando la tecnología al servicio de una arquitectura humanista, coherente y esencial.</p>
    `,
    'contact.title': 'CONTACTO',
    'contact.address': 'Dirección',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    "all_rights_reserved": "Todos los derechos reservados"
  },
  fr: {
    'nav.projects': 'PROJETS',
    'nav.news': 'ACTUALITÉS', 
    'nav.research': 'LABORATOIRE',
    'nav.about': 'À PROPOS',
    'nav.contact': 'CONTACT',
    'hero.tagline': 'Moins de forme, plus de sens',
    'nav.description': 'LESS+ EST TON ESPACE POUR DÉCOUVRIR CE QUE L’ARCHITECTURE PEUT FAIRE POUR TOI, AU-DELÀ DES MURS ET DES TOITS : UNE EXPÉRIENCE HUMAINE, COHÉRENTE ET ESSENTIELLE.',
    'nav.transformative.title': 'UNE ARCHITECTURE QUI TRANSFORME',
    'nav.transformative.text': 'Notre approche part du principe que l’architecture ne se limite pas à construire des espaces, mais transforme la manière dont nous vivons, ressentons et interagissons avec notre environnement. Chaque projet naît d’une compréhension profonde de la personne : ses besoins, ses habitudes, ses émotions et son contexte. Nous ne nous contentons pas de remplir des programmes ; nous cherchons à créer des espaces ayant un impact positif et tangible sur la vie quotidienne.',
    'nav.method.title': 'MÉTHODE INTERDISCIPLINAIRE',
    'nav.method.text': 'Nous intégrons la neuro-architecture, la psychologie spatiale et l’anthropologie pour comprendre comment les espaces influencent la perception, le comportement et l’expérience émotionnelle. Chaque décision — de la distribution à la lumière, de la texture au rythme — est prise dans le but de renforcer l’activité de chaque personne dans son environnement, rendant chaque espace plus fluide, fonctionnel et porteur de sens.',
    'nav.rigor.title': 'RIGUEUR, SENSIBILITÉ ET POÉSIE',
    'nav.rigor.text': 'Notre processus combine rigueur technique, sensibilité esthétique et réflexion poétique. Nous analysons le contexte social, culturel et économique pour garantir cohérence et pertinence. Nous évitons le superflu et nous concentrons sur l’essentiel, créant des projets uniques où fonctionnalité, beauté et émotion se rencontrent, et où les arts s’intègrent de manière organique.',
    'nav.consciousness.title': 'CONSCIENCE ET COLLABORATION',
    'nav.consciousness.text': 'Beaucoup ignorent ce qu’ils peuvent réellement attendre d’un architecte. C’est pourquoi nous accompagnons nos clients dans un processus éducatif : nous identifions les opportunités et les failles de leurs espaces actuels et montrons comment une intervention consciente peut transformer leur quotidien. Cela génère une relation plus profonde et collaborative, fondée sur la compréhension et la confiance.',
    'projects.title': 'Projets',
    'projects.viewall': 'voir tout',
    'projects.filter.all': 'Tous',
    'projects.residential': 'PROJETS RESIDENTIELS',
    'projects.filter.residential': 'Résidentiel',
    'projects.cultural': 'Projets Culturels',
    'projects.filter.cultural': 'Culturel',
    'projects.administrative': 'Projets Administratifs',
    'projects.filter.administrative': 'Administratif',
    'projects.educational': 'Projets Éducatifs',
    'projects.filter.educational': 'Éducatif',
    'projects.industrial': 'Projets Industriels',
    'projects.filter.industrial': 'Industriel',
    'projects.urban': 'Projets Urbains',
    'projects.filter.urban': 'Urbains',
    'store.title': 'BOUTIQUE',
    'store.link': 'Aller à la Boutique',
    'store.description': 'Chez LESS+, l’architecture s’écrit aussi. Dans la boutique, tu trouveras des livres et publications regroupant réflexions, idées et récits créés à partir de la même approche humaniste qui guide nos projets. Un espace où la pratique architecturale se relie à l’écriture.',
    'research.title': 'LABORATOIRE +',
    'research.link': 'Aller aux laboratoire',
    'research.description': 'Ici, nous expérimentons avec des idées et concepts qui vont au-delà des commandes. Fonctionnant comme un laboratoire d’architecture, chaque projet est un exercice de recherche où nous appliquons la neuro-architecture, la psychologie spatiale et l’anthropologie pour explorer comment les espaces communiquent.',
    'about.title': 'À PROPOS +',
    'about.description': `
      <p>Didier Yambá Chalé (<strong><strong>DDR</strong></strong>), architecte et fondateur de LESS+, a découvert l’architecture à l’âge de 13 ans et a été diplômé premier de sa promotion au Collège Universitaire d’Architecture de Dakar (2023-2024). Son parcours inclut une <strong><strong>expérience internationale</strong></strong> dans des projets de <strong><strong>réhabilitation patrimoniale</strong></strong> pour <strong><strong>l’UNESCO</strong></strong> et des collaborations avec des cabinets au <strong><strong>Sénégal</strong></strong>, en <strong><strong>Côte d’Ivoire</strong></strong> et en <strong><strong>Italie</strong></strong>.</p>

      <p><strong><strong>LESS+</strong></strong> est un <strong><strong>studio collaboratif</strong></strong> dirigé par Didier Yambá Chalé en tant qu’<strong><strong>architecte principal</strong></strong>. Chaque projet est développé avec une équipe adaptée aux besoins spécifiques, intégrant des professionnels de diverses disciplines. La méthodologie combine <strong><strong>BIM (Revit)</strong></strong>, <strong><strong>intelligence artificielle</strong></strong>, rendu avancé et <strong><strong>réalité augmentée</strong></strong>, intégrant la technologie au service d’une architecture humaniste, cohérente et essentielle.</p>
    `,
    'contact.title': 'CONTACT',
    'contact.address': 'Adresse',
    'contact.email': 'E-mail',
    'contact.phone': 'Téléphone',
    "all_rights_reserved": "Tous droits réservés"
}
,
  en: {
    'nav.projects': 'PROJECTS',
    'nav.news': 'NEWS',
    'nav.research': 'LABORATORY', 
    'nav.about': 'ABOUT US',
    'nav.contact': 'CONTACT',
    'hero.tagline': 'Less form, more meaning',
    'nav.description': 'LESS + IS YOUR PLACE TO DISCOVER WHAT ARCHITECTURE CAN DO FOR YOU, BEYOND WALLS AND CEILINGS: A HUMAN, COHERENT AND ESSENTIAL EXPERIENCE.',
    'nav.transformative.title': 'TRANSFORMATIVE ARCHITECTURE',
    'nav.transformative.text': 'Our approach starts from the premise that architecture not only builds spaces, but transforms the way we live, feel and relate to our environment. Each project is born from a deep understanding of the person: their needs, habits, emotions and context. We do not limit ourselves to fulfilling programs; we seek to generate spaces that have a positive and tangible impact on daily life.',
    'nav.method.title': 'INTERDISCIPLINARY METHOD',
    'nav.method.text': 'We integrate neuroarchitecture, spatial psychology and anthropology to understand how spaces affect perception, behavior and emotional experience. Each decision —from distribution to light, texture and rhythm— is made thinking about how to enhance each person\'s activity in their environment, making each space more fluid, functional and meaningful.',
    'nav.rigor.title': 'RIGOR SENSITIVITY AND POETRY',
    'nav.rigor.text': 'Our process combines technical rigor, aesthetic sensitivity and poetic reflection. We analyze the social, cultural and economic context to ensure coherence and relevance. We avoid the superfluous and focus on the essential, creating unique projects where functionality, beauty and emotion meet, and where the arts are integrated organically.',
    'nav.consciousness.title': 'CONSCIOUSNESS AND COLLABORATION',
    'nav.consciousness.text': 'Many do not know what they can really expect from an architect. That is why we accompany our clients in an educational process: we identify the opportunities and failures of their current spaces and show how a conscious intervention can transform their daily life. This generates a deeper and more collaborative relationship, based on understanding and trust.',
    'projects.title': 'Projects',
    'projects.viewall': 'view all',
    'projects.filter.all': 'All',
    'projects.residential': 'RESIDENTIAL PROJECTS',
    'projects.filter.residential': 'Residential',
    'projects.cultural': 'Cultural Projects',
    'projects.filter.cultural': 'Cultural',
    'projects.administrative': 'Administrative Projects',
    'projects.filter.administrative': 'Administrative',
    'projects.educational': 'Educational Projects',
    'projects.filter.educational': 'Educational',
    'projects.industrial': 'Industrial Projects',
    'projects.filter.industrial': 'Industrial',
    'projects.urban': 'Urban Projects',
    'projects.filter.urban': 'Urban',
    'store.title': 'STORE ',
    'store.link': 'Go to Store',
    'store.description': 'At LESS+ architecture is also written. In the store you will find books and publications that collect reflections, ideas and stories created from the same humanistic approach that guides our projects. A space where architectural practice connects with writing.',
    'research.title': 'LABORATORY +',
    'research.link': 'Go to Laboratory',
    'research.description': 'Here we experiment with ideas and concepts that go beyond commissions. Functioning as an architecture laboratory. Each project is a research exercise where we apply neuroarchitecture, spatial psychology and anthropology to explore how spaces communicate.',
    'about.title': 'ABOUT US +',
    'about.description': `
      <p>Didier Yambá Chalé (DDR), architect and founder of LESS+, discovered architecture at age 13 and graduated <strong><strong>first in his class</strong></strong> from the Collège Universitaire d\'Architecture of Dakar (2023–2024). His trajectory includes <strong><strong>international experience</strong></strong> in <strong><strong>heritage rehabilitation</strong></strong> projects for <strong><strong>UNESCO</strong></strong> and collaborations with studios in <strong><strong>Senegal</strong></strong>, <strong><strong>Ivory Coast</strong></strong> & <strong><strong>Italy</strong></strong>.<p>
      <p><strong><strong>LESS+</strong></strong> is a <strong><strong>collaborative studio</strong></strong> directed by Didier Yambá Chalé as <strong><strong>principal architect</strong></strong>. Each project is developed with a team adapted to its specific needs, incorporating professionals from different disciplines. The methodology combines <strong><strong>BIM (Revit)</strong></strong>, <strong><strong>artificial intelligence</strong></strong>, advanced rendering and <strong><strong>augmented reality</strong></strong>, integrating technology at the service of humanistic, coherent and essential architecture.'<p>
      `,
    'contact.title': 'CONTACT',
    'contact.address': 'Address',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    "all_rights_reserved": "All rights reserved"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}