import config from "@/config/config";
import axios from "axios";

export const DeleteQuestionService = async (
  questionId: number,
  token: string
) => {
  try {
    const response = await axios.delete(
      `${config.baseUrl}/Question/delete_question/${questionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error deleting question:", error);
    throw error;
  }
};
