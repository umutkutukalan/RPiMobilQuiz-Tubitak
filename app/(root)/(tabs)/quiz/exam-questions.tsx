import AddQuestion from "@/components/Questions/AddQuestion";
import QuestionListItem from "@/components/Questions/QuestionListItem";
import { useGetExamById } from "@/hooks/Exam/useGetExamById";
import { formatDateTime } from "@/hooks/formatDateTime";
import { useCreateQuestion } from "@/hooks/Question/useCreateQuestion";
import { useGetQuestionByExam } from "@/hooks/Question/useGetQuestionByExam";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

export default function ExamQuestions() {
  const { examId } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("multiple_choice");
  const { createQuestion } = useCreateQuestion();
  const {
    getQuestionByExam,
    examQuestions,
    isLoading: isLoadingQuestions,
  } = useGetQuestionByExam();
  const { getExamById, exam, isLoading } = useGetExamById();
  const { getUserById, userData } = useGetUserById();

  const newQuestion = {
    exam_id: Number(examId),
    question_text: questionText,
    question_type: questionType,
  };

  useEffect(() => {
    if (examId) {
      getExamById(Number(examId));
      getQuestionByExam(Number(examId));
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
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="w-full flex-1 bg-gray-100">
      {/* Fixed Header */}
      <View className="w-full bg-white flex-col gap-2 border-b border-gray-300 p-4">
        <View className="w-full flex flex-row items-start justify-between">
          <View className="w-5/6 flex flex-col gap-2 justify-center">
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
          </View>
          {exam?.status === "scheduled" && (
            <View className="w-1/6 flex items-end justify-end">
              <TouchableOpacity
                className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center"
                onPress={() => setModalVisible(true)}
              >
                <Text className="text-white text-3xl font-bold">+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View className="flex flex-row items-center gap-2">
          <Text className="text-lg text-gray-600 text-sm">
            {formatDateTime(exam?.start_time)}
          </Text>
          <Text className="text-lg text-gray-600 text-sm"> → </Text>
          <Text className="text-lg text-gray-600 text-sm">
            {formatDateTime(exam?.end_time)}
          </Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1">
        <View className="flex flex-col gap-2 p-2">
          {examQuestions.map((question: any, idx: number) => (
            <QuestionListItem
              key={question.id}
              soruId={question.id}
              soruIdx={idx + 1}
              question_text={question.question_text}
            />
          ))}
        </View>
      </ScrollView>

      <AddQuestion
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        questionText={questionText}
        setQuestionText={setQuestionText}
        handleAddQuestion={handleAddQuestion}
      />
    </View>
  );
}
