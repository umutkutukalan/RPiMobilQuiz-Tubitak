import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthProvider";

export default function QuizScreen() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-100 p-5">
      <View className="flex flex-col gap-5">
        <TouchableOpacity
          className="rounded-lg p-5 bg-green-600 shadow-sm"
          onPress={() => router.push("/quiz/exam-list")}
        >
          <Text className="text-3xl text-white">Sınavlar</Text>
        </TouchableOpacity>
        {user?.role == "teacher" && (
          <>
            <TouchableOpacity
              className="rounded-lg p-5 bg-blue-600 shadow-sm"
              onPress={() => router.push("/quiz/scheduled-exams")}
            >
              <Text className="text-3xl text-white">
                Başlatılmamış Sınavlar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="rounded-lg p-5 bg-gray-600 shadow-sm"
              onPress={() => router.push("/quiz/create-exam")}
            >
              <Text className="text-3xl text-white">Sınav Oluştur</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}
