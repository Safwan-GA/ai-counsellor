import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  // Academic
  educationLevel: String,
  major: String,
  graduationYear: String,
  gpa: String,
  // Study Goals
  targetDegree: String,
  field: String,
  intake: String,
  countries: [String],
  // Budget & Readiness
  budgetRange: String,
  fundingPlan: String,
  englishTestStatus: String,
  greGmatStatus: String,
  sopStatus: String,
  profileComplete: { type: Boolean, default: false },
  lockedUniversity: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Profile", profileSchema);
