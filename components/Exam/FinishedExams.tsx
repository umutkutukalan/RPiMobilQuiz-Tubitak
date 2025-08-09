import { useGetAllExam } from "@/hooks/Exam/useGetAllExam";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface FinishedExamsProps {
  handleDeleteExam: (examId: string) => void;
  formatDateTime: (dateTime: string) => string;
  handleStartExam: (examId: number) => void;
}

const FinishedExams = ({
  handleDeleteExam,
  formatDateTime,
  handleStartExam,
}: FinishedExamsProps) => {
  const router = useRouter();
  const { examList, getAllExams, isLoading } = useGetAllExam();

  useEffect(() => {
    getAllExams();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (examList.filter((exam) => exam.status === "finished").length === 0) {
    return <Text>Biten sınav bulunamadı.</Text>;
  }

  return (
    <ScrollView>
      <View className="flex flex-col gap-5">
        {examList
          .filter((exam) => exam.status === "finished")
          .map((exam) => (
          <View
            key={exam.id}
            className="bg-red-600 rounded-lg shadow overflow-hidden"
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
                    <Text className="text-white">
                      ⏱️ {exam.exam_duration} dakika
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View className="p-4 bg-gray-300">
              <Text className="text-lg font-semibold">
                Sınav yayından kaldırıldı.
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FinishedExams;
