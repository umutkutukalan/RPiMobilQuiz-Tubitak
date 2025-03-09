import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Link href="/sign-in">Sıgn In Click</Link>
      <Link href="/profile">Profile Click</Link>
    </View>
  );
}

