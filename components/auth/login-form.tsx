"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";

const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSuccess: () => void;
  onSwitchToRegister: () => void;
  onSwitchToForgot: () => void;
}

export function LoginForm({ onSuccess, onSwitchToRegister, onSwitchToForgot }: LoginFormProps) {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await login(data.email, data.password);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-600 animate-fade-in-up">
          {error}
        </div>
      )}

      <div className="space-y-2 group/field">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-gray-500" />
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="votre@email.com"
          {...register("email")}
          className="smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2 group/field">
        <Label htmlFor="password" className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-gray-500" />
          Mot de passe
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("password")}
            className="smooth-transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 smooth-transition"
            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div className="text-right">
        <button
          type="button"
          onClick={onSwitchToForgot}
          className="text-sm text-blue-600 hover:text-blue-700 smooth-transition"
        >
          Mot de passe oublié ?
        </button>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 smooth-transition"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connexion en cours...
          </>
        ) : (
          "Se connecter"
        )}
      </Button>

      <div className="text-center text-sm">
        <span className="text-gray-600">Pas encore de compte ? </span>
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-blue-600 font-semibold hover:text-blue-700 smooth-transition"
        >
          S'inscrire
        </button>
      </div>
    </form>
  );
}

