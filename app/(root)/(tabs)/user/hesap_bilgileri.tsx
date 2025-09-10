import { NavigationProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/context/AuthProvider";
import * as ImagePicker from "expo-image-picker";

interface Props {
  navigation: NavigationProp<any>;
}

export default function AccountDetailsScreen({ navigation }: Props) {
  const { user } = useAuth();
  const router = useRouter();
  const { getUserById, userData, isLoading } = useGetUserById();
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    getUserById(user?.id);
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images", // veya ImagePicker.MediaTypeOptions.Images (uyumlu ise)
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result); // Yapıyı görmek için
    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setProfileImg(result.assets[0].uri);
      } else if (result.uri) {
        setProfileImg(result.uri);
      }
    }
  };

  if (isLoading) {
    return (
      <View className="w-full h-full flex-items-center justify-center">
        <LoadingScreen />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 p-4 bg-gray-50">
      <View className="p-5">
        <StatusBar barStyle="dark-content" />
        <View className="flex flex-col gap-5">
          <TouchableOpacity
            onPress={pickImage}
            className="w-40 h-40 rounded-full border border-gray-300 bg-gray-200 self-center flex items-center justify-center overflow-hidden"
          >
            {profileImg ? (
              <Image
                source={{ uri: profileImg }}
                className="w-full h-full rounded-full"
              />
            ) : userData?.profile_img ? (
              <Image
                source={{ uri: userData.profile_img }}
                className="w-full h-full rounded-full"
              />
            ) : (
              <Text style={{ fontSize: 50 }}>👤</Text>
            )}
          </TouchableOpacity>
          <View className="flex flex-col gap-3 mb-6">
            <View className="flex flex-col gap-1">
              <Text className="text-gray-600 text-sm">Ad:</Text>
              <View className="bg-white p-4 rounded-lg">
                <Text className="text-xl font-semibold">{userData?.name}</Text>
              </View>
            </View>

            <View className="flex flex-col gap-1">
              <Text className="text-gray-600 text-sm">Soyad:</Text>
              <View className="bg-white p-4 rounded-lg">
                <Text className="text-xl font-semibold">
                  {userData?.surname}
                </Text>
              </View>
            </View>

            <View className="flex flex-col gap-1">
              <Text className="text-gray-600 text-sm">E-posta:</Text>
              <View className="bg-white p-4 rounded-lg">
                <Text className="text-xl font-semibold">{userData?.email}</Text>
              </View>
            </View>

            <View className="flex flex-col gap-1">
              <Text className="text-gray-600 text-sm">Telefon:</Text>
              <View className="bg-white p-4 rounded-lg">
                <Text className="text-xl font-semibold">{userData?.phone}</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-lg items-center">
          <Text className="text-white font-bold text-lg">Profili Düzenle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
