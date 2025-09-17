import ExamItem from "@/components/Exam/Examıtem";
import { teacherprofile } from "@/constants";
import { useAuth } from "@/context/AuthProvider";
import { useGetActiveExams } from "@/hooks/Exam/useGetActiveExams";
import { useGetScheduledExams } from "@/hooks/Exam/useGetScheduledExams";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

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
    <View className="flex-1 bg-[#39394A] pb-[80px]">
      {/* Profil alanı - student-role ile aynı koyu tema ve detaylar */}
      <View
        className="w-full h-80 border-r border-l border-b border-white/10 flex flex-col justify-between px-6 py-2 relative"
        style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
      >
        <View className="flex flex-col items-center gap-4 pt-[70px]">
          <View className="w-[100px] h-[100px] rounded-full bg-[#18181B] border border-gray-700 flex items-center justify-center">
            <Image
              source={teacherprofile}
              className="w-[100px] h-[100px] rounded-full bg-[#18181B]"
            />
          </View>
          <View className="flex flex-col items-center">
            <Text className="text-white text-2xl font-bold">
              Dr. Öğr. Üyesi {user?.name} {user?.surname}
            </Text>
          </View>
        </View>
        {/* Profil ek bilgileri alt bar gibi en alta w-full */}
        <View className="w-full flex-row flex-wrap justify-center gap-2 px-6 pb-2">
          <View className="flex-row items-center gap-1">
            <Text className="text-gray-400 text-sm">🎓</Text>
            <Text className="text-white text-sm">Öğretim Üyesi</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="text-gray-400 text-sm">📚</Text>
            <Text className="text-white text-sm">Quiz: 5</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="text-gray-400 text-sm">🧑‍🎓</Text>
            <Text className="text-white text-sm">Öğrenci: 48</Text>
          </View>
        </View>
      </View>

      <ScrollView className="mx-auto px-4 py-6 w-full max-w-md">
        {/* Last seen */}
        <View className="mt-5 flex flex-col gap-6">
          <View>
            <Text className="mb-3 text-lg font-semibold text-white">
              Aktif Sınavlar
            </Text>
            <View className="flex flex-col">
              {activeExams.length === 0 ? (
                <Text className="text-gray-400">
                  Aktif sınav bulunmamaktadır.
                </Text>
              ) : (
                <>
                  {activeExams.map((exam) => (
                    <TouchableOpacity
                      key={exam.id}
                      onPress={() =>
                        router.push(`/quiz/exam-questions?examId=${exam.id}`)
                      }
                      className="rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-blue-300 shadow-lg p-4"
                    >
                      <ExamItem
                        title={exam.exam_name}
                        time={exam.exam_duration}
                        startTime={exam.start_time}
                        endTime={exam.end_time}
                        status={exam.status}
                        teacherId={exam.teacher_id}
                      />
                    </TouchableOpacity>
                  ))}
                </>
              )}
            </View>
          </View>
          <View>
            <Text className="mb-3 text-lg font-semibold text-white">
              Başlatılmayı Bekleyen Sınavlar
            </Text>
            <View className="flex flex-col">
              {scheduledExams.length === 0 ? (
                <Text className="text-gray-400">
                  Başlatılmayı bekleyen sınav bulunmamaktadır.
                </Text>
              ) : (
                <>
                  {scheduledExams.map((exam) => (
                    <TouchableOpacity
                      key={exam.id}
                      onPress={() =>
                        router.push(`/quiz/exam-questions?examId=${exam.id}`)
                      }
                      className="rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-red-300 shadow-lg p-4"
                    >
                      <ExamItem
                        title={exam.exam_name}
                        time={exam.exam_duration}
                        startTime={exam.start_time}
                        endTime={exam.end_time}
                        status={exam.status}
                        teacherId={exam.teacher_id}
                      />
                    </TouchableOpacity>
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
