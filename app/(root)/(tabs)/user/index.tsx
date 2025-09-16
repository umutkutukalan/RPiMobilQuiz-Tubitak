import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "expo-router";
import { MenuItem } from "@/components/Menu/MenuItem";

export default function ProfileScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const { handleLogout } = useAuth();
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        {/* Header with Profile Info */}
        <View className="items-center px-6 py-8">
          <Image
            source={{ uri: "/placeholder.svg?height=120&width=120" }}
            className="w-30 h-30 rounded-full mb-6"
          />

          <View className="items-center">
            <Text className="text-gray-500 text-sm mb-1">İsim - Soyisim</Text>
            <Text className="text-blue-600 text-2xl font-bold mb-4">
              {user?.name} {user?.surname}
            </Text>
            {user?.role == "student" && (
              <Text className="text-gray-500 text-sm mb-1">Sınıfı</Text>
            )}

            {user?.role == "student" && (
              <View className="flex flex-col gap-1">
                <Text className="text-gray-500 text-sm mb-1">
                  Öğrenci Numarası
                </Text>
                <Text className="text-blue-600 text-xl font-semibold">
                  2112101046
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Profile Section */}
        <View className="px-6 mt-6">
          <Text className="text-gray-800 text-2xl font-bold mb-4">Profil</Text>

          <MenuItem
            icon="👤"
            iconColor="#3B82F6"
            iconBgColor="#DBEAFE"
            title="Öğrenci Bilgileri"
            onPress={() => router.push("/user/hesap_bilgileri")}
          />
        </View>

        {/* Settings Section */}
        <View className="px-6 mt-6 pb-8">
          <Text className="text-gray-800 text-2xl font-bold mb-4">
            Settings
          </Text>

          <MenuItem
            icon="🚪"
            iconColor="#3B82F6"
            iconBgColor="#DBEAFE"
            title="Çıkış Yap"
            onPress={() => handleLogout()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
