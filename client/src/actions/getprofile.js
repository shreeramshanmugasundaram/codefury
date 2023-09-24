import * as api from "../api/index.js";

export const getprofile = async (formData, setProfile) => {
  try {
    await api
      .getprofile(formData)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
