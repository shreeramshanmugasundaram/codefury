import doctorSchema from "../../models/doctorSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


const registerdoctor = async(req,res)=>{
    console.log(req.body);
    try {
      const { email, password, cpassword , phone, qualification } = req.body;
      if (!email || !password || !cpassword || !phone || !qualification) {
        return res
          .status(400)
          .json({ message: "Please fill all the required inputs " });
      }
      if (password !== cpassword) {
        return res.status(400).json({ message: "Password does not match" });
      }
      const existingUser = await doctorSchema.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already Exist." });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await doctorSchema.create({
        email,
        password: hashedPassword,
        phone:phone,
        qualification:qualification
      });
  
      const jsonKey = process.env.JSONTOKEN;
      const token = jwt.sign({ phone: result.phone, id: result._id }, jsonKey, {
        expiresIn: "24h",
      });
  
      return res.status(201).json({
        result: { email },
        token,
        message: "Account Created Successfully",
      });
    } catch (error) {
      console.log(error);
  
      return res
        .status(500)
        .json({ message: "Something went wrong, Please try later" });
    }

}
export default registerdoctor; 
