import axios from "axios";
import config from "../config";
import { useEffect } from "react";

const register = (
  email: string,
  invite_code: string,
  name: string,
  password: string,
  phone: string,
  surname: string
) => {
  return axios
    .post(`${config.baseUrl}/Session/register`, {
      email,
      invite_code,
      name,
      password,
      phone,
      surname,
    })
    .then((response) => {
      // Burada response dönülüyor, isterseniz buradan dönen veriyi kullanabilirsiniz
      console.log("Register success:", response.data);
      return response;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.error(
          "Register error:",
          error.response ? error.response.data : error.message
        );
        // Hata durumunda throw yerine sadece loglama yapabilirsiniz.
        return Promise.reject(
          new Error(error.response ? error.response.data : "Register failed")
        );
      } else {
        console.error("Unexpected error:", error);
        return Promise.reject(new Error("An unexpected error occurred"));
      }
    });
};

export default register;