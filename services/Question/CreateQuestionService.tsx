import config from "@/config/config";
import axios from "axios";

export const CreateQuestionService = async (questionData, token: string) => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/Question/create_question`,
      questionData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Soru başarıyla oluşturuldu:", response.data);
    return response.data;
  } catch (error) {
    console.error("Soru oluşturma hatası:", error);
    throw new Error(
      "Soru oluşturulurken bir hata oluştu. Lütfen tekrar deneyin."
    );
  }
};
