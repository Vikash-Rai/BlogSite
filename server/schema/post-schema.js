import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  createDate: {
    type: Date,
  },
});

const post = mongoose.model("post", PostSchema);

export default post;
