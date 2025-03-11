import { Stack } from "expo-router";

export default function QuizLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Quizler" }} />
      <Stack.Screen name="quiz-olustur" options={{ title: "Quiz Oluştur" }} />
      <Stack.Screen name="soru-olustur" options={{ title: "Soru Oluştur" }} />
    </Stack>
  );
}