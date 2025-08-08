import config from "@/config/config";
import axios from "axios";

interface ExamData {
  end_time: string;
  exam_duration: number;
  exam_name: string;
  start_time: string;
  teacher_id: number;
}

export const CreateExamService = async (examData: ExamData, token: string) => {
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
    return response;
  } catch (error) {
    console.error("Error creating exam:", error);
    throw new Error("Failed to create exam");
  }
};
