import { gql } from "apollo-server";

export const typeDefs = gql`
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

// // export const product = makeExecutableSchema({
// //   typeDefs: typeDefs,
// //   resolvers: resolvers,
// // });
