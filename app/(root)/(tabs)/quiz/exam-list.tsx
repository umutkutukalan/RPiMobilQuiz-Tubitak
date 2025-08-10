import ActiveExams from "@/components/Exam/ActiveExams";
import FinishedExams from "@/components/Exam/FinishedExams";
import ScheduledExams from "@/components/Exam/ScheduledExams";
import { useAuth } from "@/context/AuthProvider";
import { useGetAllExam } from "@/hooks/Exam/useGetAllExam";
import { DeleteExamService } from "@/services/Exam/DeleteExamService";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

export default function ExamList() {
  const { token } = useAuth();
  const [activeTab, setActiveTab] = useState("active");
  const { getAllExams, isLoading, examList } = useGetAllExam();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);

  console.log("Exam List Loaded", examList);

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

  return (
    <View className="h-full w-full p-5">
      {/* Header Tabs */}
      <View className="flex flex-row rounded-lg bg-gray-200 mb-4 overflow-hidden">
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
            Devam Eden Sınavlar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("finished")}
          style={{
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: activeTab === "finished" ? "#000" : "#E5E7EB",
          }}
        >
          <Text
            style={{
              color: activeTab === "finished" ? "#fff" : "#4B5563",
              fontWeight: "500",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Biten Sınavlar
          </Text>
        </TouchableOpacity>
      </View>

      {/* List Cards */}
      {activeTab === "scheduled" && (
        <ScheduledExams {...{ handleDeleteExam }} />
      )}
      {activeTab === "active" && <ActiveExams {...{ handleDeleteExam }} />}
      {activeTab === "finished" && <FinishedExams {...{ handleDeleteExam }} />}

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
    </View>
  );
}
