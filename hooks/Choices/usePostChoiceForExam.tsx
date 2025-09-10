import { useAuth } from "@/context/AuthProvider";
import { PostChoiceForExamService } from "@/services/Choices/PostChoiceForExamService";

export const usePostChoiceForExam = () => {
  const { token } = useAuth();
  const postChoiceForExam = async (choices: any[], questionId: number) => {
    try {
      const response = await PostChoiceForExamService(
        choices,
        questionId,
        String(token)
      );
      console.log("Posted choices for question:", response.data);
    } catch (error) {
      console.error("Error posting choices for question:", error);
      throw error;
    }
  };

  return { postChoiceForExam };
};
