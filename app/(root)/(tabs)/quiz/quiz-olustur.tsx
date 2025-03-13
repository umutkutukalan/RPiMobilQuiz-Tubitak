import "../../../globals.css";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function SinavOlustur() {
  const [examName, setExamName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [examDuration, setExamDuration] = useState("");
  const [instructorName, setInstructorName] = useState("");

  const handleSubmit = () => {
    alert("Sınav bilgileri kaydedildi.");
  };

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold text-blue-500 mb-4">
        Sınav Oluştur
      </Text>

      {[
        { label: "Sınav Adı", value: examName, onChange: setExamName },
        {
          label: "Başlangıç Zamanı",
          value: startTime,
          onChange: setStartTime,
          placeholder: "YYYY-MM-DD HH:MM:SS",
        },
        {
          label: "Bitiş Zamanı",
          value: endTime,
          onChange: setEndTime,
          placeholder: "YYYY-MM-DD HH:MM:SS",
        },
        {
          label: "Sınav Süresi (dk)",
          value: examDuration,
          onChange: setExamDuration,
          keyboardType: "numeric",
        },
        {
          label: "Eğitmen Adı",
          value: instructorName,
          onChange: setInstructorName,
        },
      ].map((item, index) => (
        <View
          key={index}
          className="bg-white p-4 rounded-lg mb-3 border-l-4 border-blue-900"
        >
          <Text className="text-lg font-semibold text-blue-500 mb-2">
            {item.label}
          </Text>
          <TextInput
            className="border border-blue-500 p-2 rounded-md"
            value={item.value}
            onChangeText={item.onChange}
            placeholder={item.placeholder || ""}
          />
        </View>
      ))}

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-500 p-4 rounded-lg items-center mt-4"
      >
        <Text className="text-white text-lg font-bold">Sınavı Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}

