const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = new Schema({
  type: String,
  name: String,
  size: Number,
});

module.exports = mongoose.model("Product", Product);
