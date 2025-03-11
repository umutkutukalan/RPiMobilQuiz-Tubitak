import { NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, StyleSheet } from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
}

export default function AccountUpdateScreen({ navigation }: Props) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
  });

  const validateProfileForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      fullName: !formData.fullName.trim(),
      email: !formData.email.trim() || !emailRegex.test(formData.email),
      phone: !formData.phone.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleProfileUpdate = () => {
    if (validateProfileForm()) {
      Alert.alert('Başarılı', 'Profil bilgileriniz başarıyla güncellendi.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hesap Bilgilerimi Güncelle</Text>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Kişisel Bilgiler</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ad Soyad</Text>
              <TextInput
                placeholder="Adınızı ve soyadınızı giriniz..."
                value={formData.fullName}
                onChangeText={(text) => setFormData({...formData, fullName: text})}
                style={[styles.input, errors.fullName && styles.inputError]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>E-posta</Text>
              <TextInput
                placeholder="E-posta adresinizi giriniz..."
                value={formData.email}
                onChangeText={(text) => setFormData({...formData, email: text})}
                style={[styles.input, errors.email && styles.inputError]}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Telefon</Text>
              <TextInput
                placeholder="Telefon numaranızı giriniz..."
                value={formData.phone}
                onChangeText={(text) => setFormData({...formData, phone: text})}
                style={[styles.input, errors.phone && styles.inputError]}
                keyboardType="phone-pad"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Kullanıcı Rolü</Text>
              <View style={styles.roleContainer}>
                <TouchableOpacity onPress={() => setFormData({...formData, role: 'Öğrenci'})}>
                  <Text style={formData.role === 'Öğrenci' ? styles.selectedRole : styles.roleOption}>Öğrenci</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFormData({...formData, role: 'Eğitmen'})}>
                  <Text style={formData.role === 'Eğitmen' ? styles.selectedRole : styles.roleOption}>Eğitmen</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <TouchableOpacity style={styles.updateButton} onPress={handleProfileUpdate}>
            <Text style={styles.buttonText}>Hesap Bilgileri Güncelle</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
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
  inputContainer: { marginBottom: 15 },
  label: { fontSize: 14, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ced4da', padding: 10, borderRadius: 5, backgroundColor: 'white' },
  inputError: { borderColor: 'red' },
  roleContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  roleOption: { padding: 10, borderWidth: 1, borderRadius: 5, textAlign: 'center' },
  selectedRole: { backgroundColor: '#007bff', color: 'white', padding: 10, borderRadius: 5 },
  updateButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  scrollView: { flex: 1 },
  keyboardView: { flex: 1 }
});