import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
  name: String,
});

export default model("Product", Product);
