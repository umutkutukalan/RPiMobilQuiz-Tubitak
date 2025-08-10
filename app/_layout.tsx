import { AuthProvider } from "@/context/AuthProvider";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <AuthProvider>
      <View className="flex-1 mt-20">
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </AuthProvider>
  );
}
