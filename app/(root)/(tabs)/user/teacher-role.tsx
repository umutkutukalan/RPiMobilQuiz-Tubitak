import ExamItem from "@/components/Exam/Examıtem";
import { useGetActiveExams } from "@/hooks/Exam/useGetActiveExams";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const TeacherRole = () => {
  const { getActiveExams, activeExams } = useGetActiveExams();

  useEffect(() => {
    getActiveExams();
  }, []);

  console.log("Active Exams:", activeExams);

  return (
    <View className="flex">
      <ScrollView className="mx-auto px-4 py-6 w-full max-w-md">
        {/* Hero */}
        <View className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 to-indigo-100 p-6 shadow-sm ring-1 ring-sky-100 bg-red-300">
          {/* Decorative blobs */}
          <View className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/40 blur-2xl" />
          <View className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/40 blur-2xl" />

          <View className="flex flex-col gap-6">
            <View className="flex-1">
              <Text className="text-2xl font-extrabold leading-snug text-slate-900">
                What do you want to learn today?
              </Text>
              <View className="mt-4">
                <TouchableOpacity className="rounded-full bg-orange-500">
                  <Text className="text-white px-4 py-2 font-bold">
                    Get Started
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="h-10 w-10 bg-gray-200" />
          </View>
        </View>

        {/* Last seen */}
        <View className="mt-6">
          <Text className="mb-3 text-lg font-semibold text-gray-800">
            Aktif Sınavlar
          </Text>
          <View className="space-y-3">
            {activeExams.map((exam) => (
              <ExamItem
                key={exam.id}
                title={exam.exam_name}
                time={exam.exam_duration}
                startTime={exam.start_time}
                endTime={exam.end_time}
                teacherId={exam.teacher_id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default TeacherRole;
