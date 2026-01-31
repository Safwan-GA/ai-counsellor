import Profile from "../models/Profile.js";

// GET /api/profile/me
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

// POST /api/profile
export const upsertProfile = async (req, res) => {
  try {
    const data = req.body;

    const profile = await Profile.findOneAndUpdate(
      { userId: req.user._id },
      { ...data },
      { upsert: true, new: true }
    );

    res.status(201).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save profile" });
  }
};
