import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { CreateExamService } from "@/services/Exam/CreateExamService";

export default function CreateExam() {
  const [examName, setExamName] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [examDuration, setExamDuration] = useState("");
  const { user, token } = useAuth();

  const examData = {
    exam_name: examName,
    teacher_id: user.id,
    start_time: startDateTime,
    end_time: endDateTime,
    exam_duration: parseInt(examDuration, 10),
  };

  const handleCreateExam = () => {
    try {
      CreateExamService(examData, token);
      alert("Sınav başarıyla oluşturuldu!");
    } catch (error) {
      console.error("Sınav oluşturma hatası:", error);
      alert("Sınav oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="gap-4 mb-20">
        <View className="bg-white rounded-2xl p-4">
          <Text className="font-bold text-lg mb-2">Sınav Adı</Text>
          <TextInput
            value={examName}
            onChangeText={setExamName}
            placeholder="Sınav Adı"
            className="bg-gray-100 rounded-lg p-3 mb-3"
          />
          <Text className="font-bold text-lg mb-2">
            Başlangıç Tarihi ve Saati (gg.aa.yyyy ss:dd)
          </Text>
          <TextInput
            value={startDateTime}
            onChangeText={setStartDateTime}
            placeholder="20.06.2025 14:30"
            className="bg-gray-100 rounded-lg p-3 mb-3"
          />
          <Text className="font-bold text-lg mb-2">
            Bitiş Tarihi ve Saati (gg.aa.yyyy ss:dd)
          </Text>
          <TextInput
            value={endDateTime}
            onChangeText={setEndDateTime}
            placeholder="20.06.2025 15:30"
            className="bg-gray-100 rounded-lg p-3 mb-3"
          />
          <Text className="font-bold text-lg mb-2">Sınav Süresi (dk)</Text>
          <TextInput
            value={examDuration}
            onChangeText={setExamDuration}
            placeholder="Süre (dakika)"
            keyboardType="numeric"
            className="bg-gray-100 rounded-lg p-3 mb-3"
          />
          <TouchableOpacity
            onPress={handleCreateExam}
            className="bg-blue-600 rounded-lg py-3 mt-4"
          >
            <Text className="text-white text-center font-bold text-lg">
              Sınavı Oluştur
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
