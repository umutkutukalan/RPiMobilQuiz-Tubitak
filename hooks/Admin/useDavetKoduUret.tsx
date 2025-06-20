import { DavetKoduUretService } from "@/services/Admin/DavetKoduUretService";
import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";

export const useDavetKoduUret = () => {
  const [davetKodu, setDavetKodu] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();

  const davetKoduUret = async () => {
    setIsLoading(true);
    try {
      const response = await DavetKoduUretService(token);
      setDavetKodu(response.data.invite_code); // Davet kodunu duruma kaydet
      console.log("Davet kodu üretme başarılı:", response.data.invite_code);
    } catch (error) {
      console.error("Davet kodu üretme hatası:", error);
      throw new Error("Davet kodu üretme başarısız");
    } finally {
      setIsLoading(false);
    }
  };
  return { davetKoduUret, davetKodu, isLoading };
};
