import express from "express";
const router = express.Router();
import { postContact } from "../controllers/contact.js";

router.post("/contact", postContact);

export default router;
