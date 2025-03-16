import axios from "axios";
import config from "../../config/config";

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

    // Response kontrolü
    if (!response.data || !response.data.token) {
      throw new Error("Invalid response data");
    }

    console.log("Login response:", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response
        ? error.response.data
        : "Login failed";

      console.error("Login error:", errorMessage);
      throw new Error(errorMessage);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
