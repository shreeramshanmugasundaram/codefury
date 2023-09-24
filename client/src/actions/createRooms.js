import * as api from "../api/index.js";

export const createRoom = async (formData, navigate) => {
  try {
    await api
      .createRoom(formData)
      .then((response) => {
        navigate("/chatrooms");
        // success(response.data.message);
      })
      .catch((err) => {
        // error(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
