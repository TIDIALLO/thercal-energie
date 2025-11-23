"use client";

import { useState } from "react";
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/auth-context";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { ForgotPasswordForm } from "./forgot-password-form";

export function AuthButton() {
  const { user, logout } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register" | "forgot">("login");

  const openLogin = () => {
    setAuthMode("login");
    setShowAuth(true);
  };

  const openRegister = () => {
    setAuthMode("register");
    setShowAuth(true);
  };

  const openForgotPassword = () => {
    setAuthMode("forgot");
    setShowAuth(true);
  };

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative gap-2">
            <User className="h-5 w-5" />
            <span className="hidden md:inline">{user.name}</span>
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout} className="text-red-600 cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <>
      <Button
        variant="ghost"
        onClick={openLogin}
        className="gap-2"
      >
        <User className="h-5 w-5" />
        <span className="hidden sm:inline">Connexion</span>
      </Button>

      <Dialog open={showAuth} onOpenChange={setShowAuth}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {authMode === "login" && "Connexion"}
              {authMode === "register" && "Inscription"}
              {authMode === "forgot" && "Récupération de mot de passe"}
            </DialogTitle>
            <DialogDescription>
              {authMode === "login" && "Connectez-vous pour accéder à votre espace personnel"}
              {authMode === "register" && "Créez un compte pour profiter de nos services"}
              {authMode === "forgot" && "Recevez un lien de réinitialisation par email"}
            </DialogDescription>
          </DialogHeader>
          
          {authMode === "login" && (
            <LoginForm 
              onSuccess={() => setShowAuth(false)} 
              onSwitchToRegister={openRegister}
              onSwitchToForgot={openForgotPassword}
            />
          )}
          {authMode === "register" && (
            <RegisterForm 
              onSuccess={() => setShowAuth(false)} 
              onSwitchToLogin={openLogin} 
            />
          )}
          {authMode === "forgot" && (
            <ForgotPasswordForm 
              onSuccess={() => setShowAuth(false)}
              onBackToLogin={openLogin}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

