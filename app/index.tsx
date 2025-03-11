import "../app/globals.css";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex flex-col items-center justify-center h-full gap-5">
      <TouchableOpacity
        onPress={() => router.push("/(root)/sign-in")}
        className="bg-blue-500 text-white text-3xl px-4 py-2 rounded-md"
      >
        <Text className="text-white text-3xl">Giris Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-green-500 px-4 py-2 rounded-md"
        onPress={() => router.push("/(root)/(tabs)/user/profile")}
      >
        <Text className="text-white text-3xl">Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
}
