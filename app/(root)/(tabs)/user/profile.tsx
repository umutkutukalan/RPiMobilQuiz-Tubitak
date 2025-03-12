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
  const [stats] = useState({
    quizzesTaken: 42,
    correctAnswers: 156,
    totalQuestions: 210,
    averageScore: 74,
    rank: "Gold",
    points: 1250,
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
          borderBottomColor: "#E6B0D4",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          elevation: 2,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#800080" }}>
          Profil
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ padding: 8, marginLeft: 8 }}>
            <Ionicons name="notifications-outline" size={24} color="#800080" />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 8, marginLeft: 8 }}>
            <Ionicons name="settings-outline" size={24} color="#800080" />
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
          <View style={{ height: 80, backgroundColor: "#DDA0DD" }} />
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
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#800080" }}>
                Kullanıcı Adı
              </Text>
              <Text style={{ fontSize: 14, color: "#666", marginTop: 2 }}>
                kullanici@email.com
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#E6B0D4",
                borderRadius: 20,
                paddingVertical: 6,
                paddingHorizontal: 12,
                marginTop: 12,
              }}
            >
              <Ionicons name="pencil-outline" size={16} color="#800080" />
              <Link href="/user/edit_profile">
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 4,
                    color: "#800080",
                  }}
                >
                  Profili Düzenle
                </Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats card */}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            marginBottom: 16,
            padding: 16,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <Ionicons name="medal" size={20} color="#F59E0B" />
            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 8 }}>
              Quiz İstatistikleri
            </Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}>
            <View style={{ width: "50%", paddingVertical: 8 }}>
              <Text style={{ fontSize: 14, color: "#666" }}>Çözülen Quiz</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 4 }}>
                {stats.quizzesTaken}
              </Text>
            </View>
            <View style={{ width: "50%", paddingVertical: 8 }}>
              <Text style={{ fontSize: 14, color: "#666" }}>Doğru Cevaplar</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 4 }}>
                {stats.correctAnswers}/{stats.totalQuestions}
              </Text>
            </View>
            <View style={{ width: "50%", paddingVertical: 8 }}>
              <Text style={{ fontSize: 14, color: "#666" }}>Ortalama Puan</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 4 }}>
                %{stats.averageScore}
              </Text>
            </View>
            <View style={{ width: "50%", paddingVertical: 8 }}>
              <Text style={{ fontSize: 14, color: "#666" }}>Toplam Puan</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 4 }}>
                {stats.points}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 8 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500" }}>Seviye İlerlemesi</Text>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>{stats.rank}</Text>
            </View>
            <View
              style={{
                height: 8,
                backgroundColor: "#E6B0D4",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <View style={{ height: "100%", backgroundColor: "#3B82F6", width: "65%" }} />
            </View>
            <Text style={{ fontSize: 12, color: "#666", textAlign: "right", marginTop: 4 }}>
              750 puan daha kazanarak bir sonraki seviyeye geçebilirsiniz
            </Text>
          </View>
        </View>

        {/* Menu items */}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            marginBottom: 16,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Link href="/user/password_update">
            <MenuItem icon="trophy-outline" label="Şifre Değiştir" />
          </Link>
          <Link href="/user/hesap_bilgileri">
            <MenuItem icon="settings-outline" label="Hesap Bilgileri" />
          </Link>
          <MenuItem icon="log-out-outline" label="Çıkış Yap" danger />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface MenuItemProps {
  icon: string;
  label: string;
  danger?: boolean;
}

function MenuItem({ icon, label, danger = false }: MenuItemProps) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#E6B0D4",
        ...(danger && { borderBottomWidth: 0 }),
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={icon as any} size={22} color={danger ? "#EF4444" : "#800080"} />
        <Text style={{ fontSize: 16, marginLeft: 12, ...(danger && { color: "#EF4444" }) }}>
          {label}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );
}
