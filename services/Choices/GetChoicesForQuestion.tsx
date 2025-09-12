import config from "@/config/config";
import axios from "axios";

export const GetChoicesForQuestion = async (questionId: number) => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/Choice/get_choices/${questionId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching choices:", error);
    throw error;
  }
};
