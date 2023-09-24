import roomSchema from "../../models/roomSchema.js";
const getrooms = async (req, res) => {
  try {
    const allrooms = await roomSchema.find();
    // console.log(allcategory);
    return res.status(201).json(allrooms);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default getrooms;
