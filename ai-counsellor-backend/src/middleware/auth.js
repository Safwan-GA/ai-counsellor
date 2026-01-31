import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/jwt.js';
import BlacklistedToken from '../models/BlacklistedToken.js';

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });

  // Check blacklist
  const blacklisted = await BlacklistedToken.findOne({ token });
  if (blacklisted) return res.status(401).json({ message: 'Token is blacklisted' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
