import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

//importing routes
import userroutes from "./routes/userroutes.js"
import mentorroutes from "./routes/mentorroutes.js"
import doctorroutes from "./routes/mentorroutes.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/user", userroutes);
app.use("/mentor", mentorroutes)
app.use("/doctor", doctorroutes)


const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
