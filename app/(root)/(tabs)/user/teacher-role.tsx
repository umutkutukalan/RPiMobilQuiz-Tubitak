import ExamItem from "@/components/Exam/Examıtem";
import { useAuth } from "@/context/AuthProvider";
import { useGetActiveExams } from "@/hooks/Exam/useGetActiveExams";
import { useGetScheduledExams } from "@/hooks/Exam/useGetScheduledExams";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

const TeacherRole = () => {
  const { user } = useAuth();
  const router = useRouter();
  const {
    getActiveExams,
    activeExams,
    isLoading: isLoadingActive,
  } = useGetActiveExams();
  const {
    getScheduledExams,
    scheduledExams,
    isLoading: isLoadingScheduled,
  } = useGetScheduledExams();

  useEffect(() => {
    getActiveExams();
    getScheduledExams();
  }, []);

  console.log("Active Exams:", activeExams);

  if (isLoadingActive && isLoadingScheduled) {
    return (
      <View className="flex h-full items-center justify-center">
        <Text className="text-lg">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex h-full">
      <ScrollView className="mx-auto px-4 py-6 w-full max-w-md">
        {/* Hero */}
        <View className="relative overflow-hidden rounded-xl p-6 border border-gray-200 bg-white">
          <View className="flex flex-col gap-6">
            <View className="flex-1">
              <View className="flex flex-row items-center gap-2">
                <View className="w-12 h-12 rounded-full border border-gray-300"></View>
                <Text className="text-xl font-bold">
                  {user?.name} {user?.surname}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Last seen */}
        <View className="mt-6 flex flex-col gap-4">
          <View className="">
            <Text className="mb-3 text-lg font-semibold text-gray-800">
              Aktif Sınavlar
            </Text>
            <View className="space-y-3 flex flex-col">
              {activeExams.length === 0 ? (
                <Text className="text-gray-500">
                  Aktif sınav bulunmamaktadır.
                </Text>
              ) : (
                <>
                  {activeExams.map((exam) => (
                    <ExamItem
                      key={exam.id}
                      title={exam.exam_name}
                      time={exam.exam_duration}
                      startTime={exam.start_time}
                      endTime={exam.end_time}
                      status={exam.status}
                      teacherId={exam.teacher_id}
                    />
                  ))}
                </>
              )}
            </View>
          </View>
          <View className="">
            <Text className="mb-3 text-lg font-semibold text-gray-800">
              Başlatılmayı Bekleyen Sınavlar
            </Text>
            <View className="space-y-3 flex flex-col gap-2">
              {scheduledExams.length === 0 ? (
                <Text className="text-gray-500">
                  Başlatılmayı bekleyen sınav bulunmamaktadır.
                </Text>
              ) : (
                <>
                  {scheduledExams.map((exam) => (
                    <ExamItem
                      key={exam.id}
                      title={exam.exam_name}
                      time={exam.exam_duration}
                      startTime={exam.start_time}
                      endTime={exam.end_time}
                      status={exam.status}
                      teacherId={exam.teacher_id}
                    />
                  ))}
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default TeacherRole;
