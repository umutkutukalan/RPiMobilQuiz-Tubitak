import axios from "axios";
import config from "../config";

interface LoginResponse {
  token: string;
  userId: string;
}

const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${config.baseUrl}/Session/login`,
      { email, password }
    );
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

export default login;
