const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema(
  {
    word: { type: String, required: true },
    meaning: { type: String, required: true },
    learnername: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Word", wordSchema);
