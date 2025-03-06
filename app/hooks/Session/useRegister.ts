import { useState } from "react";
import register from "@/app/services/Session/RegisterService";

interface UseRegisterResult {
  registerUser: (
    email: string,
    invite_code: string,
    name: string,
    password: string,
    phone: string,
    surname: string
  ) => void;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const useRegister = (): UseRegisterResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const registerUser = async (
    email: string,
    invite_code: string,
    name: string,
    password: string,
    phone: string,
    surname: string
  ) => {
    setLoading(true);
    setError(null); // Hata durumunu sıfırla
    setSuccess(false); // Başarı durumunu sıfırla
    try {
      await register(email, invite_code, name, password, phone, surname);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error, success };
};

export default useRegister;
