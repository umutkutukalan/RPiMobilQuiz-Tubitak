import config from "@/config/config";
import axios from "axios";

export const GetAllExamService = async (token) => {
  try {
    const response = await axios.get(`${config.baseUrl}/Exam/get_exams`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching exams:", error);
    throw new Error("Failed to fetch exams");
  }
};
