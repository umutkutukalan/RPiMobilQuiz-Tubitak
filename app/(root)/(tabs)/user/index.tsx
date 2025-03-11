import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profil Sayfası</Text>
        <Button title="Profil" onPress={() => router.push("/user/profile")} />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profil Sayfası</Text>
        <Button
          title="Hesap Bilgileri"
          onPress={() => router.push("/user/hesap_bilgileri")}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profil Sayfası</Text>
        <Button
          title="Profili Düzenle"
          onPress={() => router.push("/user/edit_profile")}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profil Sayfası</Text>
        <Button
          title="Şifre Değiştir"
          onPress={() => router.push("/user/password_update")}
        />
      </View>
    </View>
  );
}
