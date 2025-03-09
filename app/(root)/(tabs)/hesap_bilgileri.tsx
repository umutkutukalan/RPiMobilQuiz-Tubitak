
import { NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, StyleSheet } from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
}

export default function AccountUpdateScreen({ navigation }: Props) {
  const [formData, setFormData] = useState({
    fullName: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@example.com',
    phone: '5551234567',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const validateProfileForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      ...errors,
      fullName: !formData.fullName.trim(),
      email: !formData.email.trim() || !emailRegex.test(formData.email),
      phone: !formData.phone.trim(),
    };

    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.email && !newErrors.phone;
  };

  const validateFullForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      fullName: !formData.fullName.trim(),
      email: !formData.email.trim() || !emailRegex.test(formData.email),
      phone: !formData.phone.trim(),
      currentPassword: !!(formData.newPassword.trim() && !formData.currentPassword.trim()),
      newPassword: false,
      confirmPassword: !!(formData.newPassword.trim() && formData.newPassword !== formData.confirmPassword),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleProfileUpdate = () => {
    if (validateProfileForm()) {
      Alert.alert('Başarılı', 'Profil bilgileriniz başarıyla güncellendi.');
    }
  };

  const handleFullUpdate = () => {
    if (validateFullForm()) {
      Alert.alert('Başarılı', 'Tüm hesap bilgileriniz başarıyla güncellendi.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Hesap Bilgilerimi Güncelle
        </Text>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView style={styles.scrollView}>
          {/* Kişisel Bilgiler */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Kişisel Bilgiler</Text>
            
            {/* Ad Soyad */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ad Soyad</Text>
              <TextInput
                value={formData.fullName}
                onChangeText={(text) => setFormData({...formData, fullName: text})}
                style={[
                  styles.input,
                  errors.fullName && styles.inputError
                ]}
              />
              {errors.fullName && (
                <Text style={styles.errorText}>
                  Ad Soyad alanı boş bırakılamaz.
                </Text>
              )}
            </View>
            
            {/* E-posta */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>E-posta</Text>
              <TextInput
                value={formData.email}
                onChangeText={(text) => setFormData({...formData, email: text})}
                style={[
                  styles.input,
                  errors.email && styles.inputError
                ]}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email && (
                <Text style={styles.errorText}>
                  Geçerli bir e-posta adresi giriniz.
                </Text>
              )}
            </View>
            
            {/* Telefon */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Telefon</Text>
              <TextInput
                value={formData.phone}
                onChangeText={(text) => setFormData({...formData, phone: text})}
                style={[
                  styles.input,
                  errors.phone && styles.inputError
                ]}
                keyboardType="phone-pad"
              />
              {errors.phone && (
                <Text style={styles.errorText}>
                  Telefon alanı boş bırakılamaz.
                </Text>
              )}
            </View>

            {/* Profili Güncelle Butonu - Mavi olarak değiştirildi */}
            <TouchableOpacity 
              style={styles.profileUpdateButton}
              onPress={handleProfileUpdate}
            >
              <Text style={styles.buttonText}>
                Profili Güncelle
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Şifre Değiştirme */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Şifre Değiştir</Text>
            
            {/* Mevcut Şifre */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Mevcut Şifre</Text>
              <TextInput
                value={formData.currentPassword}
                onChangeText={(text) => setFormData({...formData, currentPassword: text})}
                style={[
                  styles.input,
                  errors.currentPassword && styles.inputError
                ]}
                secureTextEntry
              />
              {errors.currentPassword && (
                <Text style={styles.errorText}>
                  Mevcut şifrenizi girmelisiniz.
                </Text>
              )}
            </View>
            
            {/* Yeni Şifre */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Yeni Şifre</Text>
              <TextInput
                value={formData.newPassword}
                onChangeText={(text) => setFormData({...formData, newPassword: text})}
                style={styles.input}
                secureTextEntry
              />
              <Text style={styles.helperText}>
                Şifreniz en az 8 karakter uzunluğunda olmalıdır.
              </Text>
            </View>
            
            {/* Şifre Tekrar */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Şifre Tekrar</Text>
              <TextInput
                value={formData.confirmPassword}
                onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
                style={[
                  styles.input,
                  errors.confirmPassword && styles.inputError
                ]}
                secureTextEntry
              />
              {errors.confirmPassword && (
                <Text style={styles.errorText}>
                  Şifreler eşleşmiyor.
                </Text>
              )}
            </View>
          </View>
          
          {/* Tüm Bilgileri Güncelle Butonu */}
          <TouchableOpacity 
            style={styles.fullUpdateButton}
            onPress={handleFullUpdate}
          >
            <Text style={styles.buttonText}>
              Tüm Bilgilerimi Güncelle
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#3B82F6', // Mavi olarak değiştirildi (blue-500)
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937', // gray-800
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#6B7280', // gray-500
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB', // gray-300
    borderRadius: 6,
    padding: 12,
  },
  inputError: {
    borderColor: '#EF4444', // red-500
  },
  errorText: {
    color: '#EF4444', // red-500
    fontSize: 14,
    marginTop: 4,
  },
  helperText: {
    color: '#9CA3AF', // gray-400
    fontSize: 12,
    marginTop: 4,
  },
  profileUpdateButton: {
    backgroundColor: '#3B82F6', // Mavi olarak değiştirildi (blue-500)
    borderRadius: 6,
    padding: 12,
    marginTop: 8,
  },
  fullUpdateButton: {
    backgroundColor: '#10B981', // success color (yeşil)
    borderRadius: 6,
    padding: 16,
    marginBottom: 32,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
});