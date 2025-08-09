import AddQuestion from "@/components/Questions/AddQuestion";
import QuestionListItem from "@/components/Questions/QuestionListItem";
import { useGetExamById } from "@/hooks/Exam/useGetExamById";
import { formatDateTime } from "@/hooks/formatDateTime";
import { useCreateQuestion } from "@/hooks/Question/useCreateQuestion";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

export default function ExamQuestions() {
  const { examId } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const { createQuestion } = useCreateQuestion();
  const { getExamById, exam, isLoading } = useGetExamById();
  const { getUserById, userData } = useGetUserById();

  const newQuestion = {
    correct_answer: correctAnswer,
    exam_id: Number(examId),
    question_text: questionText,
    question_type: questionType,
  };

  useEffect(() => {
    if (examId) {
      getExamById(Number(examId));
    }
  }, [examId]);

  useEffect(() => {
    if (exam?.teacher_id) {
      getUserById(Number(exam.teacher_id));
    }
  }, [exam?.teacher_id]);

  console.log("Exam Data:", exam);
  console.log("User Data:", userData);

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

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="flex-1 bg-gray-100">
      {/* Fixed Header */}
      <View className="bg-white flex-row items-start justify-between border-b border-gray-300 p-4">
        <View className="flex flex-col gap-1 justify-center">
          <View className="flex flex-row items-center gap-2">
            <View className="w-6 h-6 rounded-full bg-gray-400">
              <Image
                source={{ uri: userData?.profile_picture }}
                className="w-full h-full rounded-full"
              />
            </View>
            <Text className="text-lg">
              {userData?.name} {userData?.surname}{" "}
            </Text>
          </View>
          <Text className="text-4xl font-bold">{exam?.exam_name}</Text>
          <Text className="text-lg text-gray-600">
            {formatDateTime(exam?.start_time)} -{" "}
            {formatDateTime(exam?.end_time)}
          </Text>
        </View>
        <TouchableOpacity
          className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-3xl font-bold">+</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1">
        <View className="flex flex-col gap-2 p-2">
          <QuestionListItem
            soruId={1}
            question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <QuestionListItem
            soruId={2}
            question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <QuestionListItem
            soruId={3}
            question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <QuestionListItem
            soruId={4}
            question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <QuestionListItem
            soruId={5}
            question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <QuestionListItem
            soruId={6}
            question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <QuestionListItem
            soruId={7}
            question_text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </View>
      </ScrollView>

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
    </View>
  );
}
