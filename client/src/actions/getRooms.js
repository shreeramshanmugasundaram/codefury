import * as api from "../api/index.js";

export const getRooms = async (setRooms) => {
  try {
    await api
      .getRooms()
      .then((response) => {
        setRooms(response.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
