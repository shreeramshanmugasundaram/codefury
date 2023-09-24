import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//importing routes
import userroutes from "./routes/userroutes.js";
import mentorroutes from "./routes/mentorroutes.js";
import sockets from "./sockets/routers.js";
const app = express();
dotenv.config();
app.use(express.json());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Routes
app.use("/user", userroutes);
app.use("/mentor", mentorroutes);

// sockets
io.on("connection", sockets);

// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"), (err) => {
//     res.status(500).send(err);
//   });
// });

const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => {
    httpServer.listen(PORT, () =>
      console.log(`Server Started at PORT ${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
