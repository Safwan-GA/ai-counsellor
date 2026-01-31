import User from '../models/User.js';
import Profile from '../models/Profile.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/jwt.js';
import Stage from '../models/Stage.js';


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 2️⃣ Hash password
    const hash = await bcrypt.hash(password, 10);

    // 3️⃣ Create user
    const user = await User.create({ name, email, passwordHash: hash });
    if (!user || !user._id) {
      return res.status(500).json({ message: "Failed to create user" });
    }

    // 4️⃣ Create default stage if not exists
    const existingStage = await Stage.findOne({ userId: user._id });
    if (!existingStage) {
      await Stage.create({ userId: user._id, currentStage: "Onboarding" });
    }

    // 5️⃣ Create empty profile with profileComplete = false
    const existingProfile = await Profile.findOne({ userId: user._id });
    if (!existingProfile) {
      await Profile.create({ userId: user._id, profileComplete: false });
    }

    // 6️⃣ Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    // 7️⃣ Return response
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileComplete: false, // derived from profile
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: error.message });
  }
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