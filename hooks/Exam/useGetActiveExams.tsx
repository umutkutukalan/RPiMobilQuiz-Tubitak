import { useAuth } from "@/context/AuthProvider";
import { GetActiveService } from "@/services/Exam/GetActiveService";
import { useState } from "react";

export const useGetActiveExams = () => {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [activeExams, setActiveExams] = useState([]);
  const getActiveExams = async () => {
    try {
      const response = await GetActiveService(token);
      setActiveExams(response.data);
    } catch (error) {
      console.error("Error in useGetActiveExams:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { getActiveExams, activeExams, isLoading };
};
