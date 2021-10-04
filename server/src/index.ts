import express, { Application } from "express";

const app: Application = express();
require("./config/database");

app.set("port", process.env.port || "4000");

app.use(express.json());
app.use("/", require("./routes/products.routes"));

app.listen(app.get("port"), () => {
  console.log("💻 Server running on port:", app.get("port"));
});
