import { Text, TouchableOpacity, View } from "react-native";

interface MenuItemProps {
  icon: string;
  iconColor: string;
  iconBgColor: string;
  title: string;
  onPress?: () => void;
}

export const MenuItem = ({
  icon,
  iconColor,
  iconBgColor,
  title,
  onPress,
}: MenuItemProps) => (
  <TouchableOpacity
    className="flex-row items-center justify-between py-4 px-6 bg-white rounded-2xl mb-3"
    onPress={onPress}
  >
    <View className="flex-row items-center gap-2">
      <View
        className={`w-12 h-12 rounded-full items-center justify-center mr-4`}
        style={{ backgroundColor: iconBgColor }}
      >
        <Text style={{ fontSize: 24 }}>{icon}</Text>
      </View>
      <Text className="text-gray-800 text-lg font-medium">{title}</Text>
    </View>
    <Text style={{ fontSize: 20, color: "#9CA3AF" }}>›</Text>
  </TouchableOpacity>
);
