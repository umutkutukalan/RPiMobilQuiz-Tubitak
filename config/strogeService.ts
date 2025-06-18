import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

export const strogeService = {
  store: async (key: string, value: any) => {
    const stringValue = JSON.stringify(value); // 🔧 string'e çevir
    if (Platform.OS === "web") {
      localStorage.setItem(key, stringValue);
    } else {
      await SecureStore.setItemAsync(key, stringValue);
    }
  },

  get: async (key: string) => {
    let value;
    if (Platform.OS === "web") {
      value = localStorage.getItem(key);
    } else {
      value = await SecureStore.getItemAsync(key);
    }
    return value ? JSON.parse(value) : null; // 🔧 geri objeye çevir
  },

  remove: async (key: string) => {
    if (Platform.OS === "web") {
      localStorage.removeItem(key);
    } else {
      await SecureStore.deleteItemAsync(key);
    }
  },
};