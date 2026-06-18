const express = require("express");
const User = require("../models/User");
const Progress = require("../models/Progress");

const router = express.Router();

/* Dashboard Stats */
router.get("/stats", async (req, res) => {
  try {
    const totalMembers = await User.countDocuments();

    const totalReports = await Progress.countDocuments();

    const completedReports =
      await Progress.countDocuments({
        status: "Completed",
      });

    const inProgressReports =
      await Progress.countDocuments({
        status: "In Progress",
      });

    const recentReports = await Progress.find()
      .sort({ submittedAt: -1 })
      .limit(5);

    res.json({
      totalMembers,
      totalReports,
      completedReports,
      inProgressReports,
      recentReports,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* Team Status */
router.get("/team-status", async (req, res) => {
  try {
    const users = await User.find().select("-password");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reports = await Progress.find({
      submittedAt: {
        $gte: today,
      },
    });

    const team = users.map((user) => {
      const submitted = reports.find(
        (report) => report.name === user.name
      );

      return {
        ...user.toObject(),
        submittedToday: !!submitted,
      };
    });

    res.json(team);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;