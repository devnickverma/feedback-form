const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

const Feedback = mongoose.model("Feedback", new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}));

app.post("/feedback", async (req, res) => {
  const { name, email, message } = req.body;
  const feedback = new Feedback({ name, email, message });
  await feedback.save();
  res.send({ success: true });
});

app.get("/feedback", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
