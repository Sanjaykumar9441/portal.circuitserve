const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    name:         { type: String, required: true },
    role:         { type: String, required: true },
    tasks:        { type: String, required: true },
    status:       { type: String, enum: ["Completed", "In Progress"], required: true },
    hoursWorked:  { type: Number, min: 0, max: 24, required: true },
    tomorrowPlan: { type: String },
    documentUrl:  { type: String },
    submittedAt:  { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Progress", progressSchema);