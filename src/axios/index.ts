import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
});

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const deleteToken = () => {
  axiosInstance.defaults.headers.common["Authorization"] = "";
};
