"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Charger l'utilisateur depuis le localStorage au démarrage
  useEffect(() => {
    const storedUser = localStorage.getItem("thercal_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Erreur lors du chargement de l'utilisateur", error);
        localStorage.removeItem("thercal_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simuler un appel API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Récupérer les utilisateurs enregistrés
      const users = JSON.parse(localStorage.getItem("thercal_users") || "[]");
      const foundUser = users.find(
        (u: any) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error("Email ou mot de passe incorrect");
      }

      const userData: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };

      setUser(userData);
      localStorage.setItem("thercal_user", JSON.stringify(userData));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simuler un appel API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Vérifier si l'email existe déjà
      const users = JSON.parse(localStorage.getItem("thercal_users") || "[]");
      const emailExists = users.some((u: any) => u.email === email);

      if (emailExists) {
        throw new Error("Cet email est déjà utilisé");
      }

      // Créer un nouvel utilisateur
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // En production, hasher le mot de passe !
      };

      users.push(newUser);
      localStorage.setItem("thercal_users", JSON.stringify(users));

      const userData: User = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      };

      setUser(userData);
      localStorage.setItem("thercal_user", JSON.stringify(userData));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("thercal_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
}

