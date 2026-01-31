import express from 'express';
import { signup, login, getMe, logout } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', authMiddleware, getMe);      // Get logged-in user
router.post('/logout', authMiddleware, logout);
export default router;