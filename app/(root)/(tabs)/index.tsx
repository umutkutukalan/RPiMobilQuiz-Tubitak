import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Link href="/sign-in">Sıgn In Click</Link>
      <Link href="/profile">Profile Click</Link>
      <Link href="/hesap_bilgileri">Hesap Bilgileri Click</Link> 
      <Link href="/password_update">Şifre Güncelle Click</Link>
      <Link href="/edit_profile">Profili Düzenle Click</Link>
    </View>
  );
}

