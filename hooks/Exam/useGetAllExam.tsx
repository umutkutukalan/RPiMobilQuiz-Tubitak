import { useAuth } from "@/context/AuthProvider";
import { GetAllExamService } from "@/services/Exam/GetAllExamService";
import { useState } from "react";

export const useGetAllExam = () => {
  const [examList, setExamList] = useState([]);
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
