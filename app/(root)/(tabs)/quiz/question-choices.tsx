import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useGetQuestionById } from "@/hooks/Question/useGetQuestionById";

export default function QuestionChoices() {
  const { soruId } = useLocalSearchParams();
  const { getQuestionById, question, isLoading } = useGetQuestionById();
  const [choices, setChoices] = useState<any[]>([]);
  const [choiceText, setChoiceText] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAddChoice, setShowAddChoice] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (soruId) {
      getQuestionById(Number(soruId));
    }
  }, [soruId]);

  const handleAddChoice = () => {
    if (!choiceText.trim()) return;
    let newChoices;
    if (editIndex !== null) {
      // Güncelleme
      newChoices = [...choices];
      newChoices[editIndex] = { choice_text: choiceText, is_correct: isCorrect };
      setChoices(newChoices);
      setEditIndex(null);
    } else {
      newChoices = [
        ...choices,
        { choice_text: choiceText, is_correct: isCorrect },
      ];
      setChoices(newChoices);
    }
    setChoiceText("");
    setIsCorrect(false);

    // Doğru şık kontrolü
    const hasCorrect = (editIndex !== null ? newChoices : choices).some(c => c.is_correct || (editIndex !== null && isCorrect));
    if (editIndex === null && newChoices.length === 4 && !newChoices.some(c => c.is_correct)) {
      setError("En az bir şık doğru seçilmeli!");
    } else if (editIndex !== null && newChoices.length === 4 && !newChoices.some(c => c.is_correct)) {
      setError("En az bir şık doğru seçilmeli!");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    if (choices.length === 4) {
      setShowAddChoice(false);
    }
  }, [choices]);

  const handleEditChoice = (idx: number) => {
    setChoiceText(choices[idx].choice_text);
    setIsCorrect(choices[idx].is_correct);
    setShowAddChoice(true);
    setEditIndex(idx);
  };

  const handleDeleteChoice = (idx: number) => {
    setChoices(choices.filter((_, i) => i !== idx));
    if (editIndex === idx) {
      setEditIndex(null);
      setChoiceText("");
      setIsCorrect(false);
    }
  };

  if (isLoading) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  console.log("Question Data:", question);
  return (
    <ScrollView className="w-full h-full p-5">
      <View className="flex flex-col gap-5">
        <View>
          <Text
            className="text-lg font-bold"
            ellipsizeMode="tail"
            numberOfLines={10}
          >
            {question?.question_text}
          </Text>
        </View>


        {/* Şık ekleme alanı açma butonu sadece 4'ten az şık varsa görünür */}
        {!showAddChoice && choices.length < 4 && (
          <TouchableOpacity
            className="self-start bg-blue-600 px-5 py-2 rounded-lg"
            onPress={() => {
              setShowAddChoice(true);
              setEditIndex(null);
              setChoiceText("");
              setIsCorrect(false);
            }}
          >
            <Text className="text-white">Şık Ekle</Text>
          </TouchableOpacity>
        )}

        {/* Şık ekleme/düzenleme alanı: editIndex null ise ekle, değilse güncelle butonu */}
        {showAddChoice && (
          <View className="flex flex-col gap-4 mb-4 border border-blue-300 rounded-lg p-4 bg-blue-50">
            <Text className="text-lg font-semibold">{editIndex !== null ? "Şık Güncelle" : "Şık Ekle"}</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-2"
              placeholder="Şık metni"
              value={choiceText}
              onChangeText={setChoiceText}
            />
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <TouchableOpacity
                  className={`px-3 py-2 rounded-lg ${isCorrect ? "bg-green-500" : "bg-gray-200"}`}
                  onPress={() => setIsCorrect(!isCorrect)}
                >
                  <Text className={isCorrect ? "text-white" : "text-gray-800"}>
                    {isCorrect ? "Doğru Şık" : "Yanlış Şık"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-blue-600 px-4 py-2 rounded-lg"
                  onPress={handleAddChoice}
                  disabled={editIndex === null && choices.length === 4}
                >
                  <Text className="text-white">{editIndex !== null ? "Güncelle" : "Ekle"}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className="bg-gray-400 px-4 py-2 rounded-lg"
                onPress={() => {
                  setShowAddChoice(false);
                  setChoiceText("");
                  setIsCorrect(false);
                  setEditIndex(null);
                  setError("");
                }}
              >
                <Text className="text-white ">Kapat</Text>
              </TouchableOpacity>
            </View>
            {error ? (
              <Text className="text-red-600 text-sm mt-2">{error}</Text>
            ) : null}
          </View>
        )}

        {/* Eklenen şıklar */}
        <View className="flex flex-col gap-2">
          {choices.map((choice, idx) => (
            <View
              key={idx}
              className="w-full border border-gray-300 rounded-lg overflow-hidden flex flex-row items-center justify-between gap-2 p-4"
            >
              <View className="flex-1">
                <Text>{choice.choice_text}</Text>
                <Text
                  className={
                    choice.is_correct ? "text-green-600" : "text-gray-500"
                  }
                >
                  {choice.is_correct ? "Doğru" : "Yanlış"}
                </Text>
              </View>
              <View className="flex-row gap-2">
                <TouchableOpacity
                  className="bg-yellow-400 px-3 py-1 rounded-lg"
                  onPress={() => {
                    handleEditChoice(idx);
                  }}
                  disabled={choices.length === 4 && editIndex !== null && editIndex !== idx}
                >
                  <Text className="text-white">Düzenle</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-red-500 px-3 py-1 rounded-lg"
                  onPress={() => handleDeleteChoice(idx)}
                >
                  <Text className="text-white">Sil</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
