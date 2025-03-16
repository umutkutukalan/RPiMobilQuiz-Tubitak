import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useGetUserById } from "@/hooks/User/useGetUserById";

const Profile = () => {

  const { getUserById, userData } = useGetUserById();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await getUserById();
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#F3EDF7]">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white border-b-2 border-[#000080] shadow-md">
        <Text className="text-[#000080] text-xl font-bold">Profil</Text>
        <View className="flex-row">
          <TouchableOpacity className="p-2 ml-2">
            <Ionicons name="notifications-outline" size={24} color="#000080" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 ml-2">
            <Ionicons name="settings-outline" size={24} color="#000080" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView className="p-4">
        {/* Profile card */}
        <View className="bg-white rounded-lg mb-4 overflow-hidden shadow-md">
          <View className="h-20 bg-[#000080]" />
          <View className="flex items-center pb-4">
            <View className="mt-[-40px] border-4 border-white rounded-full overflow-hidden">
              <Image
                source={{ uri: "https://via.placeholder.com/96" }}
                className="w-24 h-24"
              />
            </View>
            <View className="items-center mt-2">
              <Text className="text-[#000080] text-xl font-bold">
                
              </Text>
              <Text className="text-[#666] mt-2"></Text>
            </View>
            <TouchableOpacity className="flex-row items-center border-2 border-[#000080] rounded-full p-1 ml-4 mt-2">
              <Ionicons name="pencil-outline" size={16} color="#000080" />
              <Link href="/user/edit_profile">
                <Text className="text-[#000080] text-sm ml-1">
                  Profili Düzenle
                </Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        {/* Personal Information */}
        <View className="bg-white rounded-lg p-4 mb-4">
          <Text className="text-[#000080] text-xl font-bold mb-4">
            Kişisel Bilgiler
          </Text>
          <Text className="text-[#000080] font-bold">Ad:</Text>
          <Text className="text-[#1C1C64]"></Text>
          <Text className="text-[#000080] font-bold mt-4">Soyad:</Text>
          <Text className="text-[#1C1C64]"></Text>
          <Text className="text-[#000080] font-bold mt-4">E-posta:</Text>
          <Text className="text-[#1C1C64]"></Text>
          <Text className="text-[#000080] font-bold mt-4">Telefon:</Text>
          <Text className="text-[#1C1C64]"></Text>
          <Text className="text-[#000080] font-bold mt-4">Kullanıcı Rolü:</Text>
          <Text className="text-[#1C1C64]"></Text>
        </View>

        {/* Additional Options */}
        <View className="bg-white rounded-lg p-4 mb-4">
          <TouchableOpacity className="mb-4">
            <Text className="text-[#000080] text-xl font-bold">
              Şifre Değiştir
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <Text className="text-[#000080] text-xl font-bold">Ayarlar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-4">
            <Text className="text-[#000080] text-xl font-bold">Yardım</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-[#FF0000] text-xl font-bold">Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
