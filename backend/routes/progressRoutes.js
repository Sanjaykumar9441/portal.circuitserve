const express = require("express");
const Progress = require("../models/Progress");
const auth = require("../middleware/auth");

const router = express.Router();
const upload = require("../config/multer");

// POST /api/progress
router.post(
  "/",
  auth,
  upload.single("document"),
  async (req, res) => {
    try {
      const {
        name,
        role,
        tasks,
        status,
        hoursWorked,
        tomorrowPlan,
      } = req.body;

      const documentUrl = req.file
        ? req.file.path
        : null;

      const progress = await Progress.create({
        name,
        role,
        tasks,
        status,
        hoursWorked: Number(hoursWorked),
        tomorrowPlan,
        documentUrl,
      });

      res.status(201).json({
        success: true,
        progress,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// GET ALL REPORTS
router.get("/", auth, async (req, res) => {
  try {
    const reports = await Progress.find().sort({
      submittedAt: -1,
    });

    res.json(reports);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET SINGLE REPORT
router.get("/:id", auth, async (req, res) => {
  try {
    const report = await Progress.findById(
      req.params.id
    );

    if (!report) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json(report);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;