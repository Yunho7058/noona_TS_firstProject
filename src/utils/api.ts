import axios, { AxiosInstance } from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";

const api: AxiosInstance = axios.create({
  baseURL: SPOTIFY_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

api.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;

  return req;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      alert("다시 로그인해주세요.");
    }

    return Promise.reject(error);
  }
);

export default api;
