import config from "@/config/config";
import axios from "axios";

export const GetExamByIdService = async (examId: number, token: string) => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/Exam/get_exam_by_id/${examId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching exam by ID:", error);
    throw error;
  }
};
