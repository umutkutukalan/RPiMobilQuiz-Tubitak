import login from "@/app/services/Session/LoginService";
import { useState } from "react";

interface UseLoginResult {
  loginUser: (email: string, password: string) => void;
  loading: boolean;
  error: string | null;
  token: string | null;
  userId: string | null;
}

const useLogin = (): UseLoginResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null); // Hata durumunu sıfırla
    try {
      const response = await login(email, password);
      setToken(response.token);
      setUserId(response.userId);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error, token, userId };
};

export default useLogin;
