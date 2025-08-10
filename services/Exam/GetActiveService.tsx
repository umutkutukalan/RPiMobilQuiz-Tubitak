import config from "@/config/config";
import axios from "axios";

export const GetActiveService = async (token: string) => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/Exam/get_active_exams`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching active exams:", error);
    throw error;
  }
};
