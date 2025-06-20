import config from "@/config/config";
import axios from "axios";

export const DeleteExamService = async (examId: string, token: string) => {
  try {
    await axios.delete(`${config.baseUrl}/Exam/delete_exam/${examId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Sınav başarıyla silindi:", examId);
  } catch (error) {
    console.error("Sınav silme hatası:", error);
    throw new Error("Sınav silinirken bir hata oluştu.");
  }
};
