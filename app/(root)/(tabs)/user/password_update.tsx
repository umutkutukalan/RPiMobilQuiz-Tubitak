import { NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, SafeAreaView, StatusBar, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, StyleSheet } from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
}

export default function AccountUpdateScreen({ navigation }: Props) {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const validatePasswordForm = () => {
    const newErrors = {
      currentPassword: !formData.currentPassword.trim(),
      newPassword: !formData.newPassword.trim(),
      confirmPassword: formData.newPassword !== formData.confirmPassword,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handlePasswordUpdate = () => {
    if (validatePasswordForm()) {
      Alert.alert('Başarılı', 'Şifreniz başarıyla güncellendi.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Şifre Güncelle</Text>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Şifre Güncelle</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Mevcut Şifre</Text>
              <TextInput
                placeholder="Mevcut şifrenizi giriniz..."
                secureTextEntry
                value={formData.currentPassword}
                onChangeText={(text) => setFormData({...formData, currentPassword: text})}
                style={[styles.input, errors.currentPassword && styles.inputError]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Yeni Şifre</Text>
              <TextInput
                placeholder="Yeni şifrenizi giriniz..."
                secureTextEntry
                value={formData.newPassword}
                onChangeText={(text) => setFormData({...formData, newPassword: text})}
                style={[styles.input, errors.newPassword && styles.inputError]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Yeni Şifre (Tekrar)</Text>
              <TextInput
                placeholder="Yeni şifrenizi tekrar giriniz..."
                secureTextEntry
                value={formData.confirmPassword}
                onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
                style={[styles.input, errors.confirmPassword && styles.inputError]}
              />
            </View>
          </View>
          
          <TouchableOpacity style={styles.profileUpdateButton} onPress={handlePasswordUpdate}>
            <Text style={styles.buttonText}>Şifreyi Güncelle</Text>
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
  updateButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  profileUpdateButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 5, alignItems: 'center' },
  scrollView: { flex: 1 },
  keyboardView: { flex: 1 }
});
