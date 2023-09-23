import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
//   phone:{
//     type:String,
//     required:true,
//   },
  username:{
    type:String,
    required:true,
  }
});

export default mongoose.model("mentor", mentorSchema);
