import axios from "axios";
import config from "../config";

const resetPassword = async (email: string) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Session/reset_password`,
      {
        email,
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Reset password error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(
        error.response ? error.response.data : "Reset password failed"
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export default resetPassword;
