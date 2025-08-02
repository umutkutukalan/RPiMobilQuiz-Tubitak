import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthProvider";
import { router, useRouter } from "expo-router";

interface MenuItemProps {
  icon: string;
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
        <Text style={{ fontSize: 24 }}>{icon}</Text>
      </View>
      <Text className="text-gray-800 text-lg font-medium">{title}</Text>
    </View>
    <Text style={{ fontSize: 20, color: "#9CA3AF" }}>›</Text>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const { handleLogout } = useAuth();
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
            <Text className="text-gray-500 text-sm mb-1">İsim - Soyisim</Text>
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
            icon="🔔"
            iconColor="#EF4444"
            iconBgColor="#FEE2E2"
            title="Notification Settings"
            onPress={() => console.log("Notification Settings pressed")}
          />

          <MenuItem
            icon="🌐"
            iconColor="#3B82F6"
            iconBgColor="#DBEAFE"
            title="Language"
            onPress={() => console.log("Language pressed")}
          />

          <MenuItem
            icon="🎧"
            iconColor="#F59E0B"
            iconBgColor="#FEF3C7"
            title="Help & Support"
            onPress={() => console.log("Help & Support pressed")}
          />

          <MenuItem
            icon="🛡️"
            iconColor="#10B981"
            iconBgColor="#D1FAE5"
            title="Privacy Settings"
            onPress={() => console.log("Privacy Settings pressed")}
          />

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
