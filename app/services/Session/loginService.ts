import axios from "axios";
import config from "../config";

export interface LoginData {
  email: string;
  password: string;
}

export const login = async (userDataLogin: LoginData) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Session/login`,
      userDataLogin
    );
    console.log("Login response:", response);
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
