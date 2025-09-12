import { useAuth } from "@/context/AuthProvider";
import { DeleteQuestionService } from "@/services/Question/DeleteQuestionService";

export const useDeleteQuestion = () => {
  const { token } = useAuth();
  const deleteQuestion = async (questionId: number) => {
    try {
      await DeleteQuestionService(questionId, String(token));
    } catch (error) {
      console.error("Error deleting question:", error);
      throw error;
    }
  };

  return { deleteQuestion };
};
