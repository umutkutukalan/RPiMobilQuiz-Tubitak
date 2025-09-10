import config from "@/config/config";
import axios from "axios";

export const GetQuestionByIdService = async (soruId: number, token: string) => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/Question/get_question_by_id/${soruId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching question by ID:", error);
    throw error;
  }
};
