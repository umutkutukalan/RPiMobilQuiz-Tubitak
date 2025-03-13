import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import QuizOlustur from "./quiz-olustur"; // QuizOlustur sayfasını import ediyoruz

const ExamList = () => {
  const [startTime, setStartTime] = useState("21.12.2021");
  const [isQuizOlusturVisible, setQuizOlusturVisible] = useState(false); // Sayfa geçişi için state
  const [exams, setExams] = useState([
    { id: 1, name: "Sınav 1", startTime: "21.12.2021", endTime: "22.12.2021" },
    { id: 2, name: "Sınav 2", startTime: "23.12.2021", endTime: "24.12.2021" },
    { id: 3, name: "Sınav 3", startTime: "25.12.2021", endTime: "26.12.2021" },
    { id: 4, name: "Sınav 4", startTime: "27.12.2021", endTime: "28.12.2021" } // Yeni sınav
  ]);

  // Silme fonksiyonu
  const handleDelete = (examId: number) => {
    Alert.alert(
      "Silmek İstediğinizden Emin Misiniz?",
      "Bu işlem geri alınamaz.",
      [
        {
          text: "Hayır",
          onPress: () => console.log("Silme iptal edildi"),
          style: "cancel"
        },
        {
          text: "Evet",
          onPress: () => {
            // Silme işlemi: examId'yi kullanarak o sınavı siliyoruz
            setExams(exams.filter(exam => exam.id !== examId));
          }
        }
      ]
    );
  };

  // Eğer QuizOlustur sayfası visible ise, o sayfayı gösteriyoruz
  if (isQuizOlusturVisible) {
    return <QuizOlustur />;
  }

  return (
    <View className="w-full h-full">
      <View className="w-full h-full flex flex-col items-center gap-4 p-4 overflow-hidden">
        {exams.map((exam) => (
          <View
            key={exam.id}
            className="h-[100px] w-full bg-blue-500 rounded-xl p-2 flex flex-row justify-between overflow-hidden"
          >
            <View className="h-full flex flex-col justify-between">
              <Text className="text-white text-lg font-semibold line-clamp-1 w-[200px]">
                {exam.name}
              </Text>
              <View>
                <Text className="text-white">Başlangıç: {exam.startTime}</Text>
                <Text className="text-white">Bitiş: {exam.endTime}</Text>
              </View>
            </View>
            <View className="flex flex-col justify-center gap-2">
              <TouchableOpacity
                className="bg-green-500 p-2 rounded-md"
                onPress={() => setQuizOlusturVisible(true)} // Butona tıklandığında QuizOlustur sayfasını geçerli yap
              >
                <Text className="text-white text-center">Düzenle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-red-800 p-2 rounded-md"
                onPress={() => handleDelete(exam.id)} // Silme butonuna tıklandığında handleDelete fonksiyonunu çalıştır
              >
                <Text className="text-white text-center">Sil</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExamList;
