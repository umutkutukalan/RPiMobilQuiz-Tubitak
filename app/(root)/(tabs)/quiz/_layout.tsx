import { Stack } from "expo-router";

export default function QuizLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Sınavlar" }} />
      <Stack.Screen name="quiz-olustur" options={{ title: "Quiz Oluştur" }} />
      <Stack.Screen
        name="scheduled-exams"
        options={{ title: "Bekleyen Sınavlar" }}
      />
      <Stack.Screen name="exam-list" options={{ title: "Başlatılmış Sınavlar" }} />
    </Stack>
  );
}
