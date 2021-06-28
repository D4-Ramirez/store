import { connect } from "./config/databaseConfig";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./api/graphql/product/schema";
import { resolvers } from "./api/graphql/product/resolvers";

connect();

//Server is listening
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
