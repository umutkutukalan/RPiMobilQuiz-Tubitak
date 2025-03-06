import { useState } from "react";

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const resetPassword = async (email: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    resetPassword,
    loading,
    error,
    success,
  };
};

export default useResetPassword;
