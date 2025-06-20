import { useDavetKoduUret } from "@/hooks/Admin/useDavetKoduUret";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AdminRole = () => {
  const { davetKoduUret, davetKodu, isLoading } = useDavetKoduUret();

  return (
    <SafeAreaView className="h-full w-full px-10 py-10">
      <View className="w-full h-[50px] flex flex-row items-center gap-5">
        <TouchableOpacity
          className="w-3/5 bg-red-500 h-full py-3 rounded-lg items-center justify-center mb-4"
          onPress={() => davetKoduUret()}
        >
          <Text className="text-white text-lg font-bold">Davet Kodu Üret</Text>
        </TouchableOpacity>
        <View className="h-full w-2/5 bg-gray-300 py-3 rounded-lg items-center justify-center mb-4">
          {davetKodu ? (
            <Text className="text-lg text-black font-semibold">
              {davetKodu}
            </Text>
          ) : (
            <Text className="text-lg text-black font-semibold">xxxxxxxx</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AdminRole;
