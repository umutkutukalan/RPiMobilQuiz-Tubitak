import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
// Tarih seçimi için state
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useAuth } from "@/context/AuthProvider";
import { useCreateExam } from "@/hooks/Exam/useCreateExam";

export default function CreateExam() {
  const [examName, setExamName] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [examDuration, setExamDuration] = useState("");
  const { createExam } = useCreateExam();
  const { user } = useAuth();

  // Date objesini backend formatına çeviren fonksiyon
  const formatDateTime = (date: Date | null) => {
    if (!date) return "";
    // yyyy-MM-dd HH:mm:ss
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )} ${pad(date.getHours())}:${pad(date.getMinutes())}:00`;
  };

  const examData = {
    end_time: formatDateTime(endDate),
    exam_duration: parseInt(examDuration) || 0,
    exam_name: examName,
    start_time: formatDateTime(startDate),
    teacher_id: parseInt(user?.id) || 0,
  };

  const handleCreateExam = async () => {
    try {
      console.log("Gönderilecek veri:", examData);
      await createExam(examData);
      alert("Sınav başarıyla oluşturuldu!");
      setExamName("");
      setStartDate(null);
      setEndDate(null);
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
            Başlangıç Tarihi ve Saati
          </Text>
          <TouchableOpacity
            className="bg-blue-500 rounded-lg px-4 py-2 mb-2"
            onPress={() => setShowStartPicker(true)}
          >
            <Text className="text-white font-semibold">
              Başlangıç Tarihi Seç
            </Text>
          </TouchableOpacity>
          {startDate && (
            <Text className="mb-2 text-base font-medium text-gray-700">
              Seçilen:{" "}
              {startDate.toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}{" "}
              {startDate.toLocaleTimeString("tr-TR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          )}
          {showStartPicker && (
            <DateTimePicker
              value={startDate || new Date()}
              mode="datetime"
              display="default"
              onChange={(event, selectedDate) => {
                setShowStartPicker(false);
                if (selectedDate) setStartDate(selectedDate);
              }}
            />
          )}

          <Text className="font-bold text-lg mb-2">Bitiş Tarihi ve Saati</Text>
          <TouchableOpacity
            className="bg-blue-500 rounded-lg px-4 py-2 mb-2"
            onPress={() => setShowEndPicker(true)}
          >
            <Text className="text-white font-semibold">Bitiş Tarihi Seç</Text>
          </TouchableOpacity>
          {endDate && (
            <Text className="mb-2 text-base font-medium text-gray-700">
              Seçilen:{" "}
              {endDate.toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}{" "}
              {endDate.toLocaleTimeString("tr-TR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          )}
          {showEndPicker && (
            <DateTimePicker
              value={endDate || new Date()}
              mode="datetime"
              display="default"
              onChange={(event, selectedDate) => {
                setShowEndPicker(false);
                if (selectedDate) setEndDate(selectedDate);
              }}
            />
          )}
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
