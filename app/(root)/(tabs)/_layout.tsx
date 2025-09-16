import { home } from "@/constants";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#18181B",
          position: "absolute",
          borderTopColor: "#ffffff1a",
          borderTopWidth: 1,
          minHeight: 50,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
          alignSelf: "center",
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Anasayfa",
          headerShown: false,
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="quiz"
        options={{
          title: "Sınavlar",
          headerShown: false,
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: "Profil",
          headerShown: false,
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
