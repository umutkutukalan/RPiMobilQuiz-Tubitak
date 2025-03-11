import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Link href="/sign-in">SıgnIn</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/hesap_bilgileri">Hesap Bilgileri</Link>
      <Link href="/password_update">Şifre Güncelle</Link>
      <Link href="/edit_profile">Profili Düzenle</Link>
      <Link href="/quiz-olustur">Quiz Oluştur</Link>
      <Link href="/soru-olustur">Soru Oluştur</Link>
    </View>
  );
}
