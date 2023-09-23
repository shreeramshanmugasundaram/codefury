import express from "express";
const router = express();
router.use(express.json());

import mentorregister from "../controllers/mentor/mentorRegister.js";
// import userLogin from "../controllers/user/userLogin.js";
router.post("/mentorregister", mentorregister);
// router.post("/userlogin", userLogin);


export default router;
