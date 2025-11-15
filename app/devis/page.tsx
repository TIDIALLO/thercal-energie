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
    <section className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Demande de devis gratuit
          </h1>
          <p className="text-lg text-gray-600">
            Remplissez le formulaire ci-dessous et recevez votre devis
            personnalisé sous 24 heures
          </p>
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
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Votre projet d'isolation</CardTitle>
              <CardDescription>
                Décrivez-nous votre projet pour recevoir un devis adapté à vos besoins
              </CardDescription>
            </CardHeader>
            <CardContent>
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

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
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

