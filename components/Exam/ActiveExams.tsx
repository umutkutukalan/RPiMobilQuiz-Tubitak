import { useGetAllExam } from "@/hooks/Exam/useGetAllExam";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ExamCard } from "./ExamCard";

interface ActiveExamsProps {
  handleDeleteExam: (examId: string) => void;
}

const ActiveExams = ({ handleDeleteExam }: ActiveExamsProps) => {
  const { examList, getAllExams, isLoading } = useGetAllExam();

  useEffect(() => {
    getAllExams();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (examList.filter((exam) => exam.status === "active").length === 0) {
    return <Text>Aktif sınav bulunamadı.</Text>;
  }

  return (
    <ScrollView>
      <View className="flex flex-col gap-5">
        {examList
          .filter((exam) => exam.status === "active")
          .map((exam) => (
            <ExamCard
              key={exam.id}
              exam={exam}
              handleDeleteExam={handleDeleteExam}
              activeTab="active"
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default ActiveExams;
