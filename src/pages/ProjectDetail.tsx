import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
// Importar imágenes administrativas
import TL1 from "@/assets/projects/Administrativo/TorreLuz/TL1.png";
import TL2 from "@/assets/projects/Administrativo/TorreLuz/TL2.jpg";
import TL3 from "@/assets/projects/Administrativo/TorreLuz/TL3.jpg";
import TL4 from "@/assets/projects/Administrativo/TorreLuz/TL4.jpg";
import TL5 from "@/assets/projects/Administrativo/TorreLuz/TL5.jpg";
import TL6 from "@/assets/projects/Administrativo/TorreLuz/TL6.jpg";
import TL7 from "@/assets/projects/Administrativo/TorreLuz/TL7.jpg";
// Importar imágenes culturales
import VS1 from "@/assets/projects/Culturales/LaVozDelSilencio/VS1.png"
import VS2 from "@/assets/projects/Culturales/LaVozDelSilencio/VS2.jpg";
import VS3 from "@/assets/projects/Culturales/LaVozDelSilencio/VS3.jpg";
import VS4 from "@/assets/projects/Culturales/LaVozDelSilencio/VS4.jpg";
import VS5 from "@/assets/projects/Culturales/LaVozDelSilencio/VS5.jpg";
import VS6 from "@/assets/projects/Culturales/LaVozDelSilencio/VS6.jpg";
import VS7 from "@/assets/projects/Culturales/LaVozDelSilencio/VS7.jpg";
import OE1 from "@/assets/projects/Culturales/OdeonEsculpido/OE1.png";
import OE2 from "@/assets/projects/Culturales/OdeonEsculpido/OE2.jpg";
import OE3 from "@/assets/projects/Culturales/OdeonEsculpido/OE3.jpg";
import OE4 from "@/assets/projects/Culturales/OdeonEsculpido/OE4.jpg";
import OE5 from "@/assets/projects/Culturales/OdeonEsculpido/OE5.jpg";
import OE6 from "@/assets/projects/Culturales/OdeonEsculpido/OE6.jpg";
import OE7 from "@/assets/projects/Culturales/OdeonEsculpido/OE7.jpg";

// Importar imágenes residenciales
import casapatio1 from "@/assets/projects/Residenciales/CasaPatio/Casa-Patio1.jpg";
import casapatio2 from "@/assets/projects/Residenciales/CasaPatio/Casa-Patio2.jpg";
import casapatio3 from "@/assets/projects/Residenciales/CasaPatio/Casa-Patio3.jpg";
import casapatio4 from "@/assets/projects/Residenciales/CasaPatio/Casa-Patio4.jpg";
import casapatio5 from "@/assets/projects/Residenciales/CasaPatio/Casa-Patio5.jpg";
import elcubo1 from "@/assets/projects/Residenciales/ElCubo/El-Cubo1.jpg";
import elcubo2 from "@/assets/projects/Residenciales/ElCubo/El-Cubo2.jpg";
import elcubo3 from "@/assets/projects/Residenciales/ElCubo/El-Cubo3.jpg";
import elcubo4 from "@/assets/projects/Residenciales/ElCubo/El-Cubo4.jpg";
import elcubo5 from "@/assets/projects/Residenciales/ElCubo/El-Cubo5.jpg";
import casagenesis1 from "@/assets/projects/Residenciales/CasaGenesis/Casa-Genesis1.jpg";
import casagenesis2 from "@/assets/projects/Residenciales/CasaGenesis/Casa-Genesis2.jpg";
import casagenesis3 from "@/assets/projects/Residenciales/CasaGenesis/Casa-Genesis3.jpg";
import casagenesis4 from "@/assets/projects/Residenciales/CasaGenesis/Casa-Genesis4.jpg";
import casagenesis5 from "@/assets/projects/Residenciales/CasaGenesis/Casa-Genesis5.jpg";
// Importar imágenes educativas
import Pi1 from "@/assets/projects/Educativos/EscuelaPrimaria/Pi1.png";
import Pi2 from "@/assets/projects/Educativos/EscuelaPrimaria/Pi2.jpg";
import Pi3 from "@/assets/projects/Educativos/EscuelaPrimaria/Pi3.jpg";
import Pi4 from "@/assets/projects/Educativos/EscuelaPrimaria/Pi4.jpg";
import Pi5 from "@/assets/projects/Educativos/EscuelaPrimaria/Pi5.jpg";
import Pi6 from "@/assets/projects/Educativos/EscuelaPrimaria/Pi6.jpg";
import Pi7 from "@/assets/projects/Educativos/EscuelaPrimaria/Pi7.jpg";
//import Pi8 from "@/assets/projects/Educativos/EscuelaPrimaria/Pi8.jpg";


