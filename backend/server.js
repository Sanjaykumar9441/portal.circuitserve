const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const progressRoutes = require("./routes/progressRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => {
  res.send("CircuitServe Backend Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(5000, () => {
      console.log("🚀 Server Running on Port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });