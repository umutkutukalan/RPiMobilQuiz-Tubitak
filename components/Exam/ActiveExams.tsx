import { useGetAllExam } from "@/hooks/Exam/useGetAllExam";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface ActiveExamsProps {
  handleDeleteExam: (examId: string) => void;
  formatDateTime: (dateTime: string) => string;
  handleStartExam: (examId: number) => void;
}

const ActiveExams = ({
  handleDeleteExam,
  formatDateTime,
  handleStartExam,
}: ActiveExamsProps) => {
  const router = useRouter();
  const { examList, getAllExams, isLoading } = useGetAllExam();

  useEffect(() => {
    getAllExams();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (examList.filter((exam) => exam.status === "active").length === 0) {
    return <Text>Aktif sınav bulunamadı.</Text>;
  }

  return (
    <ScrollView>
      <View className="flex flex-col gap-5">
        {examList
          .filter((exam) => exam.status === "active")
          .map((exam) => (
            <View
              key={exam.id}
              className="bg-blue-400 rounded-lg shadow overflow-hidden"
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
                <View className="flex flex-row justify-between items-center">
                  <View>
                    <Text className="text-2xl color-white font-semibold">
                      {exam.exam_name}
                    </Text>
                    <Text className="text-xs color-white font-semibold">
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
                      <Text>{formatDateTime(exam.start_time)}</Text>
                      <Text>{formatDateTime(exam.end_time)}</Text>
                    </View>
                    <View>
                      <Text>⏱️ {exam.exam_duration} dakika</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              {exam.status === "active" ? (
                <TouchableOpacity className="bg-red-500 w-full items-center p-2">
                  <Text className="text-lg text-white">Sınavı Bitir</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  className="bg-green-500 w-full items-center p-2"
                  onPress={() => handleStartExam(Number(exam?.id))}
                >
                  <Text className="text-lg text-white">Sınavı Başlat</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default ActiveExams;
