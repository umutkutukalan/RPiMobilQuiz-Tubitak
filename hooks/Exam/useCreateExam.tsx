import { useAuth } from "@/context/AuthProvider";
import { CreateExamService } from "@/services/Exam/CreateExamService";

export const useCreateExam = () => {
  const { token } = useAuth();

  interface ExamData {
    end_time: string;
    exam_duration: number;
    exam_name: string;
    start_time: string;
    teacher_id: number;
  }

  const createExam = async (examData: ExamData) => {
    if (!token) {
      throw new Error("Token bulunamadı. Lütfen tekrar giriş yapın.");
    }
    
    try {
      console.log("Gönderilen veri:", examData);
      console.log("Token:", token);
      const result = await CreateExamService(examData, token);
      console.log("Başarılı:", result);
      return result;
    } catch (error) {
      console.error("Error creating exam:", error);
      throw error;
    }
  };
  return { createExam };
};
