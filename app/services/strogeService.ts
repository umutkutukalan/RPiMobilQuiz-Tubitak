import * as SecureStore from "expo-secure-store";

export const strogaService = {
  store: async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  },
  get: async (key: string) => {
    return await SecureStore.getItemAsync(key);
  },
  remove: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};
