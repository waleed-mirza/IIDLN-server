const Word = require("../model/word.model");
const Learner = require("../model/learner.model");
const router = require("express").Router();

router.post("/add", async (req, res) => {
  try {
    const { word, meaning, learnername } = req.body;
    const newWord = new Word({
      word,
      meaning,
      learnername,
    });
    await newWord.save();
    return res
      .status(200)
      .json({ status: "ok", message: "Word added successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/getbylearnername", async (req, res) => {
  try {
    const { learnername } = req.query;
    const words = await Word.find({ learnername });
    return res.status(200).json({
      status: "ok",
      result: words,
      message: "Word added successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
