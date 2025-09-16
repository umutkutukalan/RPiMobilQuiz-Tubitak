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
import { usePostChoiceForExam } from "@/hooks/Choices/usePostChoiceForExam";
import { useGetChoicesForQuestion } from "@/hooks/Choices/useGetChoicesForQuestion";

export default function QuestionChoices() {
  const { soruId } = useLocalSearchParams();
  const { getQuestionById, question, isLoading } = useGetQuestionById();
  const { postChoiceForExam } = usePostChoiceForExam();
  const {
    getChoicesForQuestion,
    choices: questionChoices,
    isLoading: isLoadingChoices,
  } = useGetChoicesForQuestion();
  const [choices, setChoices] = useState<any[]>([]);
  const [choiceText, setChoiceText] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAddChoice, setShowAddChoice] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (soruId) {
      getQuestionById(Number(soruId));
      getChoicesForQuestion(Number(soruId));
    }
  }, [soruId]);

  const handleAddChoice = () => {
    if (!choiceText.trim()) return;
    let newChoices;
    if (editIndex !== null) {
      // Güncelleme
      newChoices = [...choices];
      newChoices[editIndex] = {
        choice_text: choiceText,
        is_correct: isCorrect,
      };
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
    const hasCorrect = (editIndex !== null ? newChoices : choices).some(
      (c) => c.is_correct || (editIndex !== null && isCorrect)
    );
    if (
      editIndex === null &&
      newChoices.length === 4 &&
      !newChoices.some((c) => c.is_correct)
    ) {
      setError("En az bir şık doğru seçilmeli!");
    } else if (
      editIndex !== null &&
      newChoices.length === 4 &&
      !newChoices.some((c) => c.is_correct)
    ) {
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

  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitChoices = async () => {
    setSubmitLoading(true);
    setSubmitError("");
    setSubmitSuccess(false);
    try {
      if (!soruId) {
        setSubmitError("Soru ID bulunamadı!");
        setSubmitLoading(false);
        return;
      }
      if (choices.length !== 4) {
        setSubmitError("4 adet şık eklemelisiniz!");
        setSubmitLoading(false);
        return;
      }
      if (!choices.some((c) => c.is_correct)) {
        setSubmitError("En az bir şık doğru olmalı!");
        setSubmitLoading(false);
        return;
      }
      await postChoiceForExam(choices, Number(soruId));
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError("Şıklar gönderilemedi. Lütfen tekrar deneyin.");
    }
    setSubmitLoading(false);
  };

  if (isLoading) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  console.log("Question Data:", question);
  // Eğer questionChoices doluysa onları göster, yoksa ekleme/gönderme alanı göster
  const showServerChoices = Array.isArray(questionChoices) && questionChoices.length > 0;

  return (
    <ScrollView className="w-full h-full px-5 pt-20">
      <View className="flex flex-col gap-5">
        <View>
          <Text
            className="text-lg font-bold"
            ellipsizeMode="tail"
            numberOfLines={10}
          >
            {typeof question?.question_text === "string"
              ? question.question_text
              : "Soru metni bulunamadı"}
          </Text>
        </View>

        {showServerChoices ? (
          <View className="flex flex-col gap-2 mt-4">
            <Text className="text-base font-semibold mb-2">Eklenmiş Şıklar</Text>
            {questionChoices.map((choice: any, idx: number) => (
              <View
                key={idx}
                className="w-full border border-gray-300 rounded-lg overflow-hidden flex flex-row items-center justify-between gap-2 p-4"
              >
                <View className="flex-1">
                  <Text>{choice.choice_text}</Text>
                  <Text className={choice.is_correct ? "text-green-600" : "text-gray-500"}>
                    {choice.is_correct ? "Doğru" : "Yanlış"}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <>
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
                <Text className="text-lg font-semibold">
                  {editIndex !== null ? "Şık Güncelle" : "Şık Ekle"}
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg p-2"
                  placeholder="Şık metni"
                  value={choiceText}
                  onChangeText={setChoiceText}
                />
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <TouchableOpacity
                      className={`px-3 py-2 rounded-lg ${
                        isCorrect ? "bg-green-500" : "bg-gray-200"
                      }`}
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
                      <Text className="text-white">
                        {editIndex !== null ? "Güncelle" : "Ekle"}
                      </Text>
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
                      disabled={
                        choices.length === 4 &&
                        editIndex !== null &&
                        editIndex !== idx
                      }
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

            {/* Şıkları gönder butonu ve durum mesajları - sadece 4 şık ve en az bir doğru varsa görünür */}
            {choices.length === 4 && choices.some((c) => c.is_correct) ? (
              <View className="mt-6">
                <TouchableOpacity
                  className="bg-green-600 px-6 py-3 rounded-lg"
                  onPress={handleSubmitChoices}
                  disabled={submitLoading}
                >
                  <Text className="text-white text-center font-bold">
                    Şıkları Oluştur
                  </Text>
                </TouchableOpacity>
                {submitLoading && (
                  <Text className="text-blue-600 text-center mt-2">
                    Gönderiliyor...
                  </Text>
                )}
                {submitError && (
                  <Text className="text-red-600 text-center mt-2">
                    {submitError}
                  </Text>
                )}
                {submitSuccess && (
                  <Text className="text-green-600 text-center mt-2">
                    Şıklar başarıyla oluşturuldu!
                  </Text>
                )}
              </View>
            ) : choices.length === 4 && !choices.some((c) => c.is_correct) ? (
              <View className="mt-6">
                <Text className="text-red-600 text-center font-bold">
                  Hiç doğru şık seçmediniz!
                </Text>
              </View>
            ) : null}
          </>
        )}
      </View>
    </ScrollView>
  );
}
