"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-gray-50 py-10 sm:py-14">
      {/* Motif de fond décoratif animé */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute right-1/3 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1.8s' }} />
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
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Contactez-nous
      </h2>
      <p className="text-lg text-gray-600">
        Une question ? Un projet ? N'hésitez pas à nous contacter
      </p>
    </div>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

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
    <Card className="shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Envoyez-nous un message</CardTitle>
        <CardDescription className="text-sm">
          Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input id="phone" name="phone" type="tel" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Sujet</Label>
            <Input id="subject" name="subject" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Décrivez votre projet..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="files">Pièces jointes (optionnel)</Label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Input
                  id="files"
                  name="files"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                <Upload className="h-5 w-5 text-gray-400" />
              </div>
              
              {files.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    {files.length} fichier{files.length > 1 ? "s" : ""} sélectionné{files.length > 1 ? "s" : ""} :
                  </p>
                  <ul className="space-y-2">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between rounded-lg border bg-gray-50 px-3 py-2 text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <Upload className="h-4 w-4 text-blue-600" />
                          <span className="truncate">{file.name}</span>
                          <span className="text-xs text-gray-500">
                            ({formatFileSize(file.size)})
                          </span>
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="h-6 w-6 p-0"
                        >
                          <X className="h-4 w-4" />
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

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Envoi en cours..."
            ) : (
              <>
                Envoyer le message
                <Send className="ml-2 h-4 w-4" />
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
    <div className="space-y-8">
      <div>
        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          Nos coordonnées
        </h3>
        <div className="space-y-4">
          {CONTACT_ITEMS.map((item) => (
            <ContactItem key={item.label} {...item} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold text-gray-900">
          Horaires d'ouverture
        </h3>
        <div className="space-y-2 text-gray-600">
          <p>Lundi - Vendredi : 8h00 - 18h00</p>
          <p>Samedi : 9h00 - 12h00</p>
          <p>Dimanche : Fermé</p>
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg border border-blue-100">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Intervention rapide
        </h3>
        <p className="text-base text-gray-600">
          Nous intervenons dans toute la région Île-de-France. Devis gratuit
          sous 24h.
        </p>
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
    <div className="flex items-start gap-3 group">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-base font-semibold text-gray-900">{label}</div>
        <div className="text-sm text-gray-600">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition-all duration-300 hover:translate-x-1">
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
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
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
    value: "123 Rue de l'Isolation, 75001 Paris",
  },
] as const;

