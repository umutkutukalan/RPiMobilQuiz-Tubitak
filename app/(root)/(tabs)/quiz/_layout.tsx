import { Stack } from "expo-router";

export default function QuizLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="quiz-olustur" options={{ headerShown: false }} />
      <Stack.Screen name="soru-olustur" options={{ headerShown: false }} />
    </Stack>
  );
}
