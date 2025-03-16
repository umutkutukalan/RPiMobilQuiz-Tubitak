import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

export const strogeService = {
  store: async (key: string, value: string) => {
    if (Platform.OS === "web") {
      localStorage.setItem(key, value); // Web için localStorage kullan
    } else {
      await SecureStore.setItemAsync(key, value); // Mobilde SecureStore kullan
    }
  },
  get: async (key: string) => {
    if (Platform.OS === "web") {
      return localStorage.getItem(key); // Web için localStorage kullan
    } else {
      return await SecureStore.getItemAsync(key); // Mobilde SecureStore kullan
    }
  },
  remove: async (key: string) => {
    if (Platform.OS === "web") {
      localStorage.removeItem(key); // Web için localStorage kullan
    } else {
      await SecureStore.deleteItemAsync(key); // Mobilde SecureStore kullan
    }
  },
};