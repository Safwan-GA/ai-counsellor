// models/Stage.js
import mongoose from "mongoose";

const stageSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    currentStage: {
      type: String,
      enum: ["Onboarding", "Shortlisting", "Preparing Applications", "Submitted"],
      default: "Onboarding",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Stage", stageSchema);
