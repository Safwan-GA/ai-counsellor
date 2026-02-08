import Profile from "../models/Profile.js";

// GET /api/profile/me
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });

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
      { userId: req.user.id },
      { ...data, userId: req.user.id },
      { upsert: true, new: true, runValidators: true }
    );

    res.status(200).json(profile);
  } catch (error) {
    console.error("Profile save error:", error);
    res.status(500).json({ message: "Failed to save profile" });
  }
};
