import { useAuth } from "@/context/AuthProvider";
import { CreateQuestionService } from "@/services/Question/CreateQuestionService";

export const useCreateQuestion = () => {
  const { token } = useAuth();

  interface questionData {
    exam_id: number;
    question_text: string;
    question_type: string;
  }

  const createQuestion = async (questionData: questionData) => {
    try {
      await CreateQuestionService(questionData, token);
    } catch (error) {
      console.error("Soru oluşturma hatası:", error);
      throw error;
    }
  };

  return { createQuestion };
};
