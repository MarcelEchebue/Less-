import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
// Importar imágenes
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

export const projectsDetails = {
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
                                        LESS<span className="font-bold">+</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-sx md:text-4xl font-light text-black">
                                        LESS<span className="font-bold">+</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold">+</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, more <span className="font-bold">meaning</span>”
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
                                        LESS<span className="font-bold">+</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-sx md:text-4xl font-light text-black">
                                        LESS<span className="font-bold">+</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold">+</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, more <span className="font-bold">meaning</span>”
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
                { type: "image", src: casapatio4 },
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
                                        LESS<span className="font-bold">+</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Menos <span className="font-bold">forma</span>, más <span className="font-bold">significado</span>”
                                    </p>
                                </div>
                            ),
                            fr: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        LESS<span className="font-bold">+</span>
                                    </p>
                                    <p className="text-xs md:text-2xl font-light text-black">
                                        “Moins de <span className="font-bold">forme</span>, plus de <span className="font-bold">sens</span>”
                                    </p>
                                </div>
                            ),
                            en: (
                                <div className="flex flex-col text-center">
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        THE
                                    </p>
                                    <p className="text-xs md:text-4xl font-light text-black">
                                        “Less <span className="font-bold">form</span>, more <span className="font-bold">meaning</span>”
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
                            top: "6%", // 👈 misma altura que el otro texto
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
