const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const progressRoutes = require("./routes/progressRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const memberRoutes = require("./routes/memberRoutes");
const path = require("path");

const app = express();

// FIX 1: Restrict CORS to your Vercel frontend only
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

// FIX 2: Serve uploaded files so they can be downloaded


app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/members", memberRoutes);

app.get("/", (req, res) => {
  res.send("CircuitServe Backend Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server Running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });