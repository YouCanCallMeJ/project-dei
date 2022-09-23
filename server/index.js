const express = require('express')
const app = express()
const mongoose = require('mongoose')
const QuestionModel = require('./models/Question')

mongoose.connect("mongodb+srv://qwerta1234:qwerta1234@cluster0.dvd29dc.mongodb.net/awareness_questions?retryWrites=true&w=majority")

app.get("/getQuestions", (req, res) => {
  QuestionModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// app.post();

app.listen(3001, () => {
  console.log("Server is running!");
});

