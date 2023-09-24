import * as api from "../api/index.js";

export const createRoom = async (formData, navigate) => {
  try {
    await api
      .createRoom(formData)
      .then((response) => {
        navigate("/chatrooms");
      })
      .catch((err) => {});
  } catch (error) {
    console.log(error);
  }
};
