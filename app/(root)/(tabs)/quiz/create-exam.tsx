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
import { useCreateExam } from "@/hooks/Exam/useCreateExam";

export default function CreateExam() {
  const [examName, setExamName] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [examDuration, setExamDuration] = useState("");
  const { createExam } = useCreateExam();
  const { user } = useAuth();

  // Tarih formatını dönüştürme fonksiyonu
  const formatDateTime = (input: string) => {
    // "10.03.2025 09:00" formatından "2025-03-10 09:00:00" formatına çevir
    if (!input) return "";

    const [datePart, timePart] = input.split(" ");
    if (!datePart || !timePart) return "";

    const [day, month, year] = datePart.split(".");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )} ${timePart}:00`;
  };

  const examData = {
    end_time: formatDateTime(endDateTime),
    exam_duration: parseInt(examDuration) || 0,
    exam_name: examName,
    start_time: formatDateTime(startDateTime),
    teacher_id: parseInt(user?.id) || 0,
  };

  const handleCreateExam = async () => {
    try {
      console.log("Gönderilecek veri:", examData);
      await createExam(examData);
      alert("Sınav başarıyla oluşturuldu!");
      setExamName("");
      setStartDateTime("");
      setEndDateTime("");
      setExamDuration("");
    } catch (error: any) {
      console.error("Sınav oluşturma hatası:", error);
      alert(error.message || "Sınav oluşturulurken bir hata oluştu.");
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
            placeholder="10.03.2025 09:00"
            className="bg-gray-100 rounded-lg p-3 mb-3"
          />
          <Text className="font-bold text-lg mb-2">
            Bitiş Tarihi ve Saati (gg.aa.yyyy ss:dd)
          </Text>
          <TextInput
            value={endDateTime}
            onChangeText={setEndDateTime}
            placeholder="10.03.2025 10:00"
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
