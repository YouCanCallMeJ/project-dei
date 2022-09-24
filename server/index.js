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

app.put("/updateQuestion", async (req, res) => {
  const newQuestion = req.body.newQuestion;
  const id = req.body.id;
  
  try {
    await QuestionModel.findById(id, (err, updatedQuestion) => {
      updatedQuestion.question = newQuestion;
      updatedQuestion.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deleteQuestion/:id", async (req, res) => {
  const id = req.params.id;
  
  await QuestionModel.findByIdAndRemove(id).exec();
  res.send("delete")
});

app.listen(3001, () => {
  console.log("Server is running!");
});

