import { useAuth } from "@/context/AuthProvider";
import { GetQuestionsService } from "@/services/Question/GetQuestions";
import { useState } from "react";

export const useGetQuestionByExam = () => {
  const { token } = useAuth();
  const [examQuestions, setExamQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getQuestionByExam = async (examId: number) => {
    try {
      const response = await GetQuestionsService(examId, String(token));
      setExamQuestions(response.data);
      console.log("Fetched questions by exam:", response.data);
    } catch (error) {
      console.error("Error fetching questions by exam:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getQuestionByExam, examQuestions, isLoading };
};
