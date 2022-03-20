import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const Product = new Schema(
  {
    name: String,
    price: Number,
    description: String,
  },
  {
    versionKey: false,
  }
);

export default model("Product", Product);
