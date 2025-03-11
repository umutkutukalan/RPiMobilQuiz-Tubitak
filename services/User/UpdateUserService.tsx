import axios from "axios";
import config from "../../config/config";

export interface UpdateUserData {
  email: string;
  name: string;
  surname: string;
  phone: string;
  role: string;
}

export const updateUser = async (UpdateUserData: UpdateUserData) => {
  try {
    const response = await axios.post(
        `${config.baseUrl}/User/update_user/user_id`,
    )
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Update user error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(
        error.response ? error.response.data : "Update user failed"
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
