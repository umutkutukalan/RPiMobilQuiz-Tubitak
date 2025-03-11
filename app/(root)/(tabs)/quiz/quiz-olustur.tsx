import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function SinavOlustur() {
  const [examName, setExamName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [examDuration, setExamDuration] = useState('');
  const [instructorName, setInstructorName] = useState('');

  const handleSubmit = () => {
    alert('Sınav bilgileri kaydedildi.');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F3EDF7', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#6A0DAD', marginBottom: 10 }}>Sınav Oluştur</Text>
      
      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 10, borderLeftWidth: 5, borderLeftColor: '#DDA0DD' }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#800080', marginBottom: 5 }}>Sınav Adı</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#E6B0D4', padding: 10, borderRadius: 8 }}
          value={examName} 
          onChangeText={setExamName} 
        />
      </View>

      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 10, borderLeftWidth: 5, borderLeftColor: '#DDA0DD' }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#800080', marginBottom: 5 }}>Başlangıç Zamanı</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#E6B0D4', padding: 10, borderRadius: 8 }}
          placeholder="YYYY-MM-DD HH:MM:SS"
          value={startTime} 
          onChangeText={setStartTime} 
        />
      </View>
      
      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 10, borderLeftWidth: 5, borderLeftColor: '#DDA0DD' }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#800080', marginBottom: 5 }}>Bitiş Zamanı</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#E6B0D4', padding: 10, borderRadius: 8 }}
          placeholder="YYYY-MM-DD HH:MM:SS"
          value={endTime} 
          onChangeText={setEndTime} 
        />
      </View>
      
      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 10, borderLeftWidth: 5, borderLeftColor: '#DDA0DD' }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#800080', marginBottom: 5 }}>Sınav Süresi (dk)</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#E6B0D4', padding: 10, borderRadius: 8 }}
          keyboardType="numeric"
          value={examDuration} 
          onChangeText={setExamDuration} 
        />
      </View>

      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 10, borderLeftWidth: 5, borderLeftColor: '#DDA0DD' }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#800080', marginBottom: 5 }}>Eğitmen Adı</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#E6B0D4', padding: 10, borderRadius: 8 }}
          value={instructorName} 
          onChangeText={setInstructorName} 
        />
      </View>
      
      <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#1C1C64', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Sınavı Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}