import Router from "express";
import { getContact } from "../controllers/contact.js";

const router = Router();

router.post("/getContact", getContact)
;
export default router;