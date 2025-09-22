import { useState } from 'react';

interface ProjectImage {
    src: string;
    title: string;
    description: string;
    textPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

interface ProjectCardProps {
    title: string;
    category: string;
    images: ProjectImage[];
    onImageClick?: (imageIndex: number) => void;
}

export function ProjectCard({ title, category, images, onImageClick }: ProjectCardProps) {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    const getTextClasses = (position: ProjectImage['textPosition']) => {
        const baseClasses = "absolute p-4 text-text-inverse transition-base";

        switch (position) {
            case 'top-left':
                return `${baseClasses} top-0 left-0`;
            case 'top-right':
                return `${baseClasses} top-0 right-0 text-right`;
            case 'bottom-left':
                return `${baseClasses} bottom-0 left-0`;
            case 'bottom-right':
                return `${baseClasses} bottom-0 right-0 text-right`;
            case 'center':
                return `${baseClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center`;
            default:
                return `${baseClasses} bottom-0 left-0`;
        }
    };
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
                <p className="text-text-muted text-sm uppercase tracking-wide">{category}</p>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className="relative w-full break-inside-avoid mb-6 group cursor-pointer block"
                        onClick={() => onImageClick?.(index)}
                        onMouseEnter={() => setHoveredImage(index)}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-auto object-cover transition-base group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className={`absolute inset-0 bg-black transition-base ${hoveredImage === index ? 'bg-opacity-40' : 'bg-opacity-20'
                                }`} />
                            {/* Text Content */}
                            <div className={getTextClasses(image.textPosition)}>
                                <h4 className="font-bold text-lg mb-1">{image.title}</h4>
                                <p className="text-sm opacity-90">{image.description}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}