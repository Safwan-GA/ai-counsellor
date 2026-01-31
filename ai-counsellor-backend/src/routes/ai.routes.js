import express from 'express';
import { aiChat } from '../controllers/ai.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/chat', authMiddleware, aiChat);

export default router;
