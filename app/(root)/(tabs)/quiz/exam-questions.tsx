import AddQuestion from "@/components/Questions/AddQuestion";
import QuestionListItem from "@/components/Questions/QuestionListItem";
import config from "@/config/config";
import { useAuth } from "@/context/AuthProvider";
import { useCreateQuestion } from "@/hooks/Question/useCreateQuestion";
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
  const { createQuestion } = useCreateQuestion();

  const newQuestion = {
    correct_answer: correctAnswer,
    exam_id: Number(examId),
    question_text: questionText,
    question_type: questionType,
  };

  const handleAddQuestion = () => {
    try {
      createQuestion(newQuestion);
      alert("Soru başarıyla eklendi.");
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

      <View className="mb-6 flex flex-col gap-2">
        <QuestionListItem
          soruId={1}
          question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <QuestionListItem
          soruId={2}
          question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </View>

      <AddQuestion
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        questionText={questionText}
        setQuestionText={setQuestionText}
        questionType={questionType}
        setQuestionType={setQuestionType}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
        handleAddQuestion={handleAddQuestion}
      />
    </ScrollView>
  );
}
