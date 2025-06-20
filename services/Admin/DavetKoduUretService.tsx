import config from "@/config/config";
import axios from "axios";

export const DavetKoduUretService = async (token: string) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Admin/generate_invite_code`,
      {}, // body boş ise boş obje
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Davet kodu üretme başarılı:", response.data);
    return response;
  } catch (error) {
    console.error("Davet kodu üretme hatası:", error);
    throw new Error("Davet kodu üretme başarısız");
  }
};
