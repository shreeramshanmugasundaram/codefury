import * as api from "../api/index.js";

export const login = async (formData, success, error, navigate) => {
  try {
    await api
      .login(formData)
      .then((response) => {
        localStorage.setItem("profile", JSON.stringify(response.data));
        navigate("/profile");
        success(response.data.message);
      })
      .catch((err) => {
        error(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
