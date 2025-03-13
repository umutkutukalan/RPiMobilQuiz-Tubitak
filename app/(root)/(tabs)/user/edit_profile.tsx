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
    <ScrollView className="bg-[#F3EDF7]">
      <View className="bg-white border border-[#DDA0DD] p-5 rounded-lg">
        <Text
        className="text-[#800080] mb-5 text-2xl font-semibold"
        >
          Hesap Bilgilerini Güncelle
        </Text>

        <Text className="text-[#800080] mb-5">Ad</Text>
        <TextInput
          placeholder="Adınızı giriniz"
          value={firstName}
          onChangeText={setFirstName}
          className="border-2 border-[#E6B0D4] p-2 rounded-md mb-5"
        />

        <Text className="text-[#800080] mb-5">Soyad</Text>
        <TextInput
          placeholder="Soyadınızı giriniz"
          value={surname}
          onChangeText={setSurname}
          className="border-2 border-[#E6B0D4] p-2 rounded-md mb-5"
        />

        <Text className="text-[#800080] mb-5">E-posta</Text>
        <TextInput
          placeholder="E-posta adresinizi giriniz"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="border-2 border-[#E6B0D4] p-2 rounded-md mb-5"
        />

        <Text className="text-[#800080] mb-5">Telefon</Text>
        <TextInput
          placeholder="Telefon numaranızı giriniz"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          className="border-2 border-[#E6B0D4] p-2 rounded-md mb-5"
        />

        <TouchableOpacity className="bg-[#1C1C64] p-2 rounded-md">
          <Text className="text-white text-center">Güncelle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfileForm;
