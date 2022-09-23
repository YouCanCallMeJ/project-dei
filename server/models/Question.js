const mongoose = require('mongoose')

const QuestionsSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  }
});

const QuestionModel = mongoose.model("questions", QuestionsSchema);
module.exports = QuestionModel;