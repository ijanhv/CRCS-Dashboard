import express from "express";
import { getSociety, getSocietyByEmail, login, logout, register,  updateSocietyById } from "../controllers/registeredSociety.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:email", getSocietyByEmail);
// router.put("/update/:email", updateSocietyByEmail);
router.get("/", getSociety);
router.put("/update/:id", updateSocietyById);
router.post("/logout", logout);

export default router;
