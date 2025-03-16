import React, { createContext, useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import { login } from "@/services/Session/loginService"; // login fonksiyonunu import et
import { strogeService } from "@/config/strogeService";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  isAuthLoading: boolean;
  refetch: () => void;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);

  // Auth check işlemi
  const checkAuth = async () => {
    try {
      
    } catch (error) {
      console.error("Error checking auth:", error);
      setIsAuthenticated(false); // Eğer hata alırsak false yap
    } finally {
      setIsAuthLoading(false); // Auth kontrolü bittiğinde loading'i kapat
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const refetch = () => {
    setIsAuthLoading(true); // Refetch başlatıldığında loading'i aç
    checkAuth(); // Oturum kontrolünü tekrar yap
  };

  // Giriş işlemi
  const handleLogin = async (email: string, password: string) => {
    setIsAuthLoading(true);
    try {
      const response = await login({ email, password });
      if (response?.token && response?.User) {
        await strogeService.store("token", response.token);
        await strogeService.store("user", response.User);
        refetch();
        setIsAuthenticated(true);
        console.log("Login response:", response);
        router.push("/user"); // Giriş yapıldığında kullanıcıyı yönlendir
      } else {
        throw new Error("Giriş yapılırken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsAuthLoading(false);
    }
  };

  // Çıkış işlemi
  const handleLogout = async () => {
    setIsAuthLoading(true);
    try {
      await strogeService.remove("token");
      await strogeService.remove("user");
      refetch();
      setIsAuthenticated(false);
      router.push("/sign-in"); // Çıkış yapıldığında giriş sayfasına yönlendir
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsAuthLoading(false);
    }
  };

  // Oturum kontrolü ve giriş/çıkış işlemleri
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isAuthLoading,
        refetch,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
