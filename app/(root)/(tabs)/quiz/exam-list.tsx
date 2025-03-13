import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const ExamList = () => {
  const [startTime, setStartTime] = useState("21.12.2021");

  return (
    <View className="w-full h-full">
      <View className="w-full h-full flex flex-col items-center gap-4 p-4 overflow-hidden">
        {/* sınav kart */}
        <View className="h-[100px] w-full bg-blue-500 rounded-xl p-2 flex flex-row justify-between overflow-hidden">
          {/* baslik - tarihler */}
          <View className="h-full flex flex-col justify-between">
            <Text className="text-white text-lg font-semibold line-clamp-1 w-[200px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at
              soluta harum modi voluptates?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at
              soluta harum modi voluptates?
            </Text>
            <View>
              <Text className="text-white">Baslangic: {startTime}</Text>
              <Text className="text-white">Bitis: {startTime}</Text>
            </View>
          </View>
          {/* butonlar */}
          <View className="flex flex-col justify-center gap-2">
            <TouchableOpacity className="bg-green-500 p-2 rounded-md">
              <Text className="text-white text-center">Düzenle</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-800 p-2 rounded-md">
              <Text className="text-white text-center">Sil</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sınav kart */}
        <View className="h-[100px] w-full bg-blue-500 rounded-xl p-2 flex flex-row justify-between overflow-hidden">
          {/* baslik - tarihler */}
          <View className="h-full flex flex-col justify-between">
            <Text className="text-white text-lg font-semibold line-clamp-1 w-[200px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at
              soluta harum modi voluptates?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at
              soluta harum modi voluptates?
            </Text>
            <View>
              <Text className="text-white">Baslangic: {startTime}</Text>
              <Text className="text-white">Bitis: {startTime}</Text>
            </View>
          </View>
          {/* butonlar */}
          <View className="flex flex-col justify-center gap-2">
            <TouchableOpacity className="bg-green-500 p-2 rounded-md">
              <Text className="text-white text-center">Düzenle</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-800 p-2 rounded-md">
              <Text className="text-white text-center">Sil</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* sınav kart */}
        <View className="h-[100px] w-full bg-blue-500 rounded-xl p-2 flex flex-row justify-between overflow-hidden">
          {/* baslik - tarihler */}
          <View className="h-full flex flex-col justify-between">
            <Text className="text-white text-lg font-semibold line-clamp-1 w-[200px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at
              soluta harum modi voluptates?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at
              soluta harum modi voluptates?
            </Text>
            <View>
              <Text className="text-white">Baslangic: {startTime}</Text>
              <Text className="text-white">Bitis: {startTime}</Text>
            </View>
          </View>
          {/* butonlar */}
          <View className="flex flex-col justify-center gap-2">
            <TouchableOpacity className="bg-green-500 p-2 rounded-md">
              <Text className="text-white text-center">Düzenle</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-800 p-2 rounded-md">
              <Text className="text-white text-center">Sil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExamList;
