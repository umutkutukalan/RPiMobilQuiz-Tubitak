import { login, LoginData } from "@/app/services/Session/loginService";
import { useState } from "react";

export const useLogin = () => {
  const [userDataLogin, setUserDataLogin] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await login(userDataLogin);
      console.log("Login response:", response);
      return response;
    } catch (error) {
      setErrorMessage(error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    userDataLogin,
    setUserDataLogin,
    errorMessage,
    isLoading,
    handleLogin,
  };
};
