import express from "express";
const router = express();
router.use(express.json());

import createroom from "../controllers/mentor/createroom.js";
import mentorregister from "../controllers/mentor/mentorRegister.js";

router.post("/mentorregister", mentorregister);
router.post("/createrroom", createroom);

export default router;
