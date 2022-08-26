const mongoose = require("mongoose");

const learnerSchema = new mongoose.Schema(
  {
    learnername: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Learner", learnerSchema);
