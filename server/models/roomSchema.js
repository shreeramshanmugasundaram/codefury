import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  messenger: {
    type: String,
    required: true,
  },
});

const roomSchema = new mongoose.Schema({
  roomname: {
    type: String,
    required: true,
  },
  room_limit: {
    type: String,
    required: true,
  },
  mentor_Id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  visitors: [
    {
      type: String,
      required: true,
    },
  ],
  messages: [messageSchema], // Embed the message schema as an array of messages
});

export default mongoose.model("Room", roomSchema);
