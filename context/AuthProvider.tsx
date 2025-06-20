import React, { createContext, useContext, useEffect, useState } from "react";
import { router } from "expo-router";
import { login } from "@/services/Session/loginService"; // login fonksiyonunu import et
import { strogeService } from "@/config/strogeService";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  isAuthLoading: boolean;
  user: any; // Kullanıcı bilgisi
  setUser: (user: any) => void;
  token: string | null; // Token bilgisi
  setToken: (token: string | null) => void;
  refetch: () => void;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null); // Kullanıcı bilgisi
  const [token, setToken] = useState<string | null>(null); // Token bilgisi

  // Auth check işlemi
  const checkAuth = async () => {
    try {
      const storedUser = await strogeService.get("user");
      const storedToken = await strogeService.get("token");
      if (storedUser && storedToken) {
        setUser(typeof storedUser === "string" ? JSON.parse(storedUser) : storedUser);
        setToken(storedToken);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setToken(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      setUser(null);
      setToken(null);
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
        await strogeService.store("user", JSON.stringify(response.User));
        setUser(response.User); // Kullanıcıyı state'e ata
        setToken(response.token); // Token'ı state'e ata
        refetch();
        setIsAuthenticated(true);
        console.log("Login response:", response);
        router.push("/(root)/(tabs)"); // Giriş yapıldığında kullanıcıyı yönlendir
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
      setUser(null); // Kullanıcıyı temizle
      setToken(null); // Token'ı temizle
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
        user, // Kullanıcı bilgisi
        setUser,
        token, // Token bilgisi
        setToken,
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
