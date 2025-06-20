import { useAuth } from "@/context/AuthProvider";
import { useGetAllExam } from "@/hooks/Exam/useGetAllExam";
import { DeleteExamService } from "@/services/Exam/DeleteExamService";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";

export default function ExamList() {
  const { token } = useAuth();
  const [activeTab, setActiveTab] = useState("all");
  const { getAllExams, isLoading, examList } = useGetAllExam();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);

  useEffect(() => {
    getAllExams();
  }, []);

  const handleDeleteExam = (examId: string) => {
    setSelectedExamId(examId);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedExamId) {
      DeleteExamService(selectedExamId, token);
      console.log(`Sınav silindi: ${selectedExamId}`);
      setModalVisible(false);
      setSelectedExamId(null);
    }
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setSelectedExamId(null);
  };

  if (isLoading) {
    return <Text>Yükleniyor...</Text>;
  }

  // Tarih ve saat formatlayıcı (gün.ay.yıl saat:dakika)
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F4F6", padding: 16 }}>
      {/* Header Tabs */}
      <View style={{ flexDirection: "row", marginBottom: 24 }}>
        <TouchableOpacity
          onPress={() => setActiveTab("all")}
          style={{
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderTopLeftRadius: 999,
            borderBottomLeftRadius: 999,
            backgroundColor: activeTab === "all" ? "#000" : "#E5E7EB",
          }}
        >
          <Text
            style={{
              color: activeTab === "all" ? "#fff" : "#4B5563",
              fontWeight: "500",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Tüm Sınavlar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("active")}
          style={{
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: activeTab === "active" ? "#000" : "#E5E7EB",
          }}
        >
          <Text
            style={{
              color: activeTab === "active" ? "#fff" : "#4B5563",
              fontWeight: "500",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Devam Eden
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("pinned")}
          style={{
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderTopRightRadius: 999,
            borderBottomRightRadius: 999,
            backgroundColor: activeTab === "pinned" ? "#000" : "#E5E7EB",
          }}
        >
          <Text
            style={{
              color: activeTab === "pinned" ? "#fff" : "#4B5563",
              fontWeight: "500",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Bekleyen
          </Text>
        </TouchableOpacity>
      </View>

      {/* List Cards */}
      <View style={{ gap: 16, marginBottom: 80 }}>
        {examList.map((exam) => (
          <View
            key={exam.id}
            className="bg-blue-400 p-4 rounded-lg shadow flex flex-col gap-4"
          >
            <View className="flex flex-row justify-between items-center">
              <View>
                <Text className="text-2xl color-white font-semibold">
                  {exam.exam_name}
                </Text>
                <Text className="text-xs color-white font-semibold">
                  {exam.status}
                </Text>
              </View>
              <TouchableOpacity
                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center"
                onPress={() => handleDeleteExam(exam.id)}
              >
                <Text className="text-sm">✖️</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View className="flex flex-row justify-between items-end">
                <View className="flex flex-col">
                  <Text>{formatDateTime(exam.start_time)}</Text>
                  <Text>{formatDateTime(exam.end_time)}</Text>
                </View>
                <View>
                  <Text>⏱️ {exam.exam_duration} dakika</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-2xl p-6 w-4/5 items-center">
            <Text className="text-lg font-bold mb-4 text-center">
              Sınavı silmek istediğinize emin misiniz?
            </Text>
            <View className="flex-row gap-4 mt-2">
              <TouchableOpacity
                className="bg-red-600 px-6 py-2 rounded-lg"
                onPress={confirmDelete}
              >
                <Text className="text-white font-bold">Evet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-gray-300 px-6 py-2 rounded-lg"
                onPress={cancelDelete}
              >
                <Text className="text-gray-800 font-bold">Hayır</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
