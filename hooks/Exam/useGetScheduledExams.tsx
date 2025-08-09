import { useAuth } from "@/context/AuthProvider";
import { GetScheduledService } from "@/services/Exam/GetScheduledService";
import { useState } from "react";

export const useGetScheduledExams = () => {
  const { token } = useAuth();
  const [scheduledExams, setScheduledExams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getScheduledExams = async () => {
    try {
      const response = await GetScheduledService(token);
      setScheduledExams(response.data);
      setIsLoading(false);
      console.log("Scheduled Exams:", response.data);
    } catch (error) {
      console.error("Error fetching scheduled exams:", error);
    }
  };
  return { getScheduledExams, scheduledExams, isLoading };
};
