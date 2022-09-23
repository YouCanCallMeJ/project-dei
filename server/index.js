const express = require('express')
const app = express()
const mongoose = require('mongoose')
const QuestionModel = require('./models/Question')

const cors = require('cors')

app.use(express.json());
app.use(cors());

const dotenv = require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);

app.get("/getQuestions", (req, res) => {
  QuestionModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createQuestion", async (req, res) => {
  const question = req.body;
  const newQuestion = new QuestionModel(question);
  await newQuestion.save();

  res.json(question)
});

app.listen(3001, () => {
  console.log("Server is running!");
});

