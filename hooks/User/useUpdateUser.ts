import { updateUser } from "@/services/User/UpdateUserService";
import { useState } from "react";

export const useUpdateUser = () => {
  const [updateUserData, setUpdateUserData] = useState({
    email: "",
    name: "",
    phone: "",
    surname: "",
    role: "",
  });
  const handleUpdateUser = async () => {
    try {
      const response = await updateUser(updateUserData);
      console.log("Update user response:", response);
      return response;
    } catch (error) {
      console.error("Update user error:", error);
      throw new Error("Update user failed");
    }
  };
  return {
    updateUserData,
    setUpdateUserData,
    handleUpdateUser,
  };
};
