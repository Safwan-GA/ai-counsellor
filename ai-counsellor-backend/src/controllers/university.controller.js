import University from "../models/University.js";
import Profile from "../models/Profile.js";

export const getUniversities = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });

    if (!profile || !profile.profileComplete) {
      return res.status(403).json({ message: "Complete your profile to access universities" });
    }

    const { country, maxBudget } = req.query;
    const filter = {};

    if (country) filter.country = country;
    if (maxBudget) filter.tuition = { $lte: Number(maxBudget) };

    const universities = await University.find(filter);
    res.json(universities);
  } catch (error) {
    console.error("University fetch error:", error);
    res.status(500).json({ message: "Failed to fetch universities" });
  }
};
