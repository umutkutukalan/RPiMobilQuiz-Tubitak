import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function ProfileScreen() {
  const [userData] = useState({
    firstName: "Abc",
    lastName: "Korkmaz",
    email: "korkmaz.33@example.com",
    phone: "5xxxxxxxxx",
    role: "Öğrenci",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F3EDF7" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#000080",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          elevation: 2,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000080" }}>
          Profil
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ padding: 8, marginLeft: 8 }}>
            <Ionicons name="notifications-outline" size={24} color="#000080" />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 8, marginLeft: 8 }}>
            <Ionicons name="settings-outline" size={24} color="#000080" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 16, marginTop: 16 }}>
        {/* Profile card */}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            marginBottom: 16,
            overflow: "hidden",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View style={{ height: 80, backgroundColor: "#000080" }} />
          <View style={{ alignItems: "center", paddingBottom: 16 }}>
            <View
              style={{
                marginTop: -40,
                borderWidth: 4,
                borderColor: "white",
                borderRadius: 50,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: "https://via.placeholder.com/96" }}
                style={{ width: 80, height: 80 }}
              />
            </View>
            <View style={{ alignItems: "center", marginTop: 8 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000080" }}>
                {userData.firstName} {userData.lastName}
              </Text>
              <Text style={{ fontSize: 14, color: "#666", marginTop: 2 }}>
                {userData.email}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#000080",
                borderRadius: 20,
                paddingVertical: 6,
                paddingHorizontal: 12,
                marginTop: 12,
              }}
            >
              <Ionicons name="pencil-outline" size={16} color="#000080" />
              <Link href="/user/edit_profile">
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 4,
                    color: "#000080",
                  }}
                >
                  Profili Düzenle
                </Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        {/* Personal Information */}
        <View style={{ padding: 20, backgroundColor: "white", borderRadius: 12, marginBottom: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10, color: "#000080" }}>
            Kişisel Bilgiler
          </Text>
          <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: "bold", color: "#000080" }}>Ad:</Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>{userData.firstName}</Text>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold", color: "#000080" }}>Soyad:</Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>{userData.lastName}</Text>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold", color: "#000080" }}>E-posta:</Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>{userData.email}</Text>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold", color: "#000080" }}>Telefon:</Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>{userData.phone}</Text>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold", color: "#000080" }}>Kullanıcı Rolü:</Text>
          <Text style={{ fontSize: 14, color: "#1C1C64" }}>{userData.role}</Text>
        </View>

        {/* Additional Options */}
        <View style={{ padding: 20, backgroundColor: "white", borderRadius: 12, marginBottom: 16, alignItems: "center" }}>
          <TouchableOpacity style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, color: "#000080" }}>Şifre Değiştir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, color: "#000080" }}>Ayarlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, color: "#000080" }}>Yardım</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
