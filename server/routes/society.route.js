import express from "express";
const router = express.Router();
import {
  getSociety,
  createSociety,
  getSocietyCountByStateYearType,
  getSocietyByState,
  getSocietyByYear,
  getSocietyByType,
} from "../controllers/society.controller.js";

router.get("/", getSociety);
router.post("/", createSociety);
router.get("/count", getSocietyCountByStateYearType);
router.get("/state", getSocietyByState);
router.get("/year", getSocietyByYear);
router.get("/type", getSocietyByType);

export default router;
