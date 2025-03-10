import axios from "axios";
import config from "../config";

export interface RegisterData {
  email: string;
  invite_code: string;
  name: string;
  password: string;
  phone: string;
  surname: string;
}

export const register = async (userData: RegisterData) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Session/register`,
      userData
    );
    console.log("Register response:", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Register error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : "Register failed");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
