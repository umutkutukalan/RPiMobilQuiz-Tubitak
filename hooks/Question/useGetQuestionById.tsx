import { useAuth } from "@/context/AuthProvider";
import { GetQuestionByIdService } from "@/services/Question/GetQuestionById";
import { useState } from "react";

export const useGetQuestionById = () => {
  const { token } = useAuth();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getQuestionById = async (soruId: number) => {
    try {
      const response = await GetQuestionByIdService(soruId, String(token));
      setQuestion(response.data);
    } catch (error) {
      console.error("Error fetching question by ID:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { getQuestionById, question, isLoading };
};
