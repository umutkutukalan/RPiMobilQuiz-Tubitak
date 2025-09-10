import config from "@/config/config";
import axios from "axios";

export const PostChoiceForExamService = async (
  choices: { choice_text: string; is_correct: boolean }[],
  questionId: number,
  token: string
) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Choice/create_choices`,
      {
        choices: choices,
        question_id: questionId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error posting choice for exam:", error);
    throw error;
  }
};
