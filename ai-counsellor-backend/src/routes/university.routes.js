import express from 'express';
import { getUniversities } from '../controllers/university.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getUniversities);

export default router;
