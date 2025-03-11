import config from "@/config/config";
import { strogaService } from "@/config/strogeService";
import { useUser } from "@/hooks/useUser";
import axios from "axios";

export interface UpdatePasswordData {
  id: string;
  password: string;
  userId: string;
}

export const updatePassword = async (
  UpdatePasswordData: UpdatePasswordData
) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/User/update_password`,
      {
        id: UpdatePasswordData.userId, // userId'yi buradan alın
        password: UpdatePasswordData.password,
      }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Update password error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(
        error.response ? error.response.data : "Update password failed"
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};
