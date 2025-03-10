import { login, LoginData } from "@/app/services/Session/loginService";
import {
  resetPassword,
  ResetPasswordData,
} from "@/app/services/Session/ResetPasswordService";
import { useState } from "react";

export const useLogin = () => {
  const [resetPasswordData, setResetPasswordData] = useState<ResetPasswordData>(
    {
      email: "",
    }
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await resetPassword(resetPasswordData);
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
    resetPasswordData,
    setResetPasswordData,
    errorMessage,
    isLoading,
    handleLogin,
  };
};
