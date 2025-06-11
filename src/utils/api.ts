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

export default api;
