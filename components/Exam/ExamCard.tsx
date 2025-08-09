import { useGetAllExam } from "@/hooks/Exam/useGetAllExam";
import { useStartExam } from "@/hooks/Exam/useStartExam";
import { formatDateTime } from "@/hooks/formatDateTime";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface ExamCardProps {
  handleDeleteExam: (examId: string) => void;
  exam: {
    id: string;
    exam_name: string;
    status: string;
    start_time: string;
    end_time: string;
    exam_duration: number;
  };
  activeTab: string;
}

export const ExamCard = ({
  handleDeleteExam,
  exam,
  activeTab,
}: ExamCardProps) => {
  const router = useRouter();
  const { startExam } = useStartExam();
  const { getAllExams } = useGetAllExam();
  const handleStartExam = (examId: number) => {
    console.log("Sınav Başlatılıyor:", examId);
    try {
      startExam(examId);
      alert("Sınav başarıyla başlatıldı!");
      // Sınav listesini yenile
      getAllExams();
    } catch (error: any) {
      console.error("Error starting exam:", error);
      alert(error.message || "Sınavı başlatırken bir hata oluştu.");
    }
  };

  return (
    <View
      key={exam.id}
      style={{
        backgroundColor:
          activeTab === "finished"
            ? "#EF4444"
            : activeTab === "scheduled"
            ? "#9CA3AF"
            : "#9CA3AF",
      }}
      className={`rounded-lg shadow overflow-hidden`}
    >
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/quiz/exam-questions",
            params: { examId: exam.id },
          })
        }
        className="flex flex-col gap-4 p-4"
      >
        <View className="flex flex-row justify-between items-start">
          <View>
            <Text className="text-2xl font-semibold text-white">
              {exam.exam_name}
            </Text>
            <Text className="text-xs font-semibold text-white">
              {exam.status}
            </Text>
          </View>
          <TouchableOpacity
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center"
            onPress={(e) => {
              e.stopPropagation && e.stopPropagation();
              handleDeleteExam(exam.id);
            }}
          >
            <Text className="text-sm">✖️</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View className="flex flex-row justify-between items-end">
            <View className="flex flex-col">
              <Text className="text-white">
                {formatDateTime(exam.start_time)}
              </Text>
              <Text className="text-white">
                {formatDateTime(exam.end_time)}
              </Text>
            </View>
            <View>
              <Text className="text-white">⏱️ {exam.exam_duration} dakika</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {activeTab === "finished" && (
        <View className="p-4 bg-gray-300">
          <Text className="text-lg font-semibold">
            Sınav yayından kaldırıldı.
          </Text>
        </View>
      )}
      {activeTab === "scheduled" && (
        <TouchableOpacity
          className="w-full items-center p-2"
          style={{ backgroundColor: "#3B82F6" }}
          onPress={() => handleStartExam(Number(exam?.id))}
        >
          <Text className="text-lg text-white">Sınavı Başlat</Text>
        </TouchableOpacity>
      )}
      {activeTab === "active" && (
        <TouchableOpacity
          className="w-full items-center p-2"
          style={{ backgroundColor: "#EF4444" }}
          onPress={() => handleDeleteExam(exam.id)}
        >
          <Text className="text-lg text-white">Sınavı Bitir</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
