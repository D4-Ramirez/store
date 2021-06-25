const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost/store-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB connected"))
  .catch((err) => console.error(err));

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use(require("./routes/products"));

//Static files
app.use(express.static(__dirname + "/public"));

//Server is listening
app.listen(app.get("port"), () => {
  console.log("Running on port", app.get("port"));
});
