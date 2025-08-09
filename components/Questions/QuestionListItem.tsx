import { Text, View } from "react-native";

interface QuestionListItemProps {
  question_text: string;
  soruId: number;
}

const QuestionListItem = ({ question_text, soruId }: QuestionListItemProps) => {
  return (
    <View className="w-full border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-center gap-1 p-4">
      <Text className="text-2xl font-bold">{soruId}. Soru</Text>
      <Text className="text-sm">{question_text}</Text>
    </View>
  );
};

export default QuestionListItem;
