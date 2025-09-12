import { useDeleteQuestion } from "@/hooks/Question/useDeleteQuestion";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Alert } from "react-native";

interface QuestionListItemProps {
  question_text: string;
  soruId: number;
  soruIdx: number;
  onDelete?: () => void;
}

const QuestionListItem = ({
  question_text,
  soruId,
  soruIdx,
  onDelete,
}: QuestionListItemProps) => {
  const router = useRouter();
  const { deleteQuestion } = useDeleteQuestion();

  const handleDelete = () => {
    Alert.alert("Soruyu Sil", "Silmek istediğinize emin misiniz?", [
      {
        text: "İptal",
        style: "cancel",
      },
      {
        text: "Evet",
        style: "destructive",
        onPress: async () => {
          await deleteQuestion(soruId);
          if (onDelete) onDelete();
        },
      },
    ]);
  };

  return (
    <View className="w-full border border-gray-300 rounded-lg overflow-hidden flex flex-row items-center justify-between gap-2 p-4">
      <TouchableOpacity
        onPress={() => router.push(`/quiz/question-choices?soruId=${soruId}`)}
        className="flex-1"
      >
        <Text className="text-2xl font-bold">{soruIdx}. Soru</Text>
        <Text className="text-sm">{question_text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleDelete}
        className="bg-red-500 px-3 py-1 rounded-lg"
      >
        <Text className="text-white font-bold">Sil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionListItem;
