import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    console.log(localStorage.getItem("profile").token);
    req.headers.authorization = JSON.parse(
      localStorage.getItem("profile")
    ).token;
  }
  return req;
});

export const sign = (formData) => API.post("/user/registeruser", formData);
export const login = (formData) => API.post("/user/userlogin", formData);
export const getprofile = () => API.get("/user/profile");
export const mentorRegister = (formData) =>
  API.post("/user/mentorregister", formData);
