import express from 'express';
import { shortlistUniversity, lockUniversity } from '../controllers/shortlist.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/shortlist/:universityId', authMiddleware, shortlistUniversity);
router.post('/lock/:universityId', authMiddleware, lockUniversity);

export default router;
