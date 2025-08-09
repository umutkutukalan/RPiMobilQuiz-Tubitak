import { useGetAllExam } from "@/hooks/Exam/useGetAllExam";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { ExamCard } from "./ExamCard";

interface FinishedExamsProps {
  handleDeleteExam: (examId: string) => void;
}

const FinishedExams = ({ handleDeleteExam }: FinishedExamsProps) => {
  const { examList, getAllExams, isLoading } = useGetAllExam();

  useEffect(() => {
    getAllExams();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (examList.filter((exam) => exam.status === "finished").length === 0) {
    return <Text>Biten sınav bulunamadı.</Text>;
  }

  return (
    <ScrollView>
      <View className="flex flex-col gap-5">
        {examList
          .filter((exam) => exam.status === "finished")
          .map((exam) => (
            <ExamCard
              key={exam.id}
              exam={exam}
              handleDeleteExam={handleDeleteExam}
              activeTab="finished"
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default FinishedExams;
