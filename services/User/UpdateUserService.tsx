import axios from "axios";
<<<<<<< HEAD:app/services/User/UpdateUserService.tsx
import config from "../config";
import { strogaService } from "../strogeService";
=======
import config from "../../config/config";
>>>>>>> features/pages:services/User/UpdateUserService.tsx

export interface UpdateUserData {
  email: string;
  name: string;
  surname: string;
  phone: string;
  role: string;
}

export const updateUser = async (UpdateUserData: UpdateUserData) => {
  const userId = await strogaService.get("user_id");
  try {
    const response = await axios.post(
      `${config.baseUrl}/User/update_user/${userId}`,
      UpdateUserData
    );
    console.log("User Id:", userId);
    console.log(response.data);
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
