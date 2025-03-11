import { register, RegisterData } from "@/services/Session/RegisterService";
import { useState } from "react";

export const useRegister = () => {
  const [userData, setUserData] = useState<RegisterData>({
    email: "",
    invite_code: "",
    name: "",
    password: "",
    phone: "",
    surname: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = await register(userData);
      console.log("Register response:", response);
      return response;
    } catch (error) {
      setErrorMessage(error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    userData,
    setUserData,
    errorMessage,
    isLoading,
    handleRegister,
  };
};
