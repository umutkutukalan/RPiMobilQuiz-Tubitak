import { useAuth } from "@/context/AuthProvider";
import { StartExamService } from "@/services/Exam/StartExamService";

export const useStartExam = () => {
  const { token } = useAuth();

  const startExam = async (examId: number) => {
    try {
      await StartExamService(examId, token);
      console.log("Sınav başarıyla başlatıldı:");
    } catch (error) {
      console.error("Error starting exam:", error);
      throw error;
    }
  };

  return { startExam };
};
