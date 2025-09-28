import { Mail, MapPin, Phone, Send, Instagram, Linkedin, Youtube, Github } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";

interface ContactSectionProps {
    onNavigate: (section: string) => void;
}

export default function ContactSection({ onNavigate }: ContactSectionProps) {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí conectarías con tu backend (fetch/axios)
        toast({
            title: t("contact.form.successTitle"),
            description: t("contact.form.successMessage"),
        });
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-surface-warm">
            {/* ✅ Header fijo */}
            <Header />

            {/* Contenido principal */}
            <section id="contact" className="bg-surface-warm py-20">
                <main className="flex-1 pt-32 px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Título */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary tracking-wider mb-6">
                                {t("contact.title")}
                            </h2>
                        </div>

                        {/* Grid de información + formulario */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* 📍 Información de contacto */}
                            <div className="space-y-12">
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                                            <MapPin className="text-text-inverse" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-brand-primary mb-2">
                                                {t("contact.address")}
                                            </h4>
                                            <p className="text-text-secondary">
                                                Dakar, Sénégal <br />
                                                Malabo, Guinea Ecuatorial
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                                            <Mail className="text-text-inverse" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-brand-primary mb-2">
                                                {t("contact.email")}
                                            </h4>
                                            <p className="text-text-secondary">
                                                info@lessmas.es
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                                            <Phone className="text-text-inverse" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-brand-primary mb-2">
                                                {t("contact.phone")}
                                            </h4>
                                            <p className="text-text-secondary">+221 76 302 28 90</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 📝 Formulario de contacto */}
                            <div className="bg-surface-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-brand-primary mb-8">
                                    {t("contact.form.title")}
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder={t("contact.form.name")}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-4 border-border focus:border-brand-primary"
                                    />

                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder={t("contact.form.email")}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-4 border-border focus:border-brand-primary"
                                    />

                                    <Textarea
                                        name="message"
                                        placeholder={t("contact.form.message")}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full p-4 border-border focus:border-brand-primary resize-none"
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full bg-brand-primary hover:bg-interactive-hover text-text-inverse py-4 text-lg font-medium transition-base group"
                                    >
                                        <span>{t("contact.form.send")}</span>
                                        <Send className="ml-2 group-hover:translate-x-1 transition-base" size={18} />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            {/* ✅ Footer con redes sociales */}
            <footer className="bg-surface-white mt-20 py-8">
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-sm text-gray-500">
                        ERO © {new Date().getFullYear()}
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/mmbila.e" target="_blank" rel="noopener noreferrer">
                            <Instagram className="text-brand-primary hover:text-brand-accent" size={28} />
                        </a>
                        <a href="https://github.com/MarcelEchebue" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
                            <Github size={28} />
                        </a>
                        <a href="mailto:echebuemarcelino@gmail.com">
                            <Mail className="text-brand-primary hover:text-brand-accent" size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/marcelino-ebang-echebue-3920181a3" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="text-brand-primary hover:text-brand-accent" size={28} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500">
                        Web Developper  
                    </p>
                </div>
            </footer>
        </div>
    );
}
