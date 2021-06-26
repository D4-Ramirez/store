import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import product from "./api/graphql/product/schema";
import { connect } from "./config/databaseConfig";

const app = express();
connect();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: product,
  })
);

//Server is listening
app.listen(app.get("port"), () => {
  console.log("Running on port", app.get("port"));
});
