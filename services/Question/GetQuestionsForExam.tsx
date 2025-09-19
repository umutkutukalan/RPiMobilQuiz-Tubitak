import config from "@/config/config";
import axios from "axios";

export const GetQuestionsForExamService = async (examId: number) => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/Question/get_questions_by_exam/${examId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching questions for exam:", error);
    throw error;
  }
};
