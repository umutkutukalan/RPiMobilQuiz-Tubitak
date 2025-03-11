import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function QuizScreen() {
  const router = useRouter();

  return (
    <View
      className="bg-black"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
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
    </View>
  );
}
