"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/thercal6.jpg"
          alt="Fond formulaire de contact"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(224,247,255,0.9),_rgba(255,255,255,0.96))]" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <SectionHeader />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center animate-fade-in-up">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Contactez-nous
      </h2>
      <p className="text-lg text-gray-700">
        Une question ? Un projet ? N'hésitez pas à nous contacter
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md"></span>
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"></span>
        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md"></span>
      </div>
    </div>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire avec fichiers
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Fichiers joints:", files);
    setIsSubmitting(false);
    setFiles([]);
    alert("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
  };

  return (
    <Card className="shadow-2xl border-blue-200 bg-white/95 backdrop-blur-md animate-fade-in-up stagger-1 overflow-hidden group hover:shadow-cyan-500/30 smooth-transition relative">
      {/* Bordure animée au hover */}
      <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-blue-500/0 opacity-0 group-hover:opacity-100 smooth-transition" style={{ height: '3px' }} />
      
      <CardHeader className="pb-4 border-b border-blue-100 relative">
        <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
          <Send className="h-5 w-5 text-blue-600" />
          Envoyez-nous un message
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          Remplissez le formulaire ci-dessous et nous vous répondrons en moins de 24h
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 group/field">
              <Label htmlFor="firstName" className="text-gray-700 font-medium smooth-transition group-focus-within/field:text-blue-600">Prénom</Label>
              <Input 
                id="firstName" 
                name="firstName" 
                required 
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-400"
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className="space-y-2 group/field">
              <Label htmlFor="lastName" className="text-gray-700 font-medium smooth-transition group-focus-within/field:text-blue-600">Nom</Label>
              <Input 
                id="lastName" 
                name="lastName" 
                required 
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-400"
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          <div className="space-y-2 group/field">
            <Label htmlFor="email" className="text-gray-700 font-medium smooth-transition group-focus-within/field:text-blue-600">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-400"
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div className="space-y-2 group/field">
            <Label htmlFor="phone" className="text-gray-700 font-medium smooth-transition group-focus-within/field:text-blue-600">Téléphone</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-400"
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div className="space-y-2 group/field">
            <Label htmlFor="subject" className="text-gray-700 font-medium smooth-transition group-focus-within/field:text-blue-600">Sujet</Label>
            <Input 
              id="subject" 
              name="subject" 
              required 
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-400"
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div className="space-y-2 group/field">
            <Label htmlFor="message" className="text-gray-700 font-medium smooth-transition group-focus-within/field:text-blue-600">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Décrivez votre projet d'isolation thermique..."
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none hover:border-blue-400"
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="files" className="text-gray-700 font-medium">Pièces jointes (optionnel)</Label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Input
                  id="files"
                  name="files"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                  onChange={handleFileChange}
                  className="cursor-pointer bg-white border-gray-300 text-gray-900 file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:mr-4 hover:file:bg-blue-500"
                />
                <Upload className="h-5 w-5 text-gray-500" />
              </div>
              
              {files.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    {files.length} fichier{files.length > 1 ? "s" : ""} sélectionné{files.length > 1 ? "s" : ""} :
                  </p>
                  <ul className="space-y-2">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <Upload className="h-4 w-4 text-blue-600" />
                          <span className="truncate text-gray-900">{file.name}</span>
                          <span className="text-xs text-gray-500">
                            ({formatFileSize(file.size)})
                          </span>
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="h-6 w-6 p-0 hover:bg-blue-100"
                        >
                          <X className="h-4 w-4 text-gray-500" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <p className="text-xs text-gray-500">
                Formats acceptés : PDF, Word, Images (max 10 Mo par fichier)
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 smooth-transition hover:scale-[1.02] relative overflow-hidden group/btn" disabled={isSubmitting}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Envoi en cours...
              </span>
            ) : (
              <>
                Envoyer le message
                <Send className="ml-2 h-4 w-4 smooth-transition group-hover/btn:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="shadow-xl border-blue-200 bg-white/95 backdrop-blur-sm animate-fade-in-up stagger-2 overflow-hidden group hover:shadow-blue-500/30 smooth-transition">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 smooth-transition" />
        <CardHeader className="relative pb-3 border-b border-blue-100">
          <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
            <Phone className="h-5 w-5 text-blue-600" />
            Nos coordonnées
          </CardTitle>
        </CardHeader>
        <CardContent className="relative pt-6 space-y-5">
          {CONTACT_ITEMS.map((item) => (
            <ContactItem key={item.label} {...item} />
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-xl border-blue-200 bg-white/95 backdrop-blur-sm animate-fade-in-up stagger-3 overflow-hidden group hover:shadow-cyan-500/30 smooth-transition">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 smooth-transition" />
        <CardHeader className="relative pb-3 border-b border-blue-100">
          <CardTitle className="text-lg text-gray-900">⏰ Horaires d'ouverture</CardTitle>
        </CardHeader>
        <CardContent className="relative pt-5 space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-700">Lundi - Vendredi</span>
            <span className="font-semibold text-blue-600">8h00 - 18h00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-700">Samedi</span>
            <span className="font-semibold text-blue-600">9h00 - 12h00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-700">Dimanche</span>
            <span className="font-semibold text-red-500">Fermé</span>
          </div>
        </CardContent>
      </Card>

      <div className="rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 p-6 shadow-2xl animate-fade-in-up stagger-4 smooth-transition hover:shadow-blue-500/40 hover:-translate-y-1 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 smooth-transition" />
        <div className="relative">
          <h3 className="mb-2 text-lg font-bold text-white flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Intervention rapide
          </h3>
          <p className="text-sm text-blue-50 leading-relaxed">
            Nous intervenons dans toute la région <span className="font-bold text-white">Île-de-France</span>. 
            Devis gratuit sous <span className="font-bold text-white">24h</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

interface ContactItemProps {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-start gap-3 group p-3 rounded-lg smooth-transition hover:bg-blue-50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg smooth-transition group-hover:scale-110 group-hover:shadow-blue-500/50">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</div>
        <div className="text-sm text-gray-900 font-medium smooth-transition group-hover:text-blue-600">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 octets";
  const k = 1024;
  const sizes = ["octets", "Ko", "Mo", "Go"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
}

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 1 34 77 85 20",
    href: "tel:+33134778520",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@thercal-energie.fr",
    href: "mailto:contact@thercal-energie.fr",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "2 rue Pierre de RONSARD, 78200 MANTES LA JOLIE",
  },
] as const;

