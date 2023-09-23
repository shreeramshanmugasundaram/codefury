import express from "express";
const router = express();
router.use(express.json());

import registeruser from "../controllers/user/userRegister.js";
import userLogin from "../controllers/user/userLogin.js";
router.post("/registeruser", registeruser);
router.post("/userlogin", userLogin);


export default router;
