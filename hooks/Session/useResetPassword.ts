import { login, LoginData } from "@/services/Session/loginService";
import {
  resetPassword,
  ResetPasswordData,
} from "@/services/Session/ResetPasswordService";
import { useState } from "react";

export const useResetPassword = () => {
  const [resetPasswordData, setResetPasswordData] = useState<ResetPasswordData>(
    {
      email: "",
    }
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
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
    handleResetPassword,
  };
};
