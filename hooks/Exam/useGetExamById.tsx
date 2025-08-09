import { useAuth } from "@/context/AuthProvider";
import { GetExamByIdService } from "@/services/Exam/GetExamByIdService";
import { useEffect, useState } from "react";

export const useGetExamById = () => {
  const { token } = useAuth();
  const [exam, setExam] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getExamById = async (examId: number) => {
    try {
      const response = await GetExamByIdService(examId, token);
      setExam(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching exam by ID:", error);
      throw error;
    }
  };

  

  return { getExamById, exam, isLoading };
};
