import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
});

console.log("Backend URL:", import.meta.env.VITE_API_URL);
console.log("API URL:", api.defaults.baseURL);

export default api;




