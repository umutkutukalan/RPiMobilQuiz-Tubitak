import { updatePassword } from "@/services/User/UpdatePasswordService";
import { useState } from "react";

export const useUpdatePassword = () => {
  const [updatePasswordData, setUpdatePasswordData] = useState({
    id: "",
    password: "",
    userId: "",
  });
  const handleUpdatePassword = async () => {
    try {
      const response = await updatePassword(updatePasswordData);
      console.log("Update password response:", response);
      return response;
    } catch (error) {
      console.error("Update password error:", error);
    }
  };
  return {
    updatePasswordData,
    setUpdatePasswordData,
    handleUpdatePassword,
  };
};
