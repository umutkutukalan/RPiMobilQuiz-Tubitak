import { useAuth } from "@/context/AuthProvider";
import { GetAllExamService } from "@/services/Exam/GetAllExamService";
import { useState } from "react";

type Exam = {
  id: string;
  exam_name: string;
  status: string;
  start_time: string;
  end_time: string;
  exam_duration: number;
  // ihtiyaca göre diğer alanlar...
};

export const useGetAllExam = () => {
  const [examList, setExamList] = useState<Exam[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useAuth();

  const getAllExams = async () => {
    try {
      const response = await GetAllExamService(token);
      setExamList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching exams:", error);
      throw new Error("Failed to fetch exams");
    }
  };

  return {
    examList,
    isLoading,
    getAllExams,
  };
};
