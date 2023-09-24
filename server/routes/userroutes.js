import express from "express";
const router = express();
router.use(express.json());

import registeruser from "../controllers/user/userRegister.js";
import userLogin from "../controllers/user/userLogin.js";
import getrooms from "../controllers/user/getallroom.js";
import getprofile from "../controllers/user/getprofile.js";

router.post("/registeruser", registeruser);
router.post("/userlogin", userLogin);
router.get("/getrooms", getrooms);
router.get("/getprofile",getprofile)


export default router;
