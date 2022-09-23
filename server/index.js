const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://qwerta1234:qwerta1234@cluster0.dvd29dc.mongodb.net/awareness_questions?retryWrites=true&w=majority")

app.listen(3001, () => {
  console.log("Server is running!");
});

