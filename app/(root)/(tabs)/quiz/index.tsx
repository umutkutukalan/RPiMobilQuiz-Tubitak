import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function QuizScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F4F6", padding: 16 }}>
      <View style={{ gap: 16, marginBottom: 80 }}>
        <TouchableOpacity
          style={{
            borderRadius: 24,
            padding: 24,
            backgroundColor: "#a78bfa",
          }}
          onPress={() => router.push("/quiz/exam-list")}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Sınavlar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 24,
            padding: 24,
            backgroundColor: "#0f172a",
          }}
          onPress={() => router.push("/quiz/create-exam")}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Sınav Oluştur
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 24,
            padding: 24,
            backgroundColor: "#2563eb",
          }}
          onPress={() => router.push("/quiz/soru-olustur")}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Başlatılmamış Sınavlar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
