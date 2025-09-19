import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useGetChoicesForQuestion } from "@/hooks/Choices/useGetChoicesForQuestion";
import { useGetQuestionByExam } from "@/hooks/Question/useGetQuestionByExam";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import { teacherprofile } from "@/constants";
import { formatDateTime } from "@/hooks/formatDateTime";

const ExamChoicesForStudent = () => {
  const {
    examId,
    userId,
    examName,
    examDuration,
    startTime,
    endTime,
    status,
    teacherId,
  } = useLocalSearchParams();

  const { getUserById, userData, isLoading: isLoadingUser } = useGetUserById();

  const { getChoicesForQuestion, choices, isLoading } =
    useGetChoicesForQuestion();
  const {
    getQuestionByExam,
    examQuestions,
    isLoading: isLoadingQuestions,
  } = useGetQuestionByExam();

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    if (teacherId) {
      getUserById(Number(teacherId));
    }
  }, [teacherId]);

  console.log("userData:", userData);

  useEffect(() => {
    console.log("examId from params:", examId, "type:", typeof examId);
    if (examId) {
      const examIdNumber = Number(examId);
      console.log("examId converted to number:", examIdNumber);
      // Önce sınavdaki soruları al
      getQuestionByExam(examIdNumber);
    }
  }, [examId]);

  useEffect(() => {
    // Sorular yüklendikten sonra rastgele bir soru seç
    if (examQuestions && examQuestions.length > 0) {
      console.log("Fetched questions:", examQuestions);
      // Rastgele bir soru seç
      const randomIndex = Math.floor(Math.random() * examQuestions.length);
      const randomQuestion = examQuestions[randomIndex];
      setCurrentQuestion(randomQuestion);

      const randomQuestionId = randomQuestion?.id;
      if (randomQuestionId) {
        console.log("Getting choices for random question:", randomQuestionId);
        getChoicesForQuestion(randomQuestionId);
      }
    }
  }, [examQuestions]);

  const handleChoicePress = (choice, index) => {
    setSelectedChoice(index);
    console.log("Selected choice:", choice);
    console.log("Is correct:", choice.is_correct);
  };

  const getChoiceStyle = (choice, index) => {
    if (selectedChoice === index) {
      return choice.is_correct
        ? "p-4 border-2 border-green-500 rounded-xl bg-green-100 shadow-md"
        : "p-4 border-2 border-red-500 rounded-xl bg-red-100 shadow-md";
    }
    return "p-4 border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-all";
  };

  console.log("Choices:", choices);
  console.log("Choices length:", choices?.length);
  console.log("IsLoading:", isLoading);
  console.log("Questions:", examQuestions);
  console.log("Questions length:", examQuestions?.length);
  console.log("Current Question:", currentQuestion);

  console.log({
    examId,
    userId,
    examName,
    examDuration,
    startTime,
    endTime,
    status,
    teacherId,
  });

  if (isLoadingQuestions) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Sorular yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header - Öğretmen Bilgisi */}
      <View className="w-full bg-white border-b border-gray-200 shadow-sm pt-20 px-10">
        <View className="flex-row items-center mb-2">
          <View className="w-8 h-8 rounded-full bg-blue-500 mr-3 flex items-center justify-center rounded-full overflow-hidden">
            <Image
              source={teacherprofile}
              className="w-full h-full object-cover"
            />
          </View>
          <Text className="text-sm text-gray-600">
            {userData?.name} {userData?.surname}
          </Text>
        </View>

        {/* Sınav Adı */}
        <Text className="text-2xl font-semibold text-gray-800">{examName}</Text>
      </View>

      {/* Main Content - Sorular */}
      <View className="flex-1 p-6 mt-10">
        {currentQuestion ? (
          <View className="flex-1">
            <Text className="text-lg font-semibold mb-6 text-gray-800">
              {currentQuestion.question_text}
            </Text>

            {choices && choices.length > 0 ? (
              <View className="gap-4">
                {choices.map((choice, index) => (
                  <TouchableOpacity
                    key={index}
                    className={getChoiceStyle(choice, index)}
                    onPress={() => handleChoicePress(choice, index)}
                  >
                    <Text className="text-gray-700">
                      {index + 1}
                      {")"} {choice.choice_text}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View className="flex-1 justify-center items-center">
                <Text className="text-gray-500">Seçenekler yükleniyor...</Text>
              </View>
            )}
          </View>
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-500">Bu sınavda soru bulunamadı.</Text>
          </View>
        )}
      </View>

      {/* Footer - Zaman Bilgileri */}
      <View className="w-full flex-1 pb-20 px-6 mt-10">
        <View className="w-full flex-row items-center justify-between">
          
          <View className="flex flex-row items-center gap-1">
            <Text className="text-gray-400 text-xs">⏳</Text>
            <Text className="text-sm font-medium text-gray-800 text-right">
              {examDuration || "--:--"}dk
            </Text>
          </View>
          <View className="flex flex-row items-center gap-1">
            <Text className="text-gray-400 text-xs">🏁</Text>
            <Text className="text-sm font-medium text-gray-800 text-right">
              {formatDateTime(endTime) || "--:--"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExamChoicesForStudent;
