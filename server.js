const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Make connection with db
const connectionToDb = async () => {
  await mongoose
    .connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
      console.error(err);
    });
};
connectionToDb();

app.get("/", (req, res) => {
  return res.send("Welcome to the INTERINDIVIDUAL DICTIONARY Application");
});

const wordRoutes = require("./routes/word.js");
const learnerRoutes = require("./routes/learner.js");

app.use("/words", wordRoutes);
app.use("/learner", learnerRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
