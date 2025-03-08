import axios from "axios";
import config from "../config";

const resetPassword = (email: string) => {
  return axios
    .post(`${config.baseUrl}/Session/reset_password`, { email })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.error(
          "Reset password error:",
          error.response ? error.response.data : error.message
        );
        return Promise.reject(
          new Error(
            error.response ? error.response.data : "Reset password failed"
          )
        );
      } else {
        console.error("Unexpected error:", error);
        return Promise.reject(new Error("An unexpected error occurred"));
      }
    });
};

export default resetPassword;
