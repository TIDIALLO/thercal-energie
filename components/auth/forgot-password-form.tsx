"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const forgotPasswordSchema = z.object({
  email: z.string().email("Email invalide"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface ForgotPasswordFormProps {
  onSuccess: () => void;
  onBackToLogin: () => void;
}

export function ForgotPasswordForm({ onSuccess, onBackToLogin }: ForgotPasswordFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Simuler l'envoi d'un email de récupération
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Vérifier si l'email existe
      const users = JSON.parse(localStorage.getItem("thercal_users") || "[]");
      const userExists = users.some((u: any) => u.email === data.email);

      if (!userExists) {
        // Pour la sécurité, on ne révèle pas si l'email existe ou non
        // mais on affiche quand même un message de succès
      }

      // Simuler l'envoi d'un email
      // En production, cela enverrait un vrai email avec un token de réinitialisation
      console.log("Email de récupération envoyé à:", data.email);
      
      setIsSuccess(true);
      
      // Fermer automatiquement après 3 secondes
      setTimeout(() => {
        onSuccess();
      }, 3000);
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="space-y-4 py-6 animate-fade-in-up">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Email envoyé !</h3>
          <p className="text-sm text-gray-600">
            Si un compte existe avec cette adresse, vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.
          </p>
          <p className="text-xs text-gray-500 pt-2">
            Vérifiez également votre dossier spam.
          </p>
        </div>

        <Button
          onClick={onBackToLogin}
          variant="outline"
          className="w-full smooth-transition"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la connexion
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
        <p className="text-sm text-blue-800">
          Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </p>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-600 animate-fade-in-up">
          {error}
        </div>
      )}

      <div className="space-y-2 group/field">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-gray-500" />
          Adresse email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="votre@email.com"
          {...register("email")}
          className="smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          autoFocus
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 smooth-transition"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Mail className="mr-2 h-4 w-4" />
            Envoyer le lien
          </>
        )}
      </Button>

      <Button
        type="button"
        onClick={onBackToLogin}
        variant="ghost"
        className="w-full smooth-transition"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour à la connexion
      </Button>
    </form>
  );
}

