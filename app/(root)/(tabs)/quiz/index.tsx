import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthProvider";

const CARD_WIDTH = Dimensions.get("window").width * 0.7;
const CARD_HEIGHT = 180;

const cardsData = [
  {
    label: "Sınavlar",
    color: "bg-green-600",
    route: "/quiz/exam-list",
  },
  {
    label: "Başlatılmamış Sınavlar",
    color: "bg-blue-600",
    route: "/quiz/scheduled-exams",
    teacherOnly: true,
  },
  {
    label: "Sınav Oluştur",
    color: "bg-pink-500",
    route: "/quiz/create-exam",
    teacherOnly: true,
  },
];

export default function QuizScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Filtrele: Öğretmen değilse teacherOnly olanları gösterme
  const visibleCards = cardsData.filter(
    (card) => !card.teacherOnly || user?.role === "teacher"
  );

  // Dummy istatistik ve son sınav
  const quizStats = {
    total: 12,
    success: "%87",
    last: "15 Eylül 2025",
    lastQuiz: {
      date: "15 Eylül 2025",
    },
  };

  return (
    <View className="flex-1 flex-col gap-5 items-center bg-[#f3f4f6] py-20">
      {/* Hoş geldin ve istatistikler */}
      {user?.role === "teacher" && (
        <View className="w-full max-w-md px-6 pt-10 pb-2 flex flex-col gap-2">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            Sayın, {user?.name || "Kullanıcı"} {user?.surname || "Soyad"} 👋
          </Text>
          <View className="flex-row gap-4 mb-2">
            <View className="bg-white rounded-xl px-4 py-2 shadow">
              <Text className="text-xs text-gray-500">Toplam Quiz</Text>
              <Text className="text-lg font-bold text-green-600">
                {quizStats.total}
              </Text>
            </View>
            <View className="bg-white rounded-xl px-4 py-2 shadow">
              <Text className="text-xs text-gray-500">Katılım</Text>
              <Text className="text-lg font-bold text-blue-600">
                {quizStats.success}
              </Text>
            </View>
            <View className="bg-white rounded-xl px-4 py-2 shadow">
              <Text className="text-xs text-gray-500">
                Son Oluşturma Tarihi
              </Text>
              <Text className="text-lg font-bold text-pink-500">
                {quizStats.last}
              </Text>
            </View>
          </View>
        </View>
      )}

      {user?.role === "student" && (
        <View className="w-full max-w-md px-6 pt-10 pb-2 flex flex-col gap-2">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            Hoş Geldin, {user?.name || "Kullanıcı"} {user?.surname || "Soyad"}{" "}
            👋
          </Text>
          <View className="flex-row gap-4 mb-2">
            <View className="bg-white rounded-xl px-4 py-2 shadow">
              <Text className="text-xs text-gray-500">Katıldığın Quiz</Text>
              <Text className="text-lg font-bold text-green-600">
                {quizStats.total}
              </Text>
            </View>
            <View className="bg-white rounded-xl px-4 py-2 shadow">
              <Text className="text-xs text-gray-500">Başarı</Text>
              <Text className="text-lg font-bold text-blue-600">
                {quizStats.success}
              </Text>
            </View>
            <View className="bg-white rounded-xl px-4 py-2 shadow">
              <Text className="text-xs text-gray-500">Son Katılma Tarihi</Text>
              <Text className="text-lg font-bold text-pink-500">
                {quizStats.last}
              </Text>
            </View>
          </View>
        </View>
      )}

      {/* Quiz butonları alt alta */}
      <View className="w-full max-w-md flex flex-col gap-4 mt-4">
        {visibleCards.map((card) => (
          <TouchableOpacity
            key={card.label}
            activeOpacity={0.85}
            className={`rounded-2xl ${card.color} items-center justify-center border-4 border-transparent py-8 shadow`}
            onPress={() => router.push(card.route as string)}
          >
            <Text className="text-2xl font-bold text-white drop-shadow-lg">
              {card.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
