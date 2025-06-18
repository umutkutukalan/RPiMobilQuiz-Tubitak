import "../../globals.css";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useLogin } from "@/hooks/Session/useLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthProvider";

export default function HomeScreen() {
  const router = useRouter();
  const { handleLogout } = useLogin();
  const { user } = useAuth();
  console.log("User:", user);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4 bg-white">
          <View className="flex-row items-center">
            <Image className="w-12 h-12 rounded-full mr-3" />
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
              <Ionicons name="search" size={24} color="#6B7280" />
            </TouchableOpacity>
            <TouchableOpacity className="relative">
              <Ionicons name="notifications" size={24} color="#6B7280" />
              <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="menu" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Physics Card */}
        <View className="mx-6 mt-6 p-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Text className="text-white text-2xl font-bold">Physics</Text>
              <Text className="text-white/80 text-base">
                Chapter 05 : Energy
              </Text>
            </View>
            <View className="flex-row space-x-2">
              <View className="bg-white/20 px-3 py-2 rounded-lg">
                <Text className="text-white font-bold text-lg">00</Text>
              </View>
              <View className="bg-white/20 px-3 py-2 rounded-lg">
                <Text className="text-white font-bold text-lg">19</Text>
              </View>
              <View className="bg-white/20 px-3 py-2 rounded-lg">
                <Text className="text-white font-bold text-lg">00</Text>
              </View>
            </View>
          </View>

          <Text className="text-white text-xl font-semibold mb-4">
            Starting Soon
          </Text>

          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white/80 text-base">Time: 10:20 AM</Text>
              <Text className="text-white/80 text-base">James Anderson</Text>
            </View>
            <TouchableOpacity className="bg-white px-6 py-3 rounded-xl">
              <Text className="text-gray-800 font-semibold text-base">
                Join Class
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Class Schedules */}
        <View className="px-6 mt-8">
          <Text className="text-gray-800 text-xl font-bold mb-4">
            Class Schedules
          </Text>

          <View className="flex-row space-x-4">
            {/* Physics Schedule */}
            <View className="flex-1">
              <View className="bg-gradient-to-br from-purple-400 to-blue-500 p-4 rounded-2xl mb-3">
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="text-white text-lg font-semibold">
                      Mr.
                    </Text>
                    <Text className="text-white text-lg font-semibold">
                      James
                    </Text>
                    <Text className="text-white text-lg font-semibold">
                      Anderson
                    </Text>
                  </View>
                  <Image
                    source={{ uri: "/placeholder.svg?height=60&width=60" }}
                    className="w-15 h-15 rounded-full"
                  />
                </View>
              </View>
              <Text className="text-gray-800 font-semibold text-base mb-1">
                Physics
              </Text>
              <View className="flex-row items-center">
                <Ionicons name="time" size={16} color="#6B7280" />
                <Text className="text-gray-600 text-sm ml-1">
                  Time: 10:00 AM
                </Text>
              </View>
            </View>

            {/* Chemistry Schedule */}
            <View className="flex-1">
              <View className="bg-gradient-to-br from-red-400 to-pink-500 p-4 rounded-2xl mb-3">
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="text-white text-lg font-semibold">
                      Mrs.
                    </Text>
                    <Text className="text-white text-lg font-semibold">
                      Emma
                    </Text>
                    <Text className="text-white text-lg font-semibold">
                      Wilson
                    </Text>
                  </View>
                  <Image
                    source={{ uri: "/placeholder.svg?height=60&width=60" }}
                    className="w-15 h-15 rounded-full"
                  />
                </View>
              </View>
              <Text className="text-gray-800 font-semibold text-base mb-1">
                Chemistry
              </Text>
              <View className="flex-row items-center">
                <Ionicons name="time" size={16} color="#6B7280" />
                <Text className="text-gray-600 text-sm ml-1">
                  Time: 11:20 AM
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Tests */}
        <View className="px-6 mt-8 pb-8">
          <Text className="text-gray-800 text-xl font-bold mb-4">
            Upcoming Tests
          </Text>

          <View className="flex-row space-x-4">
            {/* Chemistry Test */}
            <TouchableOpacity className="flex-1 bg-gradient-to-br from-red-400 to-pink-500 p-6 rounded-2xl items-center">
              <Ionicons name="document-text" size={32} color="white" />
              <Text className="text-white text-lg font-bold mt-2">
                Chemistry
              </Text>
            </TouchableOpacity>

            {/* Physics Test */}
            <TouchableOpacity className="flex-1 bg-gradient-to-br from-purple-400 to-blue-500 p-6 rounded-2xl items-center">
              <Ionicons name="document-text" size={32} color="white" />
              <Text className="text-white text-lg font-bold mt-2">Physics</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
