import express from "express";
import { getGrevience, getGrevienceBySocietyId, postGrevienceBySocietyId } from "../controllers/grevience.controller.js";

const router = express.Router();

router.get("/", getGrevience);
router.get("/:societyId", getGrevienceBySocietyId);
router.post("/:societyId", postGrevienceBySocietyId);

export default router;