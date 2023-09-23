import express from "express";
const router = express();
router.use(express.json());

import registeruser from "../controllers/user/userRegister.js";
router.post("/registeruser", registeruser);

export default router;
