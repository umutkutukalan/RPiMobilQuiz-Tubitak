import config from "@/config/config";
import axios from "axios";

export const GetQuestionsService = async (examId: number, token: string) => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/Question/get_questions_by_exam/${examId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};
