import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface QuestionListItemProps {
  question_text: string;
  soruId: number;
  soruIdx: number;
}

const QuestionListItem = ({ question_text, soruId, soruIdx }: QuestionListItemProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/quiz/question-choices?soruId=${soruId}`)}
      className="w-full border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-center gap-1 p-4"
    >
      <Text className="text-2xl font-bold">{soruIdx}. Soru</Text>
      <Text className="text-sm">{question_text}</Text>
    </TouchableOpacity>
  );
};

export default QuestionListItem;
