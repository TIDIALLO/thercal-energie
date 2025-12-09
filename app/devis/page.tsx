"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { devisFormSchema, type DevisFormData } from "@/lib/schemas";

export default function DevisPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisFormSchema),
  });

  const onSubmit = async (data: DevisFormData) => {
    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Données du formulaire:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <HeroSection />
        <SuccessSection />
      </>
    );
  }

  return (
    <>
      <HeroSection />
      <FormSection
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        setValue={setValue}
      />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 py-20 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-6 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute right-1/5 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <p className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">
            Devis express 24h
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Demande de devis gratuit
          </h1>
          <p className="text-lg text-blue-100">
            Isolation de tuyauteries industrielle, bâtiments tertiaires et logements : décrivez votre projet et recevez
            une estimation détaillée sous 24 heures par nos équipes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Service prioritaire</p>
              <p className="text-lg font-semibold text-white">Isolation de tuyauteries industrielle</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Couverture</p>
              <p className="text-lg font-semibold text-white">France entière</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FormSectionProps {
  readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  readonly register: ReturnType<typeof useForm<DevisFormData>>["register"];
  readonly errors: ReturnType<typeof useForm<DevisFormData>>["formState"]["errors"];
  readonly isSubmitting: boolean;
  readonly setValue: ReturnType<typeof useForm<DevisFormData>>["setValue"];
}

function FormSection({ onSubmit, register, errors, isSubmitting, setValue }: FormSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-[radial-gradient(circle_at_top,_#f7fbff,_#e3f3ff_55%,_#f7fbff)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-cyan-100 blur-3xl opacity-70" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-[140px]" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <Card className="shadow-2xl border-blue-100 bg-white/95 backdrop-blur">
            <CardHeader className="border-b border-blue-50">
              <CardTitle className="text-2xl font-bold text-gray-900">Votre projet d'isolation</CardTitle>
              <CardDescription className="text-gray-600">
                Décrivez le chantier, ajoutez vos contraintes et recevez une proposition détaillée préparée par un
                chargé d'affaires.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input id="firstName" {...register("firstName")} />
                    {errors.firstName && (
                      <p className="text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input id="lastName" {...register("lastName")} />
                    {errors.lastName && (
                      <p className="text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input id="phone" type="tel" {...register("phone")} />
                  {errors.phone && (
                    <p className="text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresse du projet *</Label>
                  <Input
                    id="address"
                    {...register("address")}
                    placeholder="123 Rue de l'Exemple, 75001 Paris"
                  />
                  {errors.address && (
                    <p className="text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Type d'isolation *</Label>
                  <Select
                    onValueChange={(value) => setValue("serviceType", value as DevisFormData["serviceType"])}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tuyauteries">Isolation de tuyauteries industrielle</SelectItem>
                      <SelectItem value="combles">Isolation des combles</SelectItem>
                      <SelectItem value="murs">Isolation des murs</SelectItem>
                      <SelectItem value="sols">Isolation des sols</SelectItem>
                      <SelectItem value="toiture">Isolation de toiture</SelectItem>
                      <SelectItem value="autre">Autre / Plusieurs services</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-sm text-red-600">{errors.serviceType.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="surface">Surface approximative (m²)</Label>
                  <Input
                    id="surface"
                    {...register("surface")}
                    type="number"
                    placeholder="Ex: 100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget estimé (optionnel)</Label>
                  <Select onValueChange={(value) => setValue("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une fourchette" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moins-5000">Moins de 5 000 €</SelectItem>
                      <SelectItem value="5000-10000">5 000 € - 10 000 €</SelectItem>
                      <SelectItem value="10000-20000">10 000 € - 20 000 €</SelectItem>
                      <SelectItem value="plus-20000">Plus de 20 000 €</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Description du projet *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    placeholder="Décrivez votre projet, vos contraintes, vos attentes..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer ma demande de devis
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-500">
                Pourquoi demander un devis ?
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Un chargé d'affaires dédié vous répond en moins de 24h
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  <span className="text-gray-700">Analyse de vos plans ou photos pour dimensionner le calorifugeage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  <span className="text-gray-700">Planning d'intervention et logistique atelier communiqués à l'avance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  <span className="text-gray-700">Option de préfabrication et pose de coquilles inox / aluminium.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Besoin urgent ?</p>
              <h3 className="mt-3 text-2xl font-bold">Isolation de tuyauteries industrielle en priorité</h3>
              <p className="mt-3 text-white/80">
                Hotline dédiée et équipes mobiles pour intervenir sur vos réseaux vapeur, eau glacée ou process critiques.
              </p>
              <div className="mt-5 space-y-2 text-sm">
                <p>
                  📞 <span className="font-semibold">+33 7 86 02 51 97</span>
                </p>
                <p>
                  📧 <span className="font-semibold">contact@thercalenergies.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Demande envoyée avec succès !</h2>
          <p className="mb-8 text-lg text-gray-600">
            Merci pour votre demande. Notre équipe va l'étudier et vous répondra dans les 24 heures avec un devis personnalisé.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">Que se passe-t-il ensuite ?</p>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  1
                </span>
                <span className="text-gray-600">
                  Nous analysons votre demande et préparons un devis détaillé
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  2
                </span>
                <span className="text-gray-600">
                  Vous recevez votre devis personnalisé par email sous 24h
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                  3
                </span>
                <span className="text-gray-600">
                  Nous planifions ensemble une visite technique si nécessaire
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

