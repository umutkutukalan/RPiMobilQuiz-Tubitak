import { Text, View } from "react-native";

const TeacherRole = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3EDF7",
      }}
    >
      <Text style={{ fontSize: 24, color: "#800080" }}>Öğretmen Rolü</Text>
      <Text style={{ fontSize: 16, color: "#1C1C64" }}>
        Bu bölüm öğretmenler için tasarlanmıştır. Lütfen öğrenci rolü ile giriş
        yapın.
      </Text>
    </View>
  );
};
export default TeacherRole;
