import express from "express";
import { data, deletes, passData, update } from "../routes/index.js";

const router = express.Router()

router.get("/", data)
router.post("/send", passData)
router.put("/update", update)
router.delete("/remove", deletes)


export default router;