import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from "react-native";
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
      name: "Genel Kültür Quiz",
      score: "85/100",
      date: "15 Eylül 2025",
    },
  };

  return (
    <View className="flex-1 flex-col gap-5 items-center justify-between bg-[#f3f4f6] py-20">
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
              <Text className="text-xs text-gray-500">
                Son Katılma Tarihi
              </Text>
              <Text className="text-lg font-bold text-pink-500">
                {quizStats.last}
              </Text>
            </View>
          </View>
        </View>
      )}

      {/* Quiz kartları */}
      <View className="w-full max-w-md h-full flex flex-col">
        {visibleCards.map((card, idx) => {
          const isActive = activeIdx === idx;
          return (
            <Animated.View
              key={card.label}
              style={{
                width: "100%",
                marginTop: idx === 0 ? 0 : -24,
                zIndex: isActive ? 10 : visibleCards.length - idx,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: isActive ? 0.35 : 0.18,
                shadowRadius: isActive ? 16 : 8,
                elevation: isActive ? 8 : 2,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.85}
                className={`rounded-2xl ${
                  card.color
                } items-center justify-center border-4 ${
                  isActive ? "border-yellow-400" : "border-transparent"
                } py-10`}
                onPress={() => {
                  setActiveIdx(idx);
                  setTimeout(() => {
                    router.push(card.route as string);
                    setActiveIdx(null);
                  }, 200);
                }}
              >
                <Text className="text-3xl font-bold text-white drop-shadow-lg">
                  {card.label}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>

      {/* Son katıldığın quiz kartı */}
      <View className="w-full max-w-md px-6 pb-4">
        <View className="bg-white rounded-xl px-4 py-3 shadow flex-row items-center justify-between">
          <View>
            <Text className="text-xs text-gray-500">Son Katıldığın Quiz</Text>
            <Text className="text-base font-bold text-gray-800">
              {quizStats.lastQuiz.name}
            </Text>
            <Text className="text-xs text-gray-500">
              {quizStats.lastQuiz.date}
            </Text>
          </View>
          <View className="bg-green-100 rounded-full px-3 py-1">
            <Text className="text-sm font-bold text-green-700">
              {quizStats.lastQuiz.score}
            </Text>
          </View>
        </View>
      </View>

      {/* Motivasyon cümlesi */}
      <View className="w-full max-w-md px-6 pb-8">
        <Text className="text-center text-sm text-gray-500 italic">
          "Başarı, denemekten vazgeçmemektir! Yeni bir quiz ile kendini test
          et."
        </Text>
      </View>
    </View>
  );
}
