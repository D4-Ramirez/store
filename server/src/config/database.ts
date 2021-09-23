import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/store-db")
  .then((db) => console.log("🟢 Database connected"))
  .catch((err) => console.error("🔴", err));
