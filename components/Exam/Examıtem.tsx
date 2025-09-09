import { formatDateTime } from "@/hooks/formatDateTime";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import { useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

type CourseItemProps = {
  title?: string;
  time?: string;
  startTime?: string;
  endTime?: string;
  status?: string;
  teacherId?: string;
};

const ExamItem = ({
  title,
  time,
  startTime,
  endTime,
  status,
  teacherId,
}: CourseItemProps) => {
  return (
    <View
      className={`flex flex-col gap-3 rounded-xl p-4 overflow-hidden`}
      style={{
        height: "110",
        backgroundColor: status === "active" ? "#529a6bff" : "#4e4d8aff",
      }}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-1">
          <Text className="text-sm text-gray-500 text-white">⏰</Text>
          <Text className="text-sm text-gray-500 text-white">
            {formatDateTime(startTime)}
          </Text>
        </View>
        <Text className="text-white">→</Text>
        <View className="flex flex-row items-center gap-1">
          <Text className="text-sm text-gray-500">🏁</Text>
          <Text className="text-sm text-gray-500 text-white">
            {formatDateTime(endTime)}
          </Text>
        </View>
      </View>
      <View className="flex-row items-center gap-4">
        <View
          className="h-full items-center justify-center rounded-xl bg-gray-100"
          style={{ width: 50, height: 50 }}
        >
          <Text className="text-3xl">📝</Text>
        </View>

        <View className="flex flex-col gap-1">
          <View className="flex-row items-center gap-2">
            <Text
              className="font-semibold text-md text-white"
              style={{ maxWidth: "200" }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {title}
            </Text>
          </View>
          <Text className="mt-1 text-sm text-white">{time}dk</Text>
        </View>
      </View>
    </View>
  );
};

export default ExamItem;
