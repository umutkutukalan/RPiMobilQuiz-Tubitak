import axios from "axios";
import config from "../config";

interface LoginResponse {
  token: string;
  userId: string;
}

const login = (email: string, password: string): Promise<LoginResponse> => {
  return axios
    .post<LoginResponse>(`${config.baseUrl}/Session/login`, { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.error(
          "Login error:",
          error.response ? error.response.data : error.message
        );
        return Promise.reject(
          new Error(error.response ? error.response.data : "Login failed")
        );
      } else {
        console.error("Unexpected error:", error);
        return Promise.reject(new Error("An unexpected error occurred"));
      }
    });
};

export default login;
