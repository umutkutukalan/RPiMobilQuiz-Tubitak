import axios from "axios";
import config from "../config";

const register = async (
  email: string,
  invite_code: string,
  name: string,
  password: string,
  phone: string,
  surname: string
) => {
  try {
    const response = await axios.post(`${config.baseUrl}/Session/register`, {
      email,
      invite_code,
      name,
      password,
      phone,
      surname,
    });
    return response;
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

export default register;
