import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const EditProfileForm = () => {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <ScrollView style={{ padding: 20, backgroundColor: '#F3EDF7' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, borderColor: '#DDA0DD', borderWidth: 2 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#800080', marginBottom: 10 }}>Hesap Bilgilerini Güncelle</Text>
                
                <Text style={{ color: '#800080', marginBottom: 5 }}>Ad</Text>
                <TextInput
                    placeholder="Adınızı giriniz"
                    value={firstName}
                    onChangeText={setFirstName}
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
                
                <Text style={{ color: '#800080', marginBottom: 5 }}>Soyad</Text>
                <TextInput
                    placeholder="Soyadınızı giriniz"
                    value={surname}
                    onChangeText={setSurname}
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
                
                <Text style={{ color: '#800080', marginBottom: 5 }}>E-posta</Text>
                <TextInput
                    placeholder="E-posta adresinizi giriniz"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
                
                <Text style={{ color: '#800080', marginBottom: 5 }}>Telefon</Text>
                <TextInput
                    placeholder="Telefon numaranızı giriniz"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 20 }}
                />
                
                <TouchableOpacity style={{ backgroundColor: '#1C1C64', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Güncelle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default EditProfileForm;