import { useState } from "react";
import { strogeService } from "@/config/strogeService";
import { getByUserId } from "@/services/User/GetByUserIdService";
import { useAuth } from "@/context/AuthProvider";

export const useGetUserById = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const getUserById = async () => {
    try {
      const response = await getByUserId({ userId: user.id });
      console.log(response);
      setUserData(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Get user by id error:", error);
      throw new Error("Get user by id failed");
    }
  };

  return { getUserById, userData, isLoading }; // userData'yı döndür
};
