import { useAuth } from "@/context/AuthProvider";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StudentRole = () => {
  const { user } = useAuth();
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4 bg-white">
          <View className="flex-row items-center">
            <Image className="w-12 h-12 rounded-full mr-3 bg-gray-300" />
            <View>
              <Text className="text-gray-600 text-sm">Hoş Geldin,</Text>
              <Text className="text-blue-600 text-lg font-semibold">
                {user?.name}
                {" " + user?.surname}
              </Text>
            </View>
          </View>
          <View className="flex-row space-x-4">
            <TouchableOpacity>
              <Text style={{ fontSize: 24 }}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity className="relative">
              <Text style={{ fontSize: 24 }}>🔔</Text>
              <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 24 }}>☰</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Physics Card */}
        <View className="mx-6 mt-6 p-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl">
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-2xl font-bold">
                Yazılım Tasarım Mimarisi
              </Text>
              <Text className="text-base">Konu : Tasarım Mimarileri</Text>
            </View>
            <View className="flex-row space-x-2">
              <View className="px-3 py-2 rounded-lg">
                <Text className="text-white font-bold text-lg">00</Text>
              </View>
              <View className="px-3 py-2 rounded-lg">
                <Text className="font-bold text-lg">19</Text>
              </View>
              <View className="px-3 py-2 rounded-lg">
                <Text className="text-white font-bold text-lg">00</Text>
              </View>
            </View>
          </View>

          <Text className="text-lg font-semibold mb-2">
            Yaklaşmakta Olan Quiz
          </Text>

          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-base">Saat: 10:20</Text>
              <Text className="text-base">Melike Şişeci Çeşmeli</Text>
            </View>
            <TouchableOpacity className="bg-white px-6 py-3 rounded-xl">
              <Text className="text-gray-800 font-semibold text-base">
                Quize Katıl
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Class Schedules */}
        <View className="px-6 mt-8">
          <Text className="text-gray-800 text-xl font-bold mb-4">
            Quizler Sınıf Programı
          </Text>

          <View className="flex-row space-x-4">
            {/* Physics Schedule */}
            <View className="flex-1">
              <View className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl mb-3">
                <View className="flex-row justify-between items-start">
                  <Text className="text-lg font-semibold">
                    Doç. Dr. İhsan Pençe
                  </Text>
                </View>
                <Image
                  source={{ uri: "/placeholder.svg?height=60&width=60" }}
                  className="w-15 h-15 rounded-full"
                />
              </View>
              <Text className="text-gray-800 font-semibold text-base mb-1">
                Görüntü İşleme | 4-B
              </Text>
              <View className="flex-row items-center">
                <Text style={{ fontSize: 16 }}>⏰</Text>
                <Text className="text-gray-600 text-sm ml-1">Saat: 13:50</Text>
              </View>
            </View>

            {/* Chemistry Schedule */}
            <View className="flex-1">
              <View className="bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl mb-3">
                <View>
                  <Text className="text-lg font-semibold">
                    Doç. Dr. Melike Şişeci Çeşmeli
                  </Text>
                </View>
                <Image
                  source={{ uri: "/placeholder.svg?height=60&width=60" }}
                  className="w-15 h-15 rounded-full"
                />
              </View>
              <Text className="text-gray-800 font-semibold text-base mb-1">
                İleri Web | 3-A
              </Text>
              <View className="flex-row items-center">
                <Text style={{ fontSize: 16 }}>⏰</Text>
                <Text className="text-gray-600 text-sm ml-1">Saat: 15:30</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Tests */}
        <View className="px-6 mt-8 pb-8">
          <Text className="text-gray-800 text-xl font-bold mb-4">
            Tamamlanan Quizler
          </Text>

          <View className="flex-row space-x-4">
            {/* Chemistry Test */}
            <TouchableOpacity className="flex-1 bg-gradient-to-br from-red-400 to-pink-500 p-6 rounded-2xl items-center">
              <Text style={{ fontSize: 32 }}>📄</Text>
              <Text className="text-lg font-bold mt-2">
                İş Sağlığı Güvenliği
              </Text>
            </TouchableOpacity>

            {/* Physics Test */}
            <TouchableOpacity className="flex-1 bg-gradient-to-br from-purple-400 to-blue-500 p-6 rounded-2xl items-center">
              <Text style={{ fontSize: 32 }}>📄</Text>
              <Text className="text-lg font-bold mt-2">Algoritma II</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default StudentRole;
