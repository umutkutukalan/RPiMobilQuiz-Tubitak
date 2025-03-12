import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const UpdatePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <ScrollView style={{ padding: 20, backgroundColor: '#F3EDF7' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, borderColor: '#DDA0DD', borderWidth: 2 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#800080', marginBottom: 10 }}>Şifre Güncelle</Text>
                
                <Text style={{ color: '#800080', marginBottom: 5 }}>Mevcut Şifre</Text>
                <TextInput
                    placeholder="Mevcut şifrenizi giriniz"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    secureTextEntry
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
                
                <Text style={{ color: '#800080', marginBottom: 5 }}>Yeni Şifre</Text>
                <TextInput
                    placeholder="Yeni şifrenizi giriniz"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
                
                <Text style={{ color: '#800080', marginBottom: 5 }}>Yeni Şifre (Tekrar)</Text>
                <TextInput
                    placeholder="Yeni şifrenizi tekrar giriniz"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 20 }}
                />
                
                <TouchableOpacity style={{ backgroundColor: '#1C1C64', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Şifreyi Güncelle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default UpdatePassword;
