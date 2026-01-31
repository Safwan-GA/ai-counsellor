import express from "express";
import { getProfile, upsertProfile } from "../controllers/profile.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Get logged-in user's profile
router.get("/me", authMiddleware, getProfile);

// Create or update profile (onboarding)
router.post("/", authMiddleware, upsertProfile);

export default router;
