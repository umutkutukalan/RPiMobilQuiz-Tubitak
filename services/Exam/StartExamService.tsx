import config from "@/config/config";
import axios from "axios";

export const StartExamService = async (examId: number, token: string) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Exam/start_exam/${examId}`,
      {}, // empty body
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error starting exam:", error);
    throw error;
  }
};
