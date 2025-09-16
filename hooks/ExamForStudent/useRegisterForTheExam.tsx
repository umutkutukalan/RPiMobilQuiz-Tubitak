import { useAuth } from "@/context/AuthProvider";
import { RegisterForTheExamService } from "@/services/ExamForStudent/RegisterForTheExamService";

export const useRegisterForTheExam = () => {
  const { token } = useAuth();
  const registerForTheExam = async (examId: number) => {
    try {
      await RegisterForTheExamService(examId, String(token));
      console.log("Successfully registered for the exam.");
    } catch (error) {
      console.error("Error registering for the exam:", error);
      throw error;
    }
  };
  return { registerForTheExam };
};
