import config from "@/config/config";
import { useAuth } from "@/context/AuthProvider";
import { useGetActiveExams } from "@/hooks/Exam/useGetActiveExams";
import { useGetScheduledExams } from "@/hooks/Exam/useGetScheduledExams";
import { formatDateTime } from "@/hooks/formatDateTime";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StudentRole = () => {
  const { user, token } = useAuth();
  const { getActiveExams, activeExams } = useGetActiveExams();
  const { getScheduledExams, scheduledExams } = useGetScheduledExams();

  useEffect(() => {
    getActiveExams();
    getScheduledExams();
  }, []);

  const getStudentExams = async () => {
    try {
      const response = await axios.get(
        `${config.baseUrl}/Exam/student_active_exams`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Student Exams Response:", response.data);
    } catch (error) {
      console.error("Error fetching student exams:", error);
      throw error;
    }
  };

  useEffect(() => {
    getStudentExams();
  }, []);

  console.log("Active Exams:", activeExams);
  console.log("Scheduled Exams:", scheduledExams);

  // Aktif quizler için index yönetimi
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNextQuiz = () => {
    setActiveIndex((prev) => (prev + 1 < activeExams.length ? prev + 1 : 0));
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4 bg-white">
          <View className="flex-row items-center">
            <Image className="w-12 h-12 rounded-full mr-3 bg-gray-300" />
            <View>
              <Text className="text-gray-600 text-sm">Hoş Geldin,</Text>
              <Text className="text-blue-600 text-lg font-semibold">
                {user?.name}
                {" " + user?.surname}
              </Text>
              ,
            </View>
          </View>
        </View>

        {/* Aktif Quizler - tek item w-full ve ok ile geçiş */}
        <View className="mt-6">
          <Text className="mx-6 mb-2 text-lg font-bold">Aktif Quizler</Text>
          {activeExams.length > 0 && (
            <View className="w-full px-6">
              <View className="w-full p-6 rounded-2xl border bg-white relative">
                <View className="w-full flex flex-row items-center justify-between mb-2">
                  <Text className="mb-2 bg-blue-500 self-start text-white px-3 py-1 rounded-md">
                    Aktif Quiz
                  </Text>
                  {/* Ok butonu */}
                  {activeExams.length > 1 && (
                    <TouchableOpacity
                      onPress={handleNextQuiz}
                      className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <Text className="text-white text-xl">→</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <View className="flex-row justify-between items-start mb-5">
                  <View>
                    <Text className="text-xl font-bold"
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >
                      {activeExams[activeIndex]?.exam_name}
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-end justify-between">
                  <View>
                    <View className="flex-row items-center gap-1">
                      <Text style={{ fontSize: 10 }}>⏰</Text>
                      <Text className="text-base">
                        {formatDateTime(activeExams[activeIndex]?.start_time)}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Text style={{ fontSize: 10 }}>🏁</Text>
                      <Text className="text-base">
                        {formatDateTime(activeExams[activeIndex]?.end_time)}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity className="bg-red-400 px-4 py-1 rounded-md">
                    <Text className="text-white font-semibold text-base">
                      Quize Katıl
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Upcoming Tests */}
        <View className="px-6 mt-8 pb-8">
          <Text className="text-gray-800 text-xl font-bold mb-4">
            Tamamlanan Quizler
          </Text>

          <View className="flex-row space-x-4">
            {/* Chemistry Test */}
            <TouchableOpacity className="flex-1 bg-gradient-to-br from-red-400 to-pink-500 p-6 rounded-2xl items-center">
              <Text style={{ fontSize: 32 }}>📄</Text>
              <Text className="text-lg font-bold mt-2">
                İş Sağlığı Güvenliği
              </Text>
            </TouchableOpacity>

            {/* Physics Test */}
            <TouchableOpacity className="flex-1 bg-gradient-to-br from-purple-400 to-blue-500 p-6 rounded-2xl items-center">
              <Text style={{ fontSize: 32 }}>📄</Text>
              <Text className="text-lg font-bold mt-2">Algoritma II</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default StudentRole;
