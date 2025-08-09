import { useGetScheduledExams } from "@/hooks/Exam/useGetScheduledExams";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { ExamCard } from "./ExamCard";

interface ScheduledExamsProps {
  handleDeleteExam: (examId: string) => void;
}

const ScheduledExams = ({ handleDeleteExam }: ScheduledExamsProps) => {
  const { getScheduledExams, scheduledExams, isLoading } =
    useGetScheduledExams();

  useEffect(() => {
    getScheduledExams();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (scheduledExams.length === 0) {
    return <Text>Bekleyen sınav bulunamadı.</Text>;
  }

  return (
    <ScrollView>
      <View className="flex flex-col gap-5">
        {scheduledExams.map((exam) => (
          <ExamCard
            key={exam.id}
            exam={exam}
            handleDeleteExam={handleDeleteExam}
            activeTab="scheduled"
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ScheduledExams;
