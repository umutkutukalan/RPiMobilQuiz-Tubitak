import config from "@/config/config";
import { useAuth } from "@/context/AuthProvider";
import { CreateQuestionService } from "@/services/Question/CreateQuestionService";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";

export default function ExamQuestions() {
  const { token } = useAuth();
  const { examId } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestion = () => {
    // Burada API'ye post edebilirsin
    const newQuestion = {
      exam_id: Number(examId),
      question_text: questionText,
      question_type: questionType,
      correct_answer: correctAnswer,
    };

    try {
      CreateQuestionService(newQuestion, token);
    } catch (error) {
      console.error("Soru eklenirken hata oluştu:", error);
      alert("Soru eklenirken bir hata oluştu. Lütfen tekrar deneyin.");
    }

    console.log("Yeni Soru:", newQuestion);
    setModalVisible(false);
    setQuestionText("");
    setQuestionType("");
    setCorrectAnswer("");
  };

  useEffect(() => {
    try {
      const response = axios.get(
        `${config.baseUrl}/Questin/get_questions/${examId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Sınav soruları:", response.data);
    } catch (error) {
      console.error("Sınav soruları yüklenirken hata oluştu:", error);
    }
  }, []);

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-2xl font-bold">Sınav Soruları</Text>
        <TouchableOpacity
          className="w-12 h-12 rounded-full bg-purple-500 items-center justify-center"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-3xl font-bold">+</Text>
        </TouchableOpacity>
      </View>

      {/* Burada sınavın mevcut soruları listelenebilir */}

      {/* Soru Ekleme Modalı */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-2xl p-6 w-4/5">
            <Text className="text-lg font-bold mb-4 text-center">
              Soru Ekle
            </Text>
            <TextInput
              className="bg-gray-100 rounded-lg p-3 mb-3"
              placeholder="Soru Metni"
              value={questionText}
              onChangeText={setQuestionText}
            />
            <TextInput
              className="bg-gray-100 rounded-lg p-3 mb-3"
              placeholder="Soru Tipi (ör: multiple_choice)"
              value={questionType}
              onChangeText={setQuestionType}
            />
            <TextInput
              className="bg-gray-100 rounded-lg p-3 mb-3"
              placeholder="Doğru Cevap"
              value={correctAnswer}
              onChangeText={setCorrectAnswer}
            />
            <TouchableOpacity
              className="bg-purple-500 rounded-lg py-3 items-center mt-2"
              onPress={handleAddQuestion}
            >
              <Text className="text-white font-bold">Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-gray-300 rounded-lg py-3 items-center mt-2"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-gray-800 font-bold">Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
