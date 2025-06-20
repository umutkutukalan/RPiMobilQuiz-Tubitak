import { View, Text } from 'react-native';
import { Slot } from 'expo-router';

export default function ProfileLayout() {
  return (
    <View style={{ flex: 1, padding: 0 }}>
      <Slot /> 
    </View>
  );
}