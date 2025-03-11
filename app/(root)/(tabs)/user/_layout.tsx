import { View, Text } from 'react-native';
import { Slot } from 'expo-router';

export default function ProfileLayout() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Profil Sayfası
      </Text>
      <Slot /> 
    </View>
  );
}