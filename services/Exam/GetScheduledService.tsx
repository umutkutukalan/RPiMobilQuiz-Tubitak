import config from "@/config/config";
import axios from "axios";

export const GetScheduledService = async (token: string) => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/Exam/get_scheduled_exams`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching scheduled exams:", error);
    throw error;
  }
};
