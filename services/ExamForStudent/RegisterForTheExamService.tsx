import config from "@/config/config";
import axios from "axios";

export const RegisterForTheExamService = async (
  examId: number,
  token: string
) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Enrollment/enroll_exam`,
      {
        exam_id: examId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error in RegisterForTheExamService:", error);
    throw error;
  }
};
