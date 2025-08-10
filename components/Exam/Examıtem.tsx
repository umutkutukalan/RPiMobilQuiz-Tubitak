import { formatDateTime } from "@/hooks/formatDateTime";
import { useGetUserById } from "@/hooks/User/useGetUserById";
import { useEffect } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

type CourseItemProps = {
  title?: string;
  time?: string;
  startTime?: string;
  endTime?: string;
  teacherId?: string;
};

const ExamItem = ({
  title,
  time,
  startTime,
  endTime,
  teacherId,
}: CourseItemProps) => {
  const { getUserById, userData, isLoading } = useGetUserById();
  useEffect(() => {
    getUserById(Number(teacherId));
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="flex-row items-center gap-4 rounded-2xl p-4 bg-white">
      <View className="h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
        <Text className="text-3xl">📝</Text>
      </View>

      <View className="min-w-0 flex-1">
        <View className="flex-row items-center gap-2">
          {title ? (
            <Text className="px-2 py-0.5 text-xs font-semibold bg-gray-300 rounded-md">
              Quiz
            </Text>
          ) : null}
          <Text className="truncate text-base font-semibold text-gray-800">
            {title}
          </Text>
        </View>
        <View className="flex flex-col">
          <Text className="mt-1 text-sm text-gray-500">
            {formatDateTime(startTime)}
          </Text>
          <Text className="mt-1 text-sm text-gray-500">
            {formatDateTime(endTime)}
          </Text>
        </View>
        <View>
          <Text>
            {userData?.name} {userData?.surname}
          </Text>
        </View>
        <Text className="mt-1 text-sm text-gray-500">{time}dk</Text>
      </View>

      <TouchableOpacity className="ml-auto h-10 w-10 items-center justify-center rounded-full bg-gray-200">
        <Text className="text-xl">{"->"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExamItem;
