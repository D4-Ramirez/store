import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/store-database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">> DB connected");
  } catch (err) {
    console.log(">> Something went wrong");
    console.log(err);
  }
}
