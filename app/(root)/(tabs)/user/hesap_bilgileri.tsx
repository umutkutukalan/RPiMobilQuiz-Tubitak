import { NavigationProp, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import LoadingScreen from "@/components/LoadingScreen";

interface Props {
  navigation: NavigationProp<any>;
}

export default function AccountDetailsScreen({ navigation }: Props) {
  const router = useRouter();
  const { getUserById, userData, isLoading } = useGetUserById();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await getUserById();
        console.log("User Data:", userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    navigation.navigate("AccountUpdate");
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F3EDF7",
        }}
      >
        <LoadingScreen />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F3EDF7" }}>
      <StatusBar barStyle="dark-content" />

      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#800080",
          }}
        >
          Kişisel Bilgiler
        </Text>

        <View
          style={{
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#DDA0DD",
            paddingBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 5,
              fontWeight: "bold",
              color: "#800080",
            }}
          >
            Ad:
          </Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>
            {userData?.name}
          </Text>
        </View>

        <View
          style={{
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#DDA0DD",
            paddingBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 5,
              fontWeight: "bold",
              color: "#800080",
            }}
          >
            Soyad:
          </Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>
            {userData?.surname}
          </Text>
        </View>

        <View
          style={{
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#E6B0D4",
            paddingBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 5,
              fontWeight: "bold",
              color: "#800080",
            }}
          >
            E-posta:
          </Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>
            {userData?.email}
          </Text>
        </View>

        <View
          style={{
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#DDA0DD",
            paddingBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 5,
              fontWeight: "bold",
              color: "#800080",
            }}
          >
            Telefon:
          </Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>
            232342343242342
          </Text>
        </View>

        <View
          style={{
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#E6B0D4",
            paddingBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 5,
              fontWeight: "bold",
              color: "#800080",
            }}
          >
            Kullanıcı Rolü:
          </Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>
            {userData?.role}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#1C1C64",
          padding: 15,
          borderRadius: 5,
          alignItems: "center",
          margin: 20,
        }}
        onPress={handleEditProfile}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Profili Düzenle
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
