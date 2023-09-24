import express from "express";
const router = express();
router.use(express.json());

import createroom from "../controllers/mentor/createroom.js";
import mentorregister from "../controllers/mentor/mentorRegister.js";

import createroom from "../controllers/mentor/createroom.js";
// import userLogin from "../controllers/user/userLogin.js";
router.post("/mentorregister", mentorregister);
router.post("/createroom", createroom);

// router.post("/userlogin", userLogin);

export default router;
