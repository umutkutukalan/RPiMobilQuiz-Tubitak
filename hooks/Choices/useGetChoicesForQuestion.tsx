import { GetChoicesForQuestion } from "@/services/Choices/GetChoicesForQuestion";
import { useState } from "react";

export const useGetChoicesForQuestion = () => {
  const [choices, setChoices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getChoicesForQuestion = async (questionId: number) => {
    try {
      const response = await GetChoicesForQuestion(questionId);
      setChoices(response.data);
      console.log("Fetched choices abi:", response.data);
    } catch (error) {
      console.error("Error fetching choices:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { choices, isLoading, getChoicesForQuestion };
};
