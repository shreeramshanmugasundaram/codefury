import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone:{
    type:String,
    required:true,
  },
  
  Qualification:{
    type:String,
    required:true
  }

});

export default mongoose.model("users", userSchema);
