import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const sign = (formData) => API.post("/user/registeruser", formData);
export const login = (formData) => API.post("/user/userlogin", formData);
export const mentorRegister = (formData) =>
  API.post("/user/userlogin", formData);
