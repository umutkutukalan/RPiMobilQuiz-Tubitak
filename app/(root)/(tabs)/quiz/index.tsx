import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function QuizScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Quiz Sayfası</Text>
        <Button
          title="Quiz Oluştur"
          onPress={() => router.push("/quiz/quiz-olustur")}
        />
      </View>
      <View>
        <Text>Soru Sayfası</Text>
        <Button
          title="Soru Oluştur"
          onPress={() => router.push("/quiz/soru-olustur")}
        />
      </View>
      <View >
        <Text>ExamList</Text>
        <Button
          title="Exam List"
          onPress={() => router.push("/quiz/exam-list")}
        />
      </View>
    </View>
  );
}
