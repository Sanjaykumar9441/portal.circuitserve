const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  name: String,
  role: String,
  tasks: String,
  status: String,
  hoursWorked: Number,
  tomorrowPlan: String,
  documentUrl: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Progress", progressSchema);