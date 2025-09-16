import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "expo-router";
import { MenuItem } from "@/components/Menu/MenuItem";
import { avatar, teacherprofile } from "@/constants";

export default function ProfileScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const { handleLogout } = useAuth();
  return (
    <SafeAreaView className="flex-1 bg-[#f3f4f6]">
      <ScrollView className="flex-1">
        {user?.role === "teacher" && (
          <View className="w-full flex items-center justify-center pt-5 pb-4">
            <View className="rounded-2xl px-8 py-8 items-center w-full max-w-md">
              <Image
                source={teacherprofile}
                className="w-32 h-32 rounded-full mb-4"
              />
              <Text className="text-gray-400 text-sm">İsim - Soyisim</Text>
              <View className="flex flex-col items-center gap-1">
                <Text className="text-gray-700 text-2xl font-bold text-center">
                  Dr. {user?.name} {user?.surname}
                </Text>
                <Text className="text-gray-700 ">Öğretim Üyesi</Text>

                <Text className="text-gray-700"></Text>
              </View>
            </View>
          </View>
        )}

        {user?.role === "student" && (
          <View className="w-full flex items-center justify-center pt-5 pb-4">
            <View className="rounded-2xl px-8 py-8 items-center w-full max-w-md">
              <Image source={avatar} className="w-32 h-32 rounded-full mb-4" />
              <Text className="text-gray-400 text-sm">İsim - Soyisim</Text>
              <Text className="text-gray-700 text-3xl font-bold">
                {user?.name} {user?.surname}
              </Text>
              {user?.role == "student" && (
                <Text className="text-gray-700 mb-1">4-B</Text>
              )}
              {user?.role == "student" && (
                <View className="flex flex-col gap-1 items-center">
                  <Text className="text-gray-700  mb-1">2112101046</Text>
                </View>
              )}
            </View>
          </View>
        )}

        {/* Menü ve Ayarlar Kartları */}
        <View className="w-full max-w-md mx-auto px-4 mt-4">
          <View className="bg-white rounded-xl shadow px-4 py-4 mb-4">
            <Text className="text-gray-800 text-xl font-bold mb-2">Profil</Text>
            <MenuItem
              icon="👤"
              iconColor="#3B82F6"
              iconBgColor="#DBEAFE"
              title={` ${
                user?.role === "student"
                  ? "Öğrenci Bilgileri"
                  : "Öğretim Üyesi Bilgileri"
              }`}
              onPress={() => router.push("/user/hesap_bilgileri")}
            />
          </View>
          <View className="bg-white rounded-xl shadow px-4 py-4 mb-8">
            <Text className="text-gray-800 text-xl font-bold mb-2">
              Ayarlar
            </Text>
            <MenuItem
              icon="🚪"
              iconColor="#F87171"
              iconBgColor="#FEE2E2"
              title="Çıkış Yap"
              onPress={() => handleLogout()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
