import mongoose, { Schema } from "mongoose";

const Product = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", Product);
