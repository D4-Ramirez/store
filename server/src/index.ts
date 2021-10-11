import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

const app: Application = express();
require("./config/database");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/", require("./routes/products.routes"));

app.set("port", process.env.port || "4000");
app.listen(app.get("port"), () => {
  console.log("💻 Server running on port:", app.get("port"));
});
