import config from "@/config/config";
import axios from "axios";

export const getByUserId = async (userId: number) => {
    try {
        const response = await axios.get(
            `${config.baseUrl}/User/get_user_by_id/${userId}`
        );
        console.log("User Id:", userId);
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(
                "Get user error:",
                error.response ? error.response.data : error.message
            );
            throw new Error(
                error.response ? error.response.data : "Get user failed"
            );
        } else {
            console.error("Unexpected error:", error);
            throw new Error("An unexpected error occurred");
        }
    }
}