import Profile from "../models/Profile.js";
import Stage from "../models/Stage.js";
import Task from "../models/Task.js";

export const getDashboard = async (req, res) => {
  try {
    const userId = req.user._id;

    const profile = await Profile.findOne({ userId });
    const stageDoc = await Stage.findOne({ user: userId });
    const tasks = await Task.find({ user: userId });

    res.json({
      profile: profile
        ? {
            name: req.user.name,
            targetCountry: profile.countries?.[0] || "Not set",
            intake: profile.intake || "Not set",
            profileComplete: profile.profileComplete,
          }
        : null,
      stage: stageDoc?.currentStage || "Exploring",
      tasks,
    });
  } catch (error) {
    console.error("Dashboard fetch error:", error);
    res.status(500).json({ message: "Failed to load dashboard" });
  }
};
