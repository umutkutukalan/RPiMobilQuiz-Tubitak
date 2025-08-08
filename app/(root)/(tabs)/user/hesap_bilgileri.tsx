import { NavigationProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/context/AuthProvider";

interface Props {
  navigation: NavigationProp<any>;
}

export default function AccountDetailsScreen({ navigation }: Props) {
  const { user } = useAuth();
  const router = useRouter();
  const { getUserById, userData, isLoading } = useGetUserById();

  useEffect(() => {
    getUserById();
  }, []);

  if (isLoading) {
    return (
      <View className="w-full h-full flex-items-center justify-center">
        <LoadingScreen />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      <View className="w-full flex items-center justify-center">
        <Text className="text-2xl font-bold mb-6 ">Kişisel Bilgiler</Text>
      </View>

      <View className="flex flex-col gap-3 mb-6">
        <View className="bg-white p-4 rounded-lg">
          <Text className="text-gray-600 text-sm">Ad:</Text>
          <Text className="text-xl font-semibold">{userData?.name}</Text>
        </View>

        <View className="bg-white p-4 rounded-lg">
          <Text className="text-gray-600 text-sm">Soyad:</Text>
          <Text className="text-xl font-semibold">{userData?.surname}</Text>
        </View>

        <View className="bg-white p-4 rounded-lg">
          <Text className="text-gray-600 text-sm">E-posta:</Text>
          <Text className="text-xl font-semibold">{userData?.email}</Text>
        </View>

        <View className="bg-white p-4 rounded-lg">
          <Text className="text-gray-600 text-sm">Telefon:</Text>
          <Text className="text-xl font-semibold">{userData?.phone}</Text>
        </View>
      </View>

      <TouchableOpacity className="bg-blue-600 p-4 rounded-lg items-center">
        <Text className="text-white font-bold text-lg">Profili Düzenle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
