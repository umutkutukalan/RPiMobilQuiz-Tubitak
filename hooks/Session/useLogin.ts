import { useAuth } from "@/context/AuthProvider";
import { useState } from "react";

export const useLogin = () => {
  const { handleLogin, handleLogout, errorMessage, isLoading } = useAuth();
  const [userDataLogin, setUserDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await handleLogin(userDataLogin.email, userDataLogin.password);
    console.log("Login data:", userDataLogin);
  };

  return {
    userDataLogin,
    setUserDataLogin,
    errorMessage,
    isLoading,
    handleSubmit,
    handleLogout,
  };
};