export const projectsDetails = {
    administrative: {
        "torre-luz": {
            title: "",
            description: {
                //es: "Rehabilitación de un pequeño espacio para convertirlo en hogar, optimizando luz, ventilación y privacidad.",
                // en: "Rehabilitation of a small space to turn it into a home, optimizing light, ventilation, and privacy.",
            },
            media: [
                {
                    type: "image",
                    src: TL1,
                    texts: [
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        TORRE
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">LUZ</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        TOUR
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">LUMIERE</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        TOWER
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">LIGHT</span>
                                    </p>
                                </div>
                            ),
                            bottom: "80%",
                            right: "40%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        },
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, Más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-sx md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, Plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, More <span className="font-bold">meaning</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "1%",
                            right: "27%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: TL2,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        La <span className="font-bold">Torre Luz</span> es un edificio de oficinas
                                        que forma parte de un concurso de tres
                                        edificios organizado por la <span className="font-bold">BCEAO</span>.
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        El proyecto busca una <span className="font-bold">reconección del ser humano con la naturaleza</span> por medio de la <span className="font-bold">continuidad visual</span> que ofrecen 
                                        las aberturas de la fachhada y un exterior cargado de <span className="font-bold">vegetacion</span> y <span className="font-bold">espejos de agua</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        La <span className="font-bold">Tour Lumière</span> est un immeuble de bureaux
                                        faisant partie d’un concours de trois
                                        bâtiments organisé par la <span className="font-bold">BCEAO</span>.
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Le projet vise à une <span className="font-bold">reconnexion de l’être humain avec la nature</span>
                                        grâce à la <span className="font-bold">continuité visuelle</span> offerte par les ouvertures de la façade
                                        et un extérieur riche en <span className="font-bold">végétation</span> et en <span className="font-bold">plans d’eau</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The <span className="font-bold">Light Tower</span> is an office building
                                        that is part of a competition of three
                                        buildings organized by the <span className="font-bold">BCEAO</span>.
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The project seeks a <span className="font-bold">reconnection between humans and nature</span>
                                        through the <span className="font-bold">visual continuity</span> provided by the façade openings
                                        and an exterior filled with <span className="font-bold">vegetation</span> and <span className="font-bold">water features</span>.
                                    </p>
                                </div>
                            ),
                            
                            top:"4%", // 👈 misma altura que el otro texto
                            right:"45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                        {
                            es: (
                                <div className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Año:</span> 2025</p>
                                    <p><span className="font-bold">Tipo de encargo:</span> Concurso</p>
                                    <p><span className="font-bold">Tipo de proyecto:</span> Obra nueva</p>
                                    <p><span className="font-bold">Ubicación:</span> Desconocida</p>
                                    <p><span className="font-bold">Superficie:</span> 14.000 m²</p>
                                    <p><span className="font-bold">Fase del proyecto:</span> Diseño</p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Année :</span> 2025</p>
                                    <p><span className="font-bold">Type de commande :</span> Concours</p>
                                    <p><span className="font-bold">Type de projet :</span> Nouvelle construction</p>
                                    <p><span className="font-bold">Emplacement :</span> Inconnu</p>
                                    <p><span className="font-bold">Surface :</span> 14.000 m²</p>
                                    <p><span className="font-bold">Phase du projet :</span> Conception</p>
                                </div>
                            ),
                            en: (
                                <div className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Year :</span> 2025</p>
                                    <p><span className="font-bold">Type of commission:</span> Competition</p>
                                    <p><span className="font-bold">Project type:</span> New construction</p>
                                    <p><span className="font-bold">Location:</span> Unknown</p>
                                    <p><span className="font-bold">Area:</span> 14,000 m²</p>
                                    <p><span className="font-bold">Project phase:</span> Design</p>
                                </div>
                            ),
                            top: "5%", // 👈 misma altura que el otro texto
                            right: "2%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                        
                    ],
                },
                {
                    type: "image",
                    src: TL3,
                    texts: [
                        {
                            
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        UNA <span className="font-bold">CAJA DE CRISTAL</span>
                                        <br className="block md:hidden" /> ENVUELTA CON <span className="font-bold">SEDA</span>
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        La <span className="font-bold">doble piel</span> del edificio nos permite aumentar su <span className="font-bold">eficiencia energética</span> , haciendo de el un diseño respetuoso con el <span className="font-bold">medio ambiente</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        UNE <span className="font-bold">BOÎTE DE VERRE</span>
                                        <br className="block md:hidden" /> ENVELOPPÉE DE <span className="font-bold">SOIE</span>
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        La <span className="font-bold">double peau</span> du bâtiment permet d’augmenter son <span className="font-bold">efficacité énergétique</span>,
                                        faisant de lui une conception respectueuse de <span className="font-bold">l’environnement</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        A <span className="font-bold">GLASS BOX</span>
                                        <br className="block md:hidden" /> WRAPPED IN <span className="font-bold">SILK</span>
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The building's <span className="font-bold">double skin</span> increases its <span className="font-bold">energy efficiency</span>,
                                        making it a design that respects the <span className="font-bold">environment</span>.
                                    </p>
                                </div>
                            ),
                            top:"3%", // 👈 misma altura que el otro texto
                            right:"45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                    ]
                },
                {
                    type: "image",
                    src: TL4,
                    texts: [
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        INTERIORES
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">MINIMALISTAS</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">CÁLIDOS</span> Y
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">ACOGEDORES</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        INTÉRIEURS
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">MINIMALISTES</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">CHALEUREUX</span> ET
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">ACCUEILLANTS</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        INTERIORS
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">MINIMALIST</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">WARM</span> AND
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">COZY</span>.
                                    </p>
                                </div>
                            ),
                            bottom: "10%", //para subir el texto segun sea necesario
                            right: "5%",
                            className: "drop-shadow-md", // 👈 ahora solo aplicas sombra aquí
                        },
                    ],
                },
                {
                    type: "image",
                    src: TL5,
                    texts: [
                        
                    ],
                },
                {
                    type: "image",
                    src: TL6,
                    texts: [
                        
                    ],
                },
                {
                    type: "image",
                    src: TL7,
                    texts: [
                        {
                            
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">MENOS</span> ES <span className="font-bold">MEJOR</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">MOINS</span> C'EST <span className="font-bold">MIEUX</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">LESS</span> IS <span className="font-bold">BETTER</span>
                                    </p>
                                </div>
                            ),
                            top:"3%", // 👈 misma altura que el otro texto
                            right:"65%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                    ],
                }
            ],
        },
    },
    culturel: {
        "la-voz-del-silencio": {
            title: "",
            description: {},
            media: [
                {
                    type: "image",
                    src: VS1,
                    texts: [
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LA VOZ DEL
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">SILENCIO</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LA VOIX DU
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">SILENCE</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        THE VOICE OF
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">SILENCE</span>
                                    </p>
                                </div>
                            ),
                            bottom: "80%",
                            right: "40%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        },
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, Más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-sx md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, Plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, More <span className="font-bold">meaning</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "0%",
                            right: "27%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: VS2,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        EL <span className="font-bold">MUSERO</span> QUE QUISO
                                    </p>
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        SER LA <span className="font-bold">OBRA DE ARTE</span>
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        La <span className="font-bold">voz del silencio</span> es un museo que trata de ser 
                                        en si mismo una <span className="font-bold">obra de arte</span>, aun si el edificio estuviera vacio
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        A parte de las obras hechas por el
                                        hombre, el proyecto también expone
                                        <span className="font-bold">La Naturaleza</span> como la <span className="font-bold">obra maestra</span>,
                                        representada por <span className="font-bold">vegetación y espejos
                                        de agua</span> enmarcados por los <span className="font-bold">pórticos.</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        LE <span className="font-bold">MUSÉE</span> QUI VOULAIT
                                    </p>
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        ÊTRE L'<span className="font-bold">ŒUVRE D'ART</span>
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        La <span className="font-bold">voix du silence</span> est un musée qui cherche à être
                                        en lui-même une <span className="font-bold">œuvre d'art</span>, même si le bâtiment était vide.
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        En plus des œuvres créées par l'homme, le projet expose aussi
                                        <span className="font-bold">la Nature</span> comme la <span className="font-bold">pièce maîtresse</span>,
                                        représentée par la <span className="font-bold">végétation et les miroirs d'eau</span> encadrés par les <span className="font-bold">portiques.</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        THE <span className="font-bold">MUSEUM</span> THAT WANTED
                                    </p>
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        TO BE THE <span className="font-bold">WORK OF ART</span>
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The <span className="font-bold">voice of silence</span> is a museum that seeks to be
                                        a <span className="font-bold">work of art</span> in itself, even if the building were empty.
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Beyond the works made by man, the project also exhibits
                                        <span className="font-bold">Nature</span> as the <span className="font-bold">masterpiece</span>,
                                        represented by <span className="font-bold">vegetation and reflecting pools</span> framed by the <span className="font-bold">porticoes.</span>
                                    </p>
                                </div>
                            ),
                            
                            top:"4%", // 👈 misma altura que el otro texto
                            right:"45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },                        
                    ],
                },
                {
                    type: "image",
                    src: VS3,
                    texts: [
                    ]
                },
                {
                    type: "image",
                    src: VS4,
                    texts: [
                        {
                            es: (
                                <div className="text-[5px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Año:</span> 2025</p>
                                    <p><span className="font-bold">Tipo de encargo:</span> Concurso</p>
                                    <p><span className="font-bold">Tipo de proyecto:</span> Obra nueva</p>
                                    <p><span className="font-bold">Ubicación:</span> Desconocida</p>
                                    <p><span className="font-bold">Superficie:</span> 4.134 m²</p>
                                    <p><span className="font-bold">Fase del proyecto:</span> Diseño</p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[5px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Année :</span> 2025</p>
                                    <p><span className="font-bold">Type de commande :</span> Concours</p>
                                    <p><span className="font-bold">Type de projet :</span> Nouvelle construction</p>
                                    <p><span className="font-bold">Emplacement :</span> Inconnu</p>
                                    <p><span className="font-bold">Surface :</span> 4.134 m²</p>
                                    <p><span className="font-bold">Phase du projet :</span> Conception</p>
                                </div>
                            ),
                            en: (
                                <div className="text-[5px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Year :</span> 2025</p>
                                    <p><span className="font-bold">Type of commission:</span> Competition</p>
                                    <p><span className="font-bold">Project type:</span> New construction</p>
                                    <p><span className="font-bold">Location:</span> Unknown</p>
                                    <p><span className="font-bold">Area:</span> 4.134 m²</p>
                                    <p><span className="font-bold">Project phase:</span> Design</p>
                                </div>
                            ),
                            top: "7%", // 👈 misma altura que el otro texto
                            right: "65%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                    ],
                },
                {
                    type: "image",
                    src: VS5,
                    texts: [
                        {
                            
                            es: (
                                <div className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        UNA ARQUITECTURA DE
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">TRES MATERIALES</span> COMO
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">FRANK LLOYD WRIGHT</span> 
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        UNE ARCHITECTURE DE
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">TROIS MATÉRIAUX</span> COMME
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">FRANK LLOYD WRIGHT</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        AN ARCHITECTURE OF
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">THREE MATERIALS</span> LIKE
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">FRANK LLOYD WRIGHT</span>
                                    </p>
                                </div>
                            ),
                            top:"5%", // 👈 misma altura que el otro texto
                            right:"65%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                        
                    ],
                },
                {
                    type: "image",
                    src: VS6,
                    texts: [
                        {
                            
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">BLANCO</span> COMO SI
                                    </p>
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        DEL <span className="font-bold">MÁRMOL</span> DE
                                    </p>
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">MIGUEL ÁNGEL</span> SE
                                    </p>
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        TRATARA.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        MÊME UN <span className="font-bold">MUSÉE</span>
                                    </p>
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        VEUT <span className="font-bold">ÊTRE QUELQUE CHOSE DE PLUS.</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        EVEN A <span className="font-bold">MUSEUM</span>
                                    </p>
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        WANTS <span className="font-bold">TO BE SOMETHING MORE.</span>
                                    </p>
                                </div>
                            ),
                            top:"5%", // 👈 misma altura que el otro texto
                            right:"70%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },                        
                    ],
                },
                {
                    type: "image",
                    src: VS7,
                    texts: [
                        {
                            
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        HASTA UN <span className="font-bold">MUSEO</span>
                                    </p>
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        QUIERE <span className="font-bold">SER ALGO MÁS.</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        MÊME UN <span className="font-bold">MUSÉE</span>
                                    </p>
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        VEUT <span className="font-bold">ÊTRE QUELQUE CHOSE DE PLUS.</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        EVEN A <span className="font-bold">MUSEUM</span>
                                    </p>
                                    <p className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        WANTS <span className="font-bold">TO BE SOMETHING MORE.</span>
                                    </p>
                                </div>
                            ),
                            top:"3%", // 👈 misma altura que el otro texto
                            right:"65%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                    ],
                }
            ],
        },
        "el-odeon-esculpido": {
            title: "",
            description: {},
            media: [
                {
                    type: "image",
                    src: OE1,
                    texts: [
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        EL ODEÓN
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">ESCULPIDO</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        L'ODÉON
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">SCULPTÉ</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        THE ODEON
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">SCULPTED</span>
                                    </p>
                                </div>
                            ),
                            bottom: "90%",
                            right: "40%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        },
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, Más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-sx md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, Plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, More <span className="font-bold">meaning</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "-20%",
                            right: "27%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: OE2,
                    texts: [
                        {
                            es: (
                                <div className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Año:</span> 2025</p>
                                    <p><span className="font-bold">Tipo de encargo:</span> Concurso</p>
                                    <p><span className="font-bold">Tipo de proyecto:</span> Obra nueva</p>
                                    <p><span className="font-bold">Ubicación:</span> Desconocida</p>
                                    <p><span className="font-bold">Superficie:</span> 5.094 m²</p>
                                    <p><span className="font-bold">Fase del proyecto:</span> Diseño</p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Année :</span> 2025</p>
                                    <p><span className="font-bold">Type de commande :</span> Concours</p>
                                    <p><span className="font-bold">Type de projet :</span> Nouvelle construction</p>
                                    <p><span className="font-bold">Emplacement :</span> Inconnu</p>
                                    <p><span className="font-bold">Surface :</span> 5.094 m²</p>
                                    <p><span className="font-bold">Phase du projet :</span> Conception</p>
                                </div>
                            ),
                            en: (
                                <div className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p><span className="font-bold">Year :</span> 2025</p>
                                    <p><span className="font-bold">Type of commission:</span> Competition</p>
                                    <p><span className="font-bold">Project type:</span> New construction</p>
                                    <p><span className="font-bold">Location:</span> Unknown</p>
                                    <p><span className="font-bold">Area:</span> 5.094 m²</p>
                                    <p><span className="font-bold">Project phase:</span> Design</p>
                                </div>
                            ),
                            top: "5%", // 👈 misma altura que el otro texto
                            right: "55%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                    ],
                },
                {
                    type: "image",
                    src: OE3,
                    texts: [
                        
                    ],
                },
                {
                    type: "image",
                    src: OE4,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        El <span className="font-bold">concepto rector</span> del edificio se inspira 
                                        en <span className="font-bold">"El Mito de la Caverna"</span> de <span className="font-bold">Platón</span> representado por <span className="font-bold">accesos en penumbra</span> que contrastan con un espacio central de 8 metros de altura, 
                                        bañado por <span className="font-bold">luz</span> natural. Esta transición <span className="font-bold">luz-sombra</span> se repite al entrar y salir, especialmente en la sala de conferencias.
                                        Además, se resalta la <span className="font-bold">escalinata</span> de dicha sala mediante la <span className="font-bold">substracción del volumen exterior</span>, que se convierte en la <span className="font-bold">escalera de acceso</span> a sus distintos niveles.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Le <span className="font-bold">concept directeur</span> du bâtiment s’inspire
                                        du <span className="font-bold">« Mythe de la Caverne »</span> de <span className="font-bold">Platon</span>, représenté par des
                                        <span className="font-bold"> accès dans la pénombre</span> contrastant avec un espace central de 8 mètres de hauteur,
                                        baigné de <span className="font-bold">lumière</span> naturelle. Cette transition <span className="font-bold">lumière-ombre</span> se répète à l’entrée et à la sortie,
                                        notamment dans la salle de conférence.
                                        De plus, la <span className="font-bold">grande échelle</span> de cette salle est mise en valeur par la
                                        <span className="font-bold">soustraction du volume extérieur</span>, qui devient
                                        <span className="font-bold">l'escalier d'accès</span> à ses différents niveaux.
                                    </p>
                                </div>
                            ),
                            en: ( //text-[8px] xs:text-xs md:text-base leading-snug text-left text-black hace que las frases se adapten al tamaño de la pantalla
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The building's <span className="font-bold">main concept</span> is inspired by
                                        <span className="font-bold"> Plato's “Allegory of the Cave”</span>, represented through
                                        <span className="font-bold"> dimly lit entrances</span> that contrast with a central space
                                        8 meters high, bathed in natural <span className="font-bold">light</span>.
                                        This <span className="font-bold">light-shadow</span> transition is repeated upon entering and exiting,
                                        especially in the conference hall.
                                        In addition, the <span className="font-bold">grand staircase</span> of this hall is emphasized by the
                                        <span className="font-bold">subtraction of the exterior volume</span>, which becomes the
                                        <span className="font-bold">access stairway</span> to its different levels.
                                    </p>
                                </div>
                            ),
                            top: "15%", // 👈 misma altura que el otro texto
                            left: "28%", // 👈 alineado a la derecha
                            className:
                                "text-sm md:text-base text-white drop-shadow-md leading-snug",
                        },
                    ],
                },
                {
                    type: "image",
                    src: OE5,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        UNA <span className="font-bold">ARQUITECTURA </span>
                                            DE <span className="font-bold">CONTRASTES ESPACIALES.</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        La mejor forma de <span className="font-bold">resaltar un </span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">espacio,</span> es que le preceda un 
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        espacio <span className="font-bold">totalmente opuesto</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        UNE <span className="font-bold">ARCHITECTURE </span>
                                        DE <span className="font-bold">CONTRASTES SPATIAUX.</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        La meilleure façon de <span className="font-bold">mettre en valeur un </span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">espace</span> est qu’il soit précédé d’un
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        espace <span className="font-bold">totalement opposé</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        AN <span className="font-bold">ARCHITECTURE </span>
                                        OF <span className="font-bold">SPATIAL CONTRASTS.</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        The best way to <span className="font-bold">highlight a </span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">space</span> is to have it preceded by a
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">completely opposite</span> one.
                                    </p>
                                </div>
                            ),
                            top:"80%", // 👈 misma altura que el otro texto
                            left:"50%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: OE6,
                    texts: [],
                },
                {
                    type: "image",
                    src: OE7,
                    texts: [
                        {
                            
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">MENOS</span> ES <span className="font-bold">MEJOR</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">MOINS</span> C'EST <span className="font-bold">MIEUX</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">LESS</span> IS <span className="font-bold">BETTER</span>
                                    </p>
                                </div>
                            ),
                            top:"0%", // 👈 misma altura que el otro texto
                            right:"65%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                    ],
                },
                
            ],
        },
    },
    educational: {
        "escuela-primaria": {
            title: "",
            description: {
                //es: "Rehabilitación de un pequeño espacio para convertirlo en hogar, optimizando luz, ventilación y privacidad.",
                // en: "Rehabilitation of a small space to turn it into a home, optimizing light, ventilation, and privacy.",
            },
            media: [
                {
                    type: "image",
                    src: Pi1,
                    texts: [
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        ESCUELA PRIMARIA 
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        PI(<span className="font-bold">π</span>)
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        ÉCOLE PRIMAIRE
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        PI(<span className="font-bold">π</span>)
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        PRIMARY SCHOOL
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        PI(<span className="font-bold">π</span>)
                                    </p>
                                </div>
                            ),
                            bottom: "98%",
                            right: "35%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        },
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-3xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, Más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-3xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, Plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-3xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, More <span className="font-bold">meaning</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "-23%",
                            right: "27%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: Pi2,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        La escuela primaria  
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Pi, concebida como un
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        <span className="font-bold">prototipo</span> para responder a
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        la falta de de infraestructuras
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        educativas en las <span className="font-bold">regiones</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        <span className="font-bold">áridas</span>  de Senegal,
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        aplicaca principios de
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        <span className="font-bold">neuroarquitectura</span> para
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        favorecer el desarrollo y
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        bienestar infantil.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        L'école primaire
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Pi, conçue comme un
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">prototype</span> pour répondre au
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        manque d'infrastructures
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        éducatives dans les <span className="font-bold">régions</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">arides</span> du Sénégal,
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        applique des principes de
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">neuroarchitecture</span> afin de
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        favoriser le développement et
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        le bien-être des enfants.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        The Pi elementary school
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        conceived as a
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">prototype</span> to address the
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        lack of educational
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        infrastructure in the <span className="font-bold">arid</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">regions</span> of Senegal,
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        applies principles of
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">neuroarchitecture</span> to
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        promote the development and
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        well-being of children.
                                    </p>
                                </div>
                            ),
                            top:"20%", // 👈 misma altura que el otro texto
                            right:"60%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                    ],
                },
                {
                    type: "image",
                    src: Pi3,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        La <span className="font-bold">amplitud</span> de los
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        espacios, <span className="font-bold">la ventilacion</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        <span className="font-bold">natural</span> y el <span className="font-bold">contacto</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        <span className="font-bold">con el exterior</span> reducen
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        el <span className="font-bold">estres</span> y mejoran
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        la <span className="font-bold">concentracion</span>.
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        Pergolados de nipa o tifa
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        permiten clases al aire
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        libre, adaptándose al
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        clima. El diseño
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        promueve un entorno
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        <span className="font-bold">funcional</span>, <span className="font-bold">confortable</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black"> 
                                        y <span className="font-bold">estimulante</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        L'<span className="font-bold">ampleur</span> des espaces,
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        la <span className="font-bold">ventilation naturelle</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        et le <span className="font-bold">contact avec l'extérieur</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        réduisent le <span className="font-bold">stress</span> et améliorent
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        la <span className="font-bold">concentration</span>.
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Des pergolas en nipa ou en tifa
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        permettent des cours en plein air,
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        s'adaptant au climat.
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Le design promeut un environnement
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">fonctionnel</span>, <span className="font-bold">confortable</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        et <span className="font-bold">stimulant</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        The <span className="font-bold">spaciousness</span> of the areas,
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        the <span className="font-bold">natural ventilation</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        and <span className="font-bold">connection with the outdoors</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        reduce <span className="font-bold">stress</span> and improve
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">concentration</span>.
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Nipa or typha pergolas
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        allow for open-air classes,
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        adapting to the climate.
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        The design promotes a
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        <span className="font-bold">functional</span>, <span className="font-bold">comfortable</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        and <span className="font-bold">stimulating</span> environment.
                                    </p>
                                </div>
                            ),
                            top:"12%", // 👈 misma altura que el otro texto
                            right:"65%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                    ]
                },
                {
                    type: "image",
                    src: Pi4,
                    texts: [
                        {
                            es: (
                                <div className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Año:</span> 2025</p>
                                    <p><span className="font-bold">Funcion:</span> Educacion</p>
                                    <p><span className="font-bold">Tipo de proyecto:</span> Obra nueva</p>
                                    <p><span className="font-bold">Ubicación:</span> Senegal</p>
                                    <p><span className="font-bold">Superficie:</span> 758.96 m²</p>
                                    <p><span className="font-bold">Fase del proyecto:</span> Diseño</p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Année :</span> 2025</p>
                                    <p><span className="font-bold">Fonction :</span> Éducation</p>
                                    <p><span className="font-bold">Type de projet :</span> Nouvelle construction</p>
                                    <p><span className="font-bold">Emplacement :</span> Sénégal</p>
                                    <p><span className="font-bold">Surface :</span> 758,96 m²</p>
                                    <p><span className="font-bold">Phase du projet :</span> Conception</p>
                                </div>
                            ),
                            en: (
                                <div className="text-[6px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Year:</span> 2025</p>
                                    <p><span className="font-bold">Function:</span> Education</p>
                                    <p><span className="font-bold">Project type:</span> New construction</p>
                                    <p><span className="font-bold">Location:</span> Senegal</p>
                                    <p><span className="font-bold">Area:</span> 758.96 m²</p>
                                    <p><span className="font-bold">Project phase:</span> Design</p>
                                </div>
                            ),
                            top: "3%", // 👈 misma altura que el otro texto
                            right: "65%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                    ],
                },
                {
                    type: "image",
                    src: Pi5,
                    texts: [
                        {
                            
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Sus <span className="font-bold">muros de</span> 
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">tapia</span> anaranjados
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        estimulan la
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        <span className="font-bold">creatividad</span> , mientras
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        que las <span className="font-bold">lineas</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        <span className="font-bold">horizontales</span> y
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        <span className="font-bold">texturas naturales</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        aportan <span className="font-bold">calma</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Ses <span className="font-bold">murs en</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">pisé</span> orangés
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        stimulent la
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">créativité</span>, tandis que
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        les <span className="font-bold">lignes</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">horizontales</span> et
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        les <span className="font-bold">textures naturelles</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        apportent du <span className="font-bold">calme</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Its <span className="font-bold">rammed-earth</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">walls</span> in orange tones
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        stimulate
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">creativity</span>, while
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        the <span className="font-bold">horizontal</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">lines</span> and
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">natural textures</span>
                                    </p>
                                    <p className="text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        bring <span className="font-bold">calm</span>.
                                    </p>
                                </div>


                            ),
                            top:"5%", // 👈 misma altura que el otro texto
                            left:"0%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                    ],
                },
                {
                    type: "image",
                    src: Pi6,
                    texts: [
                        
                    ],
                },
                {
                    type: "image",
                    src: Pi7,
                    texts: [
                        {
                            
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        LA BUENA GESTION DE  <span className="font-bold">LA LUZ</span> 
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        <span className="font-bold"> NATURAL</span> , PEMIRTE TENER
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        ESPACIOS QUE NO NECESITEN
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white"> 
                                        DE <span className="font-bold">ILUMINACION ARTIFICIAL</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        LA BONNE GESTION DE <span className="font-bold">LA LUMIÈRE</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">NATURELLE</span> PERMET D'AVOIR
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        DES ESPACES QUI N'ONT PAS BESOIN
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        D'<span className="font-bold">ÉCLAIRAGE ARTIFICIEL</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        GOOD MANAGEMENT OF <span className="font-bold">LIGHT</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">NATURAL</span> LIGHT ALLOWS FOR
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        SPACES THAT DO NOT REQUIRE
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        <span className="font-bold">ARTIFICIAL LIGHTING</span>
                                    </p>
                                </div>

                            ),
                            top:"5%", // 👈 misma altura que el otro texto
                            left:"10%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                        {
                            
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        EL TABURETE <span className="font-bold">"TOKU"</span>
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Diseñamos el taburete <span className="font-bold">toku</span> , que ofrece un <span className="font-bold">asiento</span> con un <span className="font-bold">espacio de almacenamiento</span> integrado, permitiendo que los niños acedan y guarden sus materiales.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        LE TABOURET <span className="font-bold">"TOKU"</span>
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Nous avons conçu le tabouret <span className="font-bold">Toku</span>, qui offre un <span className="font-bold">siège</span> avec un <span className="font-bold">espace de rangement</span> intégré, permettant aux enfants d’accéder à leurs matériaux et de les ranger.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        THE <span className="font-bold">"TOKU"</span> STOOL
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        We designed the <span className="font-bold">Toku</span> stool, which offers a <span className="font-bold">seat</span> with an integrated <span className="font-bold">storage space</span>, allowing children to access and store their materials.
                                    </p>
                                </div>
                            ),
                            top:"65%", // 👈 misma altura que el otro texto
                            right:"45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                        
                    ],
                }
            ],
        },
    },
    residential: {
        "el-cubo": {
            title: "",
            description: {
                //es: "Rehabilitación de un pequeño espacio para convertirlo en hogar, optimizando luz, ventilación y privacidad.",
                // en: "Rehabilitation of a small space to turn it into a home, optimizing light, ventilation, and privacy.",
            },
            media: [
                {
                    type: "image",
                    src: elcubo1,
                    texts: [
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        EL
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">CUBO</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LE
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">CUBE</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        THE
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">CUBE</span>
                                    </p>
                                </div>
                            ),
                            bottom: "80%",
                            right: "40%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        },
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, Más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-sx md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, Plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, More <span className="font-bold">meaning</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "10%",
                            right: "27%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: elcubo2,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        El proyecto es un encargo de parte de una
                                        amiga de la infancia que queria un hogar
                                        en el que <span className="font-bold">emanciparse</span> e <span className="font-bold">iniciar</span> su propia <span className="font-bold">historia</span>.
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        El proyecto se desarrolla en los vestigios de lo que iban a ser unas tiendas. Por lo
                                            que se trata de una <span className="font-bold">rehabilitación</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Le projet est une commande de la part d'une
                                        amie de la infancia qui voulait une maison
                                        dans laquelle <span className="font-bold">s'émanciper</span> et <span className="font-bold">initier</span> sa propre <span className="font-bold">histoire</span>.
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Le projet se développe dans les vestiges de ce qui devait être des magasins. Par conséquent,
                                        il s'agit d'une <span className="font-bold">réhabilitation</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        The project is a commission from a childhood friend who wanted a home in which to <span className="font-bold">emancipate</span> herself and <span className="font-bold">initiate</span> her own <span className="font-bold">story</span>.
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        The <span className="font-bold">project</span> is developed on the remnants of what were meant to be shops, making it a <span className="font-bold">rehabilitation</span>.
                                    </p>
                                </div>
                            ),
                            
                            top:"2%", // 👈 misma altura que el otro texto
                            right:"45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: elcubo3,
                    texts: [
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Año:</span> 2025</p>
                                    <p><span className="font-bold">Tipo de proyecto:</span> Rehabilitación</p>
                                    <p><span className="font-bold">Ubicación:</span> San José/Guinea Ecuatorial</p>
                                    <p><span className="font-bold">Superficie:</span> 64.50 m²</p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Année:</span> 2025</p>
                                    <p><span className="font-bold">Type de projet:</span> Rehabilitation</p>
                                    <p><span className="font-bold">Emplacement:</span> San José/Guinea Ecuatorial</p>
                                    <p><span className="font-bold">Superficie:</span> 64.50 m²</p>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Year:</span> 2025</p>
                                    <p><span className="font-bold">Project type:</span> Rehabilitation</p>
                                    <p><span className="font-bold">Location:</span> San José/Equatorial Guinea</p>
                                    <p><span className="font-bold">Area:</span> 64.50 m²</p>
                                </div>
                            ),
                            top: "8%", // 👈 misma altura que el otro texto
                            right: "2%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Todo el proyecto gira entorno al <span className="font-bold">desafío</span> de
                                        resolver el <span className="font-bold">programa de necesidades</span> en
                                        un <span className="font-bold">espacio</span> tan <span className="font-bold">reducido</span> y a su vez <span className="font-bold">ventilar</span> e
                                        <span className="font-bold"> iluminar naturalmente</span>, sin prescindir de la
                                        <span className="font-bold">privacidad</span>, ya que el proyecto se ubica en
                                        un <span className="font-bold">área no parcelada</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Tout le projet tourne autour du <span className="font-bold">défi</span> de
                                        résoudre le <span className="font-bold">programme des besoins</span> dans
                                        un <span className="font-bold">espace</span> si <span className="font-bold">réduit</span> et en même temps <span className="font-bold">ventiler</span> et
                                        <span className="font-bold">éclairer naturellement</span>, sans renoncer à la
                                        <span className="font-bold">vie privée</span>, car le projet se situe dans
                                        une <span className="font-bold">zone non lotie</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The entire project revolves around the <span className="font-bold">challenge</span> of
                                        accommodating the <span className="font-bold">requirements program</span> in such
                                        a <span className="font-bold">small space</span> while ensuring <span className="font-bold">ventilation </span>
                                        & <span className="font-bold">natural lighting</span>, without sacrificing
                                        <span className="font-bold">privacy</span>, since the project is located in
                                        an <span className="font-bold">unparceled area</span>.
                                    </p>
                                </div>
                            ),
                            
                            top:"30%", // 👈 misma altura que el otro texto
                            right:"45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                    ]
                },
                {
                    type: "image",
                    src: elcubo4,
                    texts: [
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "EN <span className="font-bold">LESS +</span> HACEMOS
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">MUCHO</span> CON <span className="font-bold">POCO</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-whitet">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "CHEZ <span className="font-bold">LESS +</span>, NOUS FAISONS
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">BEAUCOUP</span> AVEC <span className="font-bold">PEU</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "IN <span className="font-bold">LESS +</span> WE DO <span className="font-bold">A LOT</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        WITH <span className="font-bold">LITTLE</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "10%", //para subir el texto segun sea necesario
                            right: "5%",
                            className: "drop-shadow-md", // 👈 ahora solo aplicas sombra aquí
                        },
                    ],
                },
                {
                    type: "image",
                    src: elcubo5,
                    texts: [
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "TODA <span className="font-bold">GRAN</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        HISTORIA INICIA CON
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        UN <span className="font-bold">PASO PEQUEÑO</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "CHAQUE <span className="font-bold">GRANDE</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        HISTOIRE COMMENCE PAR
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        UN <span className="font-bold">PETIT PAS</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "EVERY <span className="font-bold">GREAT</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        STORY BEGINS WITH
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        A <span className="font-bold">SMALL STEP</span>"
                                    </p>
                                </div>
                            ),
                            bottom: "10%", //para subir el texto segun sea necesario
                            right: "5%",
                            className: "drop-shadow-md", // 👈 ahora solo aplicas sombra aquí
                        },
                    ],
                }
            ],
        },
        "casa-patio": {
            title: "",
            description: {},
            media: [
                {
                    type: "image",
                    src: casapatio1,
                    texts: [
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        CASA
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">PATIO</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        MAISON
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">PATIO</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        HOUSE
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">PATIO</span>
                                    </p>
                                </div>
                            ),
                            bottom: "80%",
                            right: "40%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        },
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, Más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-sx md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, Plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, More <span className="font-bold">meaning</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "10%",
                            right: "25%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                            
                        }
                    ],
                },
                {
                    type: "image",
                    src: casapatio2,
                    texts: [
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Año:</span> 2024</p>
                                    <p><span className="font-bold">Tipo de proyecto:</span> Obra nueva</p>
                                    <p><span className="font-bold">Ubicación:</span> Nguekokh / Senegal</p>
                                    <p><span className="font-bold">Superficie:</span> 364.73 m²</p>
                                    <p><span className="font-bold">Fase del proyecto:</span> Diseño</p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Année:</span> 2024</p>
                                    <p><span className="font-bold">Type de projet:</span> New construction</p>
                                    <p><span className="font-bold">Emplacement:</span> Nguekokh / Senegal</p>
                                    <p><span className="font-bold">Superficie:</span> 364.73 m²</p>
                                    <p><span className="font-bold">Phase du project:</span> Conception</p>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Year:</span> 2024</p>
                                    <p><span className="font-bold">Project type:</span> Rehabilitation</p>
                                    <p><span className="font-bold">Location:</span> San José/Equatorial Guinea</p>
                                    <p><span className="font-bold">Area:</span> 364.73 m²</p>
                                    <p><span className="font-bold">Project phase:</span> Design</p>
                                </div>
                            ),
                            top: "8%", // 👈 misma altura que el otro texto
                            right: "2%", // 👈 alineado a la derecha
                            className:
                                "text-xs md:text-base text-white drop-shadow-md leading-snug",
                        },
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[9px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        "EL <span className="font-bold">EQUILIBRIO</span>
                                        <br className="block md:hidden" /> Y
                                        <span className="font-bold"> ARMONIA</span>
                                        <br className="block md:hidden" /> ENTRE
                                        <br className="block md:hidden" />
                                        <span className="font-bold"> PRESENTE </span>Y
                                        <br className="block md:hidden" />
                                        <span className="font-bold"> PASADO</span> ES
                                        <br className="block md:hidden" />POSIBLE”
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Los acabados en <span className="font-bold">materiales naturales</span> como el <span className="font-bold">chukún</span> y la <span className="font-bold">piedra</span> son el broche con el que se consuma la intención.
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        El contraste en la fachada entre la planta baja y la primera planta representa la armonía entre lo <span className="font-bold">vernacular</span> (representado por la <span className="font-bold">piedra</span>) y lo <span className="font-bold">contemporáneo</span> (representado por el <span className="font-bold">blanco del chukún</span>). Y la elección se basa en el sentido <span className="font-bold">ornamental</span> representado por la <span className="font-bold">rugosidad</span> de la piedra y la tendencia a una <span className="font-bold">omogeneidad</span> contemporánea que tiende cada vez más al <span className="font-bold">minimalísmo</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        "L'<span className="font-bold">ÉQUILIBRE</span>
                                        <br className="block md:hidden" /> ET
                                        <span className="font-bold"> L'HARMONIE</span>
                                        <br className="block md:hidden" /> ENTRE
                                        <br className="block md:hidden" />
                                        <span className="font-bold"> PRÉSENT </span>ET
                                        <br className="block md:hidden" />
                                        <span className="font-bold"> PASSÉ</span> SONT
                                        <br className="block md:hidden" />POSSIBLES”
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Les finitions en <span className="font-bold">matériaux naturels</span> tels que le <span className="font-bold">chukún</span> et la <span className="font-bold">pierre</span> sont la touche finale qui concrétise l’intention.
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Le contraste sur la façade entre le rez-de-chaussée et le premier étage représente l’harmonie entre le <span className="font-bold">vernaculaire</span> (représenté par la <span className="font-bold">pierre</span>) et le <span className="font-bold">contemporain</span> (représenté par le <span className="font-bold">blanc du chukún</span>). Ce choix repose sur le sens <span className="font-bold">ornemental</span> représenté par la <span className="font-bold">rugosité</span> de la pierre et la tendance vers une <span className="font-bold">homogénéité</span> contemporaine qui tend de plus en plus vers le <span className="font-bold">minimalisme</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        "THE <span className="font-bold">BALANCE</span>
                                        <br className="block md:hidden" /> AND
                                        <span className="font-bold"> HARMONY</span>
                                        <br className="block md:hidden" /> BETWEEN
                                        <br className="block md:hidden" />
                                        <span className="font-bold"> PRESENT </span>AND
                                        <br className="block md:hidden" />
                                        <span className="font-bold"> PAST</span> IS
                                        <br className="block md:hidden" />POSSIBLE”
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The finishes in <span className="font-bold">natural materials</span> such as <span className="font-bold">chukún</span> and <span className="font-bold">stone</span> are the final touch that fulfills the design’s intent.
                                    </p>
                                    <p className="mt-2 md:mt-4 text-[7px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The contrast on the façade between the ground floor and the first floor represents the harmony between the <span className="font-bold">vernacular</span> (represented by the <span className="font-bold">stone</span>) and the <span className="font-bold">contemporary</span> (represented by the <span className="font-bold">white of the chukún</span>). The choice is based on the <span className="font-bold">ornamental</span> sense represented by the <span className="font-bold">roughness</span> of the stone and the contemporary tendency towards an increasing <span className="font-bold">homogeneity</span> that moves closer and closer to <span className="font-bold">minimalism</span>.
                                    </p>
                                </div>
                            ),
                            top:"32%", // 👈 misma altura que el otro texto
                            right:"45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: casapatio3,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        El proyecto remite a la concepción de una vivienda unifamiliar
                                        que prioriza los <span className="font-bold">patios interiores</span> y los convierte en la
                                        <span className="font-bold"> piedra angular</span> del proyecto por medio del cual intento
                                        reconstruir el <span className="font-bold"> hombre y la naturaleza </span>
                                        usando la vínculo entre el <span className="font-bold">continuidad visual</span> hacia la
                                        vegetación como herramienta de <span className="font-bold"> reconexión</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Le projet renvoie à la conception d'une maison unifamiliale
                                        qui privilégie les <span className="font-bold">cours intérieures</span> et les transforme en la
                                        <span className="font-bold"> pierre angulaire</span> du projet, par lequel je cherche à reconstruire le
                                        <span className="font-bold"> lien entre l’homme et la nature </span>
                                        en utilisant la <span className="font-bold">continuité visuelle</span> vers la
                                        végétation comme outil de <span className="font-bold">reconnexion</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The project refers to the conception of a single-family house
                                        that prioritizes the <span className="font-bold">interior courtyards</span> and turns them into the
                                        <span className="font-bold"> cornerstone</span> of the project, through which I aim to rebuild the
                                        <span className="font-bold"> bond between man and nature </span>
                                        using <span className="font-bold">visual continuity</span> toward the
                                        vegetation as a tool for <span className="font-bold">reconnection</span>.
                                    </p>
                                </div>
                            ),
                            
                            top: "75%", // 👈 misma altura que el otro texto
                            right: "45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        },
                    ],
                },
                { 
                    type: "image", 
                    src: casapatio4 
                },
                {
                    type: "image",
                    src: casapatio5,
                    texts: [
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "EN <span className="font-bold">LESS +</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">PENSAMOS</span> PARA QUE
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">VIVAS MEJOR</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "EN <span className="font-bold">MOINS +</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        NOUS <span className="font-bold">RÉFLÉCHISSONS</span> POUR QUE VOUS
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">VIVIEZ MIEUX</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "IN <span className="font-bold">LESS +</span>
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        WE <span className="font-bold">THINK</span> SO YOU CAN
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">LIVE BETTER</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "10%", //para subir el texto segun sea necesario
                            right: "5%",
                            className: "drop-shadow-md", // 👈 ahora solo aplicas sombra aquí
                        },
                    ],
                },
            ],
        },
        "casa-genesis": {
            title: "",
            description: {},
            media: [
                {
                    type: "image",
                    src: casagenesis1,
                    texts: [
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        CASA
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">GÉNESIS</span>
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        MAISON
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">GÉNESIS</span>
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        HOUSE
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        <span className="font-bold">GÉNESIS</span>
                                    </p>
                                </div>
                            ),
                            bottom: "80%",
                            right: "40%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        },
                        {
                            es: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, Más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, Plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold"> +</span>
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, More <span className="font-bold">meaning</span>”
                                    </p>
                                </div>
                            ),
                            bottom: "10%",
                            right: "25%",
                            transform: "translateX(10%)",
                            className: "drop-shadow-md",
                        }
                    ],
                },
                {
                    type: "image",
                    src: casagenesis2,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        La <span className="font-bold">Casa Génesis</span> fue nuestro <span className="font-bold">primer</span> encargo.
                                        Nace de la necesidad de un entorno en el cual iniciar una <span className="font-bold">familia</span>,
                                        de ahí el nombre ya que el proyecto representaba el <span className="font-bold">comienzo</span>
                                        de una etapa tanto para mí como para mis clientes.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        La <span className="font-bold">Casa Génesis</span> fut notre <span className="font-bold">première</span> commande.
                                        Elle est née du besoin d’un environnement dans lequel fonder une <span className="font-bold">famille</span>,
                                        d’où son nom, puisque le projet représentait le <span className="font-bold">commencement</span>
                                        d’une étape autant pour moi que pour mes clients.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The <span className="font-bold">Génesis House</span> was our <span className="font-bold">first</span> commission.
                                        It was born from the need for an environment in which to start a <span className="font-bold">family</span>,
                                        hence the name, as the project represented the <span className="font-bold">beginning</span>
                                        of a new stage for both me and my clients.
                                    </p>
                                </div>
                            ),
                            
                            top: "10%", // 👈 misma altura que el otro texto
                            right: "45%", // 👈 alineado a la derecha
                            className: "drop-shadow-md",
                        }
                    ]
                },
                {
                    type: "image",
                    src: casagenesis3,
                    texts: [
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Año:</span> 2024</p>
                                    <p><span className="font-bold">Tipo de proyecto:</span> Obra nueva</p>
                                    <p><span className="font-bold">Ubicación:</span> Malabo / Guinea Ecuatorial</p>
                                    <p><span className="font-bold">Superficie:</span> 328.64 m²</p>
                                    <p><span className="font-bold">Fase del proyecto:</span> Diseño</p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Année:</span> 2024</p>
                                    <p><span className="font-bold">Type de projet:</span> Construction neuve</p>
                                    <p><span className="font-bold">Localisation :</span> Malabo / Guinée équatoriale</p>
                                    <p><span className="font-bold">Superficie:</span> 328.64 m²</p>
                                    <p><span className="font-bold">Phase du projet :</span> Conception</p>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p><span className="font-bold">Year:</span> 2024</p>
                                    <p><span className="font-bold">Project type:</span> New construction</p>
                                    <p><span className="font-bold">Location:</span> Malabo / Equatorial Guinea</p>
                                    <p><span className="font-bold">Area:</span> 328.64 m²</p>
                                    <p><span className="font-bold">Project phase:</span> Design</p>
                                </div>
                            ),
                            top: "5%", // 👈 misma altura que el otro texto
                            left: "52%", // 👈 alineado a la derecha
                            className:
                                "text-sm md:text-base text-white drop-shadow-md leading-snug",
                        },
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        La estructura del proyecto se ve determinada por la <span className="font-bold">irregularidad del terreno</span>,
                                        a lo que respondo con una <span className="font-bold">columna vertebral </span>
                                        de la cual emanan <span className="font-bold">ramificaciones</span> entre las cuales nacen
                                        los <span className="font-bold">patios interiores</span>.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        La structure du projet est déterminée par <span className="font-bold">l'irrégularité du terrain</span>,
                                        à laquelle je réponds avec une <span className="font-bold">colonne vertébrale</span>
                                        dont émanent des <span className="font-bold">ramifications</span> au sein desquelles naissent
                                        les <span className="font-bold">cours intérieures</span>.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        The structure of the project is determined by the <span className="font-bold">irregularity of the terrain</span>,
                                        to which I respond with a <span className="font-bold">spine column </span>
                                        from which <span className="font-bold">branches</span> emerge, among which the <span className="font-bold">interior courtyards</span> are born.
                                    </p>
                                </div>
                            ),
                            top: "18%", // 👈 misma altura que el otro texto
                            left: "52%", // 👈 alineado a la derecha
                            className:
                                "text-sm md:text-base text-white drop-shadow-md leading-snug",
                        },
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        El proyecto se desarrolla en un <span className="font-bold">entorno tropical</span>,
                                        para lo cual exige como respuesta obligatoria, <span className="font-bold">la ventilación cruzada</span> y una altura interior considerable, detalles que entran en escena en cada espacio del proyecto.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        Le projet se développe dans un <span className="font-bold">environnement tropical</span>,
                                        pour lequel une réponse obligatoire est exigée <span className="font-bold">la ventilation croisée</span> et une hauteur intérieure considérable, des détails qui interviennent dans chaque espace du projet.
                                    </p>
                                </div>
                            ),
                            en: ( //text-[8px] xs:text-xs md:text-base leading-snug text-left text-black hace que las frases se adapten al tamaño de la pantalla
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-white">
                                        The project is developed in a <span className="font-bold">tropical environment</span>,
                                        which requires as a mandatory response <span className="font-bold">cross ventilation</span> & a considerable interior height, details that come into play in every space of the project.
                                    </p>
                                </div>
                            ),
                            top: "45%", // 👈 misma altura que el otro texto
                            left: "45%", // 👈 alineado a la derecha
                            className:
                                "text-sm md:text-base text-white drop-shadow-md leading-snug",
                        },
                    ],
                },
                {
                    type: "image",
                    src: casagenesis4,
                    texts: [
                        {
                            es: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        En base al programa de necesidades de los clientes, el proyecto establece una palpable
                                        <span className="font-bold"> jerarquía espacial</span>, de modo que cuanto más profundizas en el terreno, más conectas con los espacios privados.
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Sur la base du programme des besoins des clients, le projet établit une palpable
                                        <span className="font-bold"> hiérarchie spatiale</span>, de sorte que plus on avance dans le terrain, plus on se connecte aux espaces privés.
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="max-w-xs md:max-w-md px-2 md:px-4 text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-left text-black">
                                        Based on the clients’ program of requirements, the project establishes a palpable
                                        <span className="font-bold"> spatial hierarchy</span>, so that the deeper you go into the site, the more you connect with the private spaces.
                                    </p>
                                </div>
                            ),
                            
                            top: "-2.5%", // 👈 misma altura que el otro texto
                            right: "45%", // 👈 alineado a la derecha
                            className: "text-sm md:text-base text-white drop-shadow-md leading-snug",
                        }
                    ]
                },
                {
                    type: "image",
                    src: casagenesis5,
                    texts: [
                        {
                            es: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "UN <span className="font-bold">HOGAR </span> QUE
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">CRECE</span> CON <span className="font-bold">ELLOS</span>"
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                            "UN <span className="font-bold">FOYER </span> QUI
                                        </p>
                                        <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                            <span className="font-bold">GRANDIT</span> AVEC <span className="font-bold">EUX</span>"
                                        </p>
                                    </div>
                                </div>
                            ),
                            en: (
                                <div className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        "A <span className="font-bold">HOME </span> THAT
                                    </p>
                                    <p className="text-[8px] xs:text-xs md:text-base leading-snug text-right text-white">
                                        <span className="font-bold">GROWS</span> WHIT <span className="font-bold">THEM</span>"
                                    </p>
                                </div>
                            ),
                            bottom: "10%", //para subir el texto segun sea necesario
                            right: "5%",
                            className: "drop-shadow-md", // 👈 ahora solo aplicas sombra aquí
                        },
                    ],
                },
            ],
        },
    },
};

