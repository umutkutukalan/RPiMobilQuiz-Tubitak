import { Link, NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
}

export default function AccountDetailsScreen({ navigation }: Props) {
  const [userData] = useState({
    fullName: 'Mehmet Yılmaz',
    email: 'mehmet.yilmaz@example.com',
    phone: '5551234567',
    role: 'Öğrenci', // Kullanıcının rolü
  });

  const handleEditProfile = () => {
    // Profil düzenleme ekranına yönlendirme yapılabilir
    navigation.navigate('AccountUpdate'); // 'AccountUpdate' yerine sizin profil düzenleme ekranınızın ismi olmalı
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hesap Bilgilerim</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kişisel Bilgiler</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Ad Soyad:</Text>
          <Text style={styles.infoText}>{userData.fullName}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>E-posta:</Text>
          <Text style={styles.infoText}>{userData.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Telefon:</Text>
          <Text style={styles.infoText}>{userData.phone}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Kullanıcı Rolü:</Text>
          <Text style={styles.infoText}>{userData.role}</Text>
        </View>
      </View>

      {/* Profili Düzenle Butonu */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Profili Düzenle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15, backgroundColor: '#007bff' },
  backButton: { marginRight: 10 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  section: { padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  infoContainer: { marginBottom: 15 },
  label: { fontSize: 14, marginBottom: 5, fontWeight: 'bold' },
  infoText: { fontSize: 14, color: '#495057' },
  editButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
