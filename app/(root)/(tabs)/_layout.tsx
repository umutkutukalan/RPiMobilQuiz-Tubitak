import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Anasayfa",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Profil",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="quiz"
        options={{
          title: "Quiz",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
