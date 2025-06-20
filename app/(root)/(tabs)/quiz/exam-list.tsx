import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function ExamList() {
  const [activeTab, setActiveTab] = useState("all");

  const lists = [
    {
      id: 1,
      title: "Daily To-do's",
      category: "Work",
      date: "24-09-2024",
      gradient: ["#a78bfa", "#f472b6", "#fb923c"], // purple-400, pink-400, orange-400
    },
    {
      id: 2,
      title: "Traveling List",
      category: "List",
      date: "13-11-2024",
      gradient: ["#0f172a", "#6d28d9", "#2563eb"], // slate-900, purple-900, blue-900
    },
    {
      id: 3,
      title: "Workout List",
      category: "Others",
      date: "07-10-2022",
      gradient: ["#2563eb", "#7c3aed", "#db2777"], // blue-600, purple-600, pink-600
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F4F6", padding: 16 }}>
      {/* Header Tabs */}
      <View style={{ flexDirection: "row", marginBottom: 24 }}>
        <TouchableOpacity
          onPress={() => setActiveTab("all")}
          style={{
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderTopLeftRadius: 999,
            borderBottomLeftRadius: 999,
            backgroundColor: activeTab === "all" ? "#000" : "#E5E7EB",
          }}
        >
          <Text style={{
            color: activeTab === "all" ? "#fff" : "#4B5563",
            fontWeight: "500",
            fontSize: 12,
            textAlign: "center"
          }}>Tüm Sınavlar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("active")}
          style={{
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: activeTab === "active" ? "#000" : "#E5E7EB",
          }}
        >
          <Text style={{
            color: activeTab === "active" ? "#fff" : "#4B5563",
            fontWeight: "500",
            fontSize: 12,
            textAlign: "center"
          }}>Devam Eden</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("pinned")}
          style={{
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderTopRightRadius: 999,
            borderBottomRightRadius: 999,
            backgroundColor: activeTab === "pinned" ? "#000" : "#E5E7EB",
          }}
        >
          <Text style={{
            color: activeTab === "pinned" ? "#fff" : "#4B5563",
            fontWeight: "500",
            fontSize: 12,
            textAlign: "center"
          }}>Bekleyen</Text>
        </TouchableOpacity>
      </View>

      {/* List Cards */}
      <View style={{ gap: 16, marginBottom: 80 }}>
        {lists.map((list) => (
          <View
            key={list.id}
            style={{
              borderRadius: 24,
              padding: 24,
              backgroundColor: list.gradient[0],
              marginBottom: 0,
              // Basit renk geçişi için sadece ilk rengi kullandık
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16, color: "#fff" }}>{list.title}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ color: "#fff", opacity: 0.9, fontSize: 14 }}>{list.category}</Text>
              <View style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 4 }}>
                <Text style={{ color: "#fff", fontWeight: "500", fontSize: 14 }}>{list.date}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
