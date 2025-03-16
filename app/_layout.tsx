import { AuthProvider } from "@/context/AuthProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </AuthProvider>
  );
}
