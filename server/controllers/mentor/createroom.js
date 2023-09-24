import roomSchema from "../../models/roomSchema.js";



const createroom = async(req,res)=>{
    console.log(req.body);
    try {
      const {roomname} = req.body;
      if (!roomname) {
        return res
          .status(400)
          .json({ message: "Please fill all the required inputs " });
      }
  
      const result = await roomSchema.create({
        roomname
      });
      return res.status(201).json({
        result: { roomname },
        message: "room Created Successfully",
      });
    } catch (error) {
      console.log(error);
  
      return res
        .status(500)
        .json({ message: "Something went wrong, Please try later" });
    }

}
export default createroom; 
