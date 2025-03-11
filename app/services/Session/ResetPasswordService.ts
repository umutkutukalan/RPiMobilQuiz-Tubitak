import axios from "axios";
import config from "../config";

export interface ResetPasswordData {
  email: string;
}

export const resetPassword = async (resetPasswordData: ResetPasswordData) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Session/reset_password`,
      resetPasswordData
    );
    console.log("Reset password response:", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : "Login failed");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
