import config from "@/config/config";
import axios from "axios";

export const CreateExamService = async (examData, token) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Exam/create_exam`,
      examData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating exam:", error);
    throw new Error("Failed to create exam");
  }
};
