import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL + "/api/v1"
    : import.meta.env.VITE_API_URL + "/api/v1",
  //withCredentials: true,
});
