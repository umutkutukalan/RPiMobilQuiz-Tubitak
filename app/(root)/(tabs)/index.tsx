import "../../globals.css";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Link, Stack, useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="h-full flex flex-col justify-center items-center gap-5">
      <Text className="text-4xl">Welcome to RPiMobile</Text>
      <View className="flex flex-col gap-3">
        <Link
          href="/sign-in"
          className=" px-10 py-2 border border-gray-400 shadow-md bg-blue-600 text-white text-xl text-center rounded-md"
        >
          Sign In
        </Link>
        <Link
          href="/user"
          className="px-10 py-2 border border-gray-400 shadow-md bg-blue-600 text-white text-xl text-center rounded-md"
        >
          User
        </Link>
        <Link
          href="/quiz"
          className="px-10 py-2 border border-gray-400 shadow-md bg-blue-600 text-white text-xl text-center rounded-md"
        >
          Quiz
        </Link>
      </View>
    </View>
  );
}
