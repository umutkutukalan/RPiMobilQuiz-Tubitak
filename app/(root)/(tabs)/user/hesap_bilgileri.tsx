import { NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, Text, View } from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
}

export default function AccountDetailsScreen({ navigation }: Props) {
  const [userData] = useState({
    firstName: 'Mehmet',
    lastName: 'Yılmaz',
    email: 'mehmet.yilmaz@example.com',
    phone: '5551234567',
    role: 'Öğrenci',
  });

  const handleEditProfile = () => {
    navigation.navigate('AccountUpdate');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3EDF7' }}>
      <StatusBar barStyle="dark-content" />

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#800080' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Hesap Bilgilerim</Text>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#800080' }}>Kişisel Bilgiler</Text>

        <View style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#DDA0DD', paddingBottom: 5 }}>
          <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: 'bold', color: '#800080' }}>Ad:</Text>
          <Text style={{ fontSize: 14, color: '#1C1C64' }}>{userData.firstName}</Text>
        </View>

        <View style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#DDA0DD', paddingBottom: 5 }}>
          <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: 'bold', color: '#800080' }}>Soyad:</Text>
          <Text style={{ fontSize: 14, color: '#1C1C64' }}>{userData.lastName}</Text>
        </View>

        <View style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#E6B0D4', paddingBottom: 5 }}>
          <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: 'bold', color: '#800080' }}>E-posta:</Text>
          <Text style={{ fontSize: 14, color: '#1C1C64' }}>{userData.email}</Text>
        </View>

        <View style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#DDA0DD', paddingBottom: 5 }}>
          <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: 'bold', color: '#800080' }}>Telefon:</Text>
          <Text style={{ fontSize: 14, color: '#1C1C64' }}>{userData.phone}</Text>
        </View>

        <View style={{ marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#E6B0D4', paddingBottom: 5 }}>
          <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: 'bold', color: '#800080' }}>Kullanıcı Rolü:</Text>
          <Text style={{ fontSize: 14, color: '#1C1C64' }}>{userData.role}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#1C1C64',
          padding: 15,
          borderRadius: 5,
          alignItems: 'center',
          margin: 20,
        }}
        onPress={handleEditProfile}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Profili Düzenle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