export function ProjectDetail() {
    const { t, language } = useLanguage();
    const { category, slug } = useParams();

    const project = category && slug ? projectsDetails[category]?.[slug] : null;

    if (!project) {
        return <div className="text-center py-20">{t("projects.noProjects")}</div>;
    }

    return (
        <div className="bg-white min-h-screen">
            <Header onNavigate={() => window.history.back()} />
            <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-12">
                    {project.description[language]}
                </p>
                <div className="flex flex-col gap-12">
                    {project.media.map((item, index) => (
                        <div key={index} className="relative">
                            {item.type === "image" ? (
                                <img
                                    src={item.src}
                                    alt=""
                                    className="w-full h-auto object-cover"
                                />
                            ) : (
                                <video controls className="w-full rounded-2xl shadow-md">
                                    <source src={item.src} type="video/mp4" />
                                </video>
                            )}
                            {item.texts &&
                                item.texts.map((text, i) => (
                                    <span
                                        key={i}// para sacar el fondo de las letras elimino el bg-black/40
                                        className={`absolute  px-3 py-2 rounded-lg ${text.className ?? ""
                                            }`}
                                        style={{
                                            top: text.top,
                                            bottom: text.bottom,
                                            left: text.left,
                                            right: text.right,
                                            transform: text.transform,
                                        }}
                                    >
                                        {text[language]}
                                    </span>
                                ))}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
