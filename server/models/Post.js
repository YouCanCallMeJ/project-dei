const mongoose = require('mongoose')

const PostsSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true
  }
});

const PostModel = mongoose.model("posts", PostsSchema);
module.exports = PostModel;