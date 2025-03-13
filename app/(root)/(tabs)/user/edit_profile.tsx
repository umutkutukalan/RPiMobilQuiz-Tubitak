import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const EditProfileForm = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <ScrollView>
      <View className="h-full flex flex-col gap-10">
        <View className="flex flex-col gap-2">
          <View className="flex flex-col gap-1">
            <Text className="text-[#800080]">Ad</Text>
            <TextInput
              placeholder="Adınızı giriniz"
              value={firstName}
              onChangeText={setFirstName}
              className="border-2 border-[#E6B0D4] py-5 px-2 text-top rounded-md mb-5"
            />
          </View>

          <View className="flex flex-col gap-1">
            <Text className="text-[#800080]">Soyad</Text>
            <TextInput
              placeholder="Soyadınızı giriniz"
              value={surname}
              onChangeText={setSurname}
              className="border-2 border-[#E6B0D4] py-5 px-2 text-top rounded-md mb-5"
            />
          </View>

          <View className="flex flex-col gap-1">
            <Text className="text-[#800080]">E-posta</Text>
            <TextInput
              placeholder="E-posta adresinizi giriniz"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              className="border-2 border-[#E6B0D4] py-5 px-2 text-top rounded-md mb-5"
            />
          </View>

          <View className="flex flex-col gap-1">
            <Text className="text-[#800080]">Telefon</Text>
            <TextInput
              placeholder="Telefon numaranızı giriniz"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              className="border-2 border-[#E6B0D4] py-5 px-2 text-top rounded-md mb-5"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity className="bg-[#1C1C64] py-5 px-2 text-top rounded-md">
            <Text className="text-white text-center text-2xl">Güncelle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfileForm;
