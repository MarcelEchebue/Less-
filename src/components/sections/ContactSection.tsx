import { Mail, MapPin, Phone, Send, Instagram, Youtube } from "lucide-react";
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

    return (
        <div className="min-h-screen flex flex-col bg-surface-warm">
            <Header />

            <section id="contact" className="bg-surface-warm py-20">
                <main className="flex-1 pt-32 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary tracking-wider mb-6">
                                {t("contact.title")}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Contact Info */}
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
                                            <p className="text-text-secondary">didierych@gmail.com</p>
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
                                            <p className="text-text-secondary">+240 222 279 214</p>
                                            <p className="text-text-secondary">+240 555 879 218</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Netlify Contact Form */}
                            <div className="bg-surface-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-brand-primary mb-8">
                                    {t("contact.form.title")}
                                </h3>


                                <form
                                    name="contact"
                                    method="POST"
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    className="space-y-6"
                                    onSubmit={e => {
                                        e.preventDefault();
                                        const form = e.currentTarget; // currentTarget evita error TS con reset()
                                        const formData = new FormData(form);
                                        const formDataEncoded = new URLSearchParams(
                                            Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
                                        );
                                        fetch("/", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                            body: formDataEncoded.toString(),
                                        })
                                            .then(() => {
                                                toast({
                                                    title: t("contact.form.successTitle"),
                                                    description: t("contact.form.successMessage"),
                                                });
                                                form.reset();
                                            })
                                            .catch(() => {
                                                toast({
                                                    title: "❌ Error",
                                                    description: "No se pudo enviar el mensaje, inténtalo más tarde.",
                                                    variant: "destructive",
                                                });
                                            });
                                    }}
                                >
                                    {/* Campo oculto obligatorio para Netlify */}
                                    <input type="hidden" name="form-name" value="contact" />

                                    {/* Honeypot para bots */}
                                    <p className="hidden">
                                        <label>
                                            Don’t fill this out if you’re human: <input name="bot-field" />
                                        </label>
                                    </p>

                                    {/* Inputs estilizados */}
                                    <Input type="text" name="name" placeholder={t("contact.form.name")} required />
                                    <Input type="email" name="email" placeholder={t("contact.form.email")} required />
                                    <Textarea name="message" placeholder={t("contact.form.message")} required rows={6} />

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

            <footer className="bg-surface-white mt-20 py-8">
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-sm text-gray-500">{t("social_media_reserved")}</p>
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/less.mas" target="_blank" rel="noopener noreferrer">
                            <Instagram className="text-brand-primary hover:text-brand-accent" size={28} />
                        </a>
                        <a href="https://www.tiktok.com/@less.mas" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-7 h-7">
                                <path d="M224 72.45a72.1 72.1 0 0 1-40-12.07V160a64 64 0 1 1-64-64 8 8 0 0 1 0 16 48 48 0 1 0 48 48V32a8 8 0 0 1 12.42-6.72A56.09 56.09 0 0 0 224 72a8 8 0 0 1 0 16Z" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@lessmasddr" target="_blank" rel="noopener noreferrer">
                            <Youtube className="text-brand-primary hover:text-brand-accent" size={28} />
                        </a>
                        <a href="mailto:didierych@gmail.com">
                            <Mail className="text-brand-primary hover:text-brand-accent" size={28} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500">
                        ERO © {new Date().getFullYear()} {t("web_dev_reserved")}
                    </p>
                </div>
            </footer>
        </div>
    );
}