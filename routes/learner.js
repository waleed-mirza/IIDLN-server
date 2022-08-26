const Word = require("../model/word.model");
const Learner = require("../model/learner.model");
const router = require("express").Router();

router.post("/addlearner", async (req, res) => {
  try {
    const { learnername } = req.body;
    const newLearner = new Learner({
      learnername,
    });
    await newLearner.save();
    return res
      .status(200)
      .json({ status: "ok", message: "Learner added successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/getlearners", async (req, res) => {
  try {
    const learnersData = await Learner.find();
    return res.status(200).json({
      status: "ok",
      result: learnersData,
      message: "Learner added successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
