// models/Task.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    university: { type: mongoose.Schema.Types.ObjectId, ref: "University" },
    title: String,
    description: String,
    completed: { type: Boolean, default: false },
    dueDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
