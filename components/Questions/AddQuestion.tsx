import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { useCreateQuestion } from "@/hooks/Question/useCreateQuestion";

interface AddQuestionProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  questionText: string;
  setQuestionText: (text: string) => void;
  handleAddQuestion: () => void;
}

const AddQuestion = ({
  modalVisible,
  setModalVisible,
  questionText,
  setQuestionText,
  handleAddQuestion,
}: AddQuestionProps) => {
  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-2xl p-6 w-4/5">
          <Text className="text-lg font-bold mb-4 text-center">Soru Ekle</Text>
          <TextInput
            className="bg-gray-100 rounded-lg p-3 mb-3"
            placeholder="Soru Metni"
            value={questionText}
            onChangeText={setQuestionText}
          />
          <TouchableOpacity
            className="bg-purple-500 rounded-lg py-3 items-center mt-2"
            onPress={handleAddQuestion}
          >
            <Text className="text-white font-bold">Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-gray-300 rounded-lg py-3 items-center mt-2"
            onPress={() => setModalVisible(false)}
          >
            <Text className="text-gray-800 font-bold">Vazgeç</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddQuestion;
