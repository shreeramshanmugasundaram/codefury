import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    console.log(localStorage.getItem("profile").token);
    req.headers.authorization = `Bear ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const sign = (formData) => API.post("/user/registeruser", formData);
export const login = (formData) => API.post("/user/userlogin", formData);
export const getprofile = () => API.get("/user/getprofile");
export const mentorRegister = (formData) =>
  API.post("/user/mentorregister", formData);

export const getRooms = () => API.get("/user/getrooms");

export const createRoom = (formData) =>
  API.post("/mentor/createrroom", formData);
