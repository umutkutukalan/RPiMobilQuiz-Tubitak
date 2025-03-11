import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Giriş Sayfası</Text>
      <Button title="Devam Et" onPress={() => router.push("/(root)/(tabs)/user/profile")} />
    </View>
  );
}