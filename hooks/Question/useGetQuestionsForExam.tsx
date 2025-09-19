import { GetQuestionsForExamService } from "@/services/Question/GetQuestionsForExam";
import { useState } from "react";

export const useGetQuestionsForExam = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getQuestionsForExam = async (examId: number) => {
    try {
      const response = await GetQuestionsForExamService(examId);
      setQuestions(response.data);
      console.log("Fetched Questions:", response.data);
    } catch (error) {
      console.error("Error fetching questions for exam:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { getQuestionsForExam, questions, isLoading };
};
