import "../../globals.css";
import { useAuth } from "@/context/AuthProvider";
import StudentRole from "./user/student-role";
import TeacherRole from "./user/teacher-role";
import AdminRole from "./user/admin-role";




export default function HomeScreen() {
  const { user } = useAuth();
  console.log("User:", user);

  if (user?.role == "student") {
    return <StudentRole />;
  } else if (user?.role == "teacher") {
    return <TeacherRole />;
  } else if (user?.role == "admin") {
    return <AdminRole />;
  }
}
