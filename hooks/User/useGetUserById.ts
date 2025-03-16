import { useState } from "react";
import { strogaService } from "@/config/strogeService";
import { getByUserId } from "@/services/User/GetByUserIdService";

export const useGetUserById = () => {
  const [userData, setUserData] = useState();
  const getUserById = async () => {
    try {
      const userString = await strogaService.get("user");
      if (!userString) {
        throw new Error("User not found in storage");
      }
      const user = JSON.parse(userString);
      if (!user.id) {
        throw new Error("User ID not found");
      }

      const response = await getByUserId({ userId: user.id });
      console.log(response);
      setUserData(response); // Kullanıcı verilerini duruma kaydet
      return response;
    } catch (error) {
      console.error("Get user by id error:", error);
      throw new Error("Get user by id failed");
    }
  };

  return { getUserById, userData }; // userData'yı döndür
};
