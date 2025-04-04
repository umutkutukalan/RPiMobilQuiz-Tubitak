import { login, LoginData } from "@/services/Session/loginService";
import { strogaService } from "@/config/strogeService";
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
      await strogaService.store("token", response.token);
      await strogaService.store("user", JSON.stringify(response.User));
      console.log("Login response:", response);
      return response;
    } catch (error) {
      setErrorMessage(error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await strogaService.remove("token");
      await strogaService.remove("user");
    } catch (error) {
      setErrorMessage(error.message);
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
    handleLogout,
  };
};
