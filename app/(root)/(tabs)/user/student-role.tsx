import { avatar } from "@/constants";
import { useAuth } from "@/context/AuthProvider";
import { useGetActiveExams } from "@/hooks/Exam/useGetActiveExams";
import { useGetScheduledExams } from "@/hooks/Exam/useGetScheduledExams";
import { useRegisterForTheExam } from "@/hooks/ExamForStudent/useRegisterForTheExam";
import { formatDateTime } from "@/hooks/formatDateTime";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StudentRole = () => {
  // Tamamlanan quizler için index yönetimi
  const [completedIndex, setCompletedIndex] = useState(0);
  const handleNextCompletedQuiz = () => {
    setCompletedIndex((prev) => (prev + 1 < activeExams.length ? prev + 1 : 0));
  };
  const { user, token } = useAuth();
  const { getActiveExams, activeExams } = useGetActiveExams();
  const { getScheduledExams, scheduledExams } = useGetScheduledExams();
  const { registerForTheExam } = useRegisterForTheExam();

  useEffect(() => {
    getActiveExams();
    getScheduledExams();
  }, []);

  const takeToQuiz = (examId: number) => {
    registerForTheExam(examId);
  };

  console.log("Active Exams:", activeExams);
  console.log("Scheduled Exams:", scheduledExams);

  // Aktif quizler için index yönetimi
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNextQuiz = () => {
    setActiveIndex((prev) => (prev + 1 < activeExams.length ? prev + 1 : 0));
  };

  return (
  <View className="flex-1 bg-[#18181B]">
      {" "}
      {/* Genel arka plan: açık gri */}
      {/* Üstte kullanıcı alanı - gri tonları, w-full, yüksekliği belirgin */}
      <View
        className="w-full h-80 border-r border-l border-b border-white/10 flex flex-col justify-between px-6 py-2 relative"
        style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
      >
        <View className="flex flex-col items-center gap-2 pt-20">
          <Image
            source={avatar}
            className="w-[100px] h-[100px] rounded-full bg-[#18181B]"
          />
          <View className="flex flex-col items-center">
            <Text className="text-white text-2xl font-bold">
              {user?.name} {user?.surname}
            </Text>
            <Text className="text-gray-300 text-sm">
              {user?.role || "ornek@mail.com"}
            </Text>
          </View>
        </View>
        {/* Profil ek bilgileri alt bar gibi en alta w-full absolute */}
        <View className="w-full flex-row flex-wrap justify-center gap-2 px-6 pb-2">
          <View className="flex-row items-center gap-1">
            <Text className="text-gray-400 text-sm">🎓</Text>
            <Text className="text-white text-sm">Öğrenci</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="text-gray-400 text-sm">📚</Text>
            <Text className="text-white text-sm">Quiz: 12</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="text-gray-400 text-sm">🏆</Text>
            <Text className="text-white text-sm">Başarı: %78</Text>
          </View>
        </View>
      </View>
  <ScrollView className="flex-1">
        {/* Quiz kartları altına devam ediyor */}
        <View className="mt-8">
          <Text className="mx-6 mb-2 text-lg font-bold text-white">
            Aktif Quizler
          </Text>
          {activeExams.length > 0 && activeExams[activeIndex] && (
            <View className="w-full px-6">
              <View className="w-full p-6 rounded-2xl border border-white/10">
                <View className="w-full flex flex-row items-center justify-between mb-2">
                  <Text className="mb-2 bg-[#18181B] border border-white/10 self-start text-white px-3 py-1 rounded-md font-bold tracking-wide">
                    Aktif Quiz
                  </Text>
                  {/* Ok butonu - birden fazla quiz varsa */}
                  {activeExams.length > 1 && (
                    <TouchableOpacity
                      onPress={handleNextQuiz}
                      className="bg-[#18181B] w-10 h-10 rounded-full flex items-center justify-center border border-white/10"
                    >
                      <Text className="text-white text-xl">→</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <View className="flex-row justify-between items-start mb-5">
                  <View>
                    <Text
                      className="text-2xl font-extrabold text-white"
                      ellipsizeMode="tail"
                      numberOfLines={2}
                    >
                      {activeExams[activeIndex].exam_name}
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-end justify-between">
                  <View>
                    <View className="flex-row items-center gap-1 mb-1">
                      <Text style={{ fontSize: 12, color: "#A1A1AA" }}>⏰</Text>
                      <Text className="text-base text-white font-semibold">
                        {formatDateTime(activeExams[activeIndex].start_time)}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Text style={{ fontSize: 12, color: "#A1A1AA" }}>🏁</Text>
                      <Text className="text-base text-white font-semibold">
                        {formatDateTime(activeExams[activeIndex].end_time)}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => takeToQuiz(activeExams[activeIndex].id)}
                    className="px-6 py-2 rounded-full bg-[#18181B]"
                  >
                    <Text className="text-white font-bold text-base">
                      Quize Katıl
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
        {/* Tamamlanan Quizler alanı */}
        <View className="mt-8">
          <Text className="mx-6 mb-2 text-lg font-bold text-white">
            Tamamlanan Quizler
          </Text>
          {activeExams.length > 0 && activeExams[completedIndex] && (
            <View className="w-full px-6">
              <View className="w-full p-6 rounded-2xl border bg-[#27272A] border-[#18181B]">
                <View className="w-full flex flex-row items-center justify-between mb-2">
                  <Text className="mb-2 bg-[#A1A1AA] self-start text-white px-3 py-1 rounded-md font-bold tracking-wide">
                    Tamamlandı
                  </Text>
                  {/* Ok butonu - birden fazla quiz varsa */}
                  {activeExams.length > 1 && (
                    <TouchableOpacity
                      onPress={handleNextCompletedQuiz}
                      className="bg-[#18181B] w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <Text className="text-white text-xl">→</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <View className="flex-row justify-between items-start mb-5">
                  <View>
                    <Text
                      className="text-2xl font-extrabold text-white"
                      ellipsizeMode="tail"
                      numberOfLines={2}
                    >
                      {activeExams[completedIndex].exam_name}
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-end justify-between">
                  <View>
                    <View className="flex-row items-center gap-1 mb-1">
                      <Text style={{ fontSize: 12, color: "#A1A1AA" }}>⏰</Text>
                      <Text className="text-base text-white font-semibold">
                        {formatDateTime(activeExams[completedIndex].start_time)}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Text style={{ fontSize: 12, color: "#A1A1AA" }}>🏁</Text>
                      <Text className="text-base text-white font-semibold">
                        {formatDateTime(activeExams[completedIndex].end_time)}
                      </Text>
                    </View>
                  </View>
                  {/* Tamamlanan quizde buton olmayacak */}
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default StudentRole;
