import axios from "axios";

// export const baseURL = "https://api.collaborateboard.site";
// export const baseURL = "http://localhost:8000";
export const baseURL = "https://boardliv.onrender.com";

export const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
