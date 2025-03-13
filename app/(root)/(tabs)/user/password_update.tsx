import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const UpdatePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <ScrollView className='p-4 bg-[#F3EDF7]'>
            <View className='bg-white p-4 rounded-lg border-2 border-[#DDA0DD]'>
                <Text className='text-[#800080] text-xl font-bold mb-5'>Şifre Güncelle</Text>
            
                <Text className='text-[#800080] mb-5'>Mevcut Şifre</Text>
                <TextInput
                    placeholder="Mevcut şifrenizi giriniz"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    secureTextEntry
                    className='border-2 border-[#E6B0D4] p-2 rounded-md mb-5'
                />
                
                <Text className='text-[#800080] mb-5'>Yeni Şifre</Text>
                <TextInput
                    placeholder="Yeni şifrenizi giriniz"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry
                    className='border-2 border-[#E6B0D4] p-2 rounded-md mb-5'
                />
                
                <Text className='text-[#800080] mb-5'>Yeni Şifre (Tekrar)</Text>
                <TextInput
                    placeholder="Yeni şifrenizi tekrar giriniz"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    className="border-2 border-[#E6B0D4] p-2 rounded-md mb-5"
                />
                
                <TouchableOpacity className='bg-[#1C1C64] p-2 rounded-md' onPress={() => alert('Şifre güncellendi!')}>
                    <Text
                    className='text-white text-center'>Şifreyi Güncelle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default UpdatePassword;
