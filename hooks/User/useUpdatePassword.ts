import axios from "axios";
import {
  UpdatePasswordData,
  updatePassword as updatePasswordService,
} from "../../services/User/UpdatePasswordService";

export const useUpdatePassword = () => {
  const updatePassword = async (UpdatePasswordData: UpdatePasswordData) => {
    try {
      const response = await updatePasswordService(UpdatePasswordData);
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
};
