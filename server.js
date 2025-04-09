const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://devnickverma:eeET6ChJ%408NJGKy@users.l3z6jyj.mongodb.net/", {
  serverSelectionTimeoutMS: 5000, // Optional: helps avoid hanging forever on connection issues
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));


// Define the Feedback model
const Feedback = mongoose.model("Feedback", new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}));

// POST route to save feedback
app.post("/feedback", async (req, res) => {
  const { name, email, message } = req.body;
  const feedback = new Feedback({ name, email, message });
  await feedback.save();
  res.send({ success: true });
});

// GET route to retrieve all feedbacks
app.get("/feedback", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

// Start the server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
