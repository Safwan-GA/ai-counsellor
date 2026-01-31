import express from 'express';
import { createTask, updateTask, getTasks } from '../controllers/task.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getTasks);  
router.post('/', authMiddleware, createTask);
router.patch('/:taskId', authMiddleware, updateTask);

export default router;
