const mongoose = require("mongoose")

const LocationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Location", LocationSchema);