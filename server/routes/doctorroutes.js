import express from "express";
const router = express();
router.use(express.json());

import doctorLogin from "../controllers/doctor/doctorLogin";
import registerdoctor from "../controllers/doctor/doctorRegister";
// import userLogin from "../controllers/user/userLogin.js";
router.post("/registerdoctor",registerdoctor);
router.post("/registerdoctor",doctorLogin);


// router.post("/userlogin", userLogin);


export default router;
