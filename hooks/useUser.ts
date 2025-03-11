import { strogaService } from "@/config/strogeService";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<{
    id: string;
    name: string;
    surname: string;
    role: string;
  } | null>(null);
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await strogaService.get("user");
        const tokenData = await strogaService.get("token");
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
        setToken(tokenData);
      } catch (error) {
        console.error("Fetch user error:", error);
      }
    };
  }, []);
  return {
    user,
    userId: user?.id,
    userName: user?.name,
    userSurname: user?.surname,
    userRole: user?.role,
    token,
  };
};
