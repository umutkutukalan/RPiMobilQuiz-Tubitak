import * as SecureStore from "expo-secure-store";

export const strogeService = {
  store: async (key: string, value: any) => {
    await SecureStore.setItemAsync(key, JSON.stringify(value)); // JSON formatına çevir
  },

  get: async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    return value ? JSON.parse(value) : null; // JSON'dan nesneye çevir
  },

  remove: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};