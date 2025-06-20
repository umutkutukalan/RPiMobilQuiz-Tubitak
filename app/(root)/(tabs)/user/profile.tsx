import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import { useAuth } from "@/context/AuthProvider";
import { useLogin } from "@/hooks/Session/useLogin";

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBgColor: string;
  title: string;
  onPress?: () => void;
}

const MenuItem = ({
  icon,
  iconColor,
  iconBgColor,
  title,
  onPress,
}: MenuItemProps) => (
  <TouchableOpacity
    className="flex-row items-center justify-between py-4 px-6 bg-white rounded-2xl mb-3"
    onPress={onPress}
  >
    <View className="flex-row items-center">
      <View
        className={`w-12 h-12 rounded-full items-center justify-center mr-4`}
        style={{ backgroundColor: iconBgColor }}
      >
        <Ionicons name={icon} size={24} color={iconColor} />
      </View>
      <Text className="text-gray-800 text-lg font-medium">{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
  </TouchableOpacity>
);


const Profile = () => {
  const { getUserById, userData } = useGetUserById();
  const { user } = useAuth();
  const { handleLogout } = useLogin();

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
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header with Profile Info */}
        <View className="items-center px-6 py-8 bg-white">
          <Image
            source={{ uri: "/placeholder.svg?height=120&width=120" }}
            className="w-30 h-30 rounded-full mb-6"
          />

          <View className="items-center">
            <Text className="text-gray-500 text-sm mb-1">İsim</Text>
            <Text className="text-blue-600 text-2xl font-bold mb-4">
              {user?.name} {user?.surname}
            </Text>

            <Text className="text-gray-500 text-sm mb-1">Sınıfı</Text>
            <Text className="text-blue-600 text-xl font-semibold mb-4">
              4-B
            </Text>

            <Text className="text-gray-500 text-sm mb-1">Öğrenci Numarası</Text>
            <Text className="text-blue-600 text-xl font-semibold">
              2112101046
            </Text>
          </View>
        </View>

        {/* Profile Section */}
        <View className="px-6 mt-6">
          <Text className="text-gray-800 text-2xl font-bold mb-4">Profil</Text>

          <MenuItem
            icon="person"
            iconColor="#3B82F6"
            iconBgColor="#DBEAFE"
            title="Manage Profile"
            onPress={() => console.log("Manage Profile pressed")}
          />
        </View>

        {/* Settings Section */}
        <View className="px-6 mt-6 pb-8">
          <Text className="text-gray-800 text-2xl font-bold mb-4">Ayarlar</Text>

          <MenuItem
            icon="play"
            iconColor="#3B82F6"
            iconBgColor="#DBEAFE"
            title="Çıkış Yap"
            onPress={() => handleLogout()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
