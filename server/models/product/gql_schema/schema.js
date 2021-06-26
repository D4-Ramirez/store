import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type Query {
        products: [Product]
    }

    type Product {
        _id: ID
        type: String
        name: String
        size: Int
    }
    type Mutation {
        createProduct(input: ProductInput): Product
        deleteProduct(_id: ID): Product
        updateProduct(_id: ID, input: ProductInput): Product
    }
    
    input ProductInput {
        type: String!
        name: String!
        size: Int!
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
