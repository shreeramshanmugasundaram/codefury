import * as api from "../api/index.js";

export const sign = async (formData, success, error, navigate) => {
  try {
    await api
      .sign(formData)
      .then((response) => {
        navigate("/profile");
        localStorage.setItem("profile", JSON.stringify(response.data));
        success(response.data.message);
      })
      .catch((err) => {
        error(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
