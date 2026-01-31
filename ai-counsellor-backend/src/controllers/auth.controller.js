import User from '../models/User.js';
import Profile from '../models/Profile.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/jwt.js';
import Stage from '../models/Stage.js';


export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, passwordHash: hash });

  // Create default stage if needed
  await Stage.create({ userId: user._id });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      profileComplete: user.profileComplete || false, // initially false
    },
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      profileComplete: user.profileComplete || false,
    },
  });
};



export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select('-passwordHash');
  if (!user) return res.status(404).json({ message: 'User not found' });

  const profile = await Profile.findOne({ user: user._id });

  res.json({
    user: {
      ...user.toObject(),
      profileComplete: profile?.profileComplete || false,
    },
  });
};


export const logout = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(400).json({ message: 'No token provided' });

  // Decode token to get expiry
  const decoded = jwt.decode(token);
  const expiresAt = new Date(decoded.exp * 1000); // convert to ms

  await BlacklistedToken.create({ token, expiresAt });
  res.json({ message: 'Logged out successfully' });
};