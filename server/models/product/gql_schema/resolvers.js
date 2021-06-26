import Product from "../Product";

export const resolvers = {
  Query: {
    async products() {
      return await Product.find();
    },
  },
  Mutation: {
    async createProduct(_, { input }) {
      const newProduct = new Product(input);
      await newProduct.save();
      return newProduct;
    },
    async deleteProduct(_, { _id }) {
      return await Product.findByIdAndDelete(_id);
    },
    async updateProduct(_, { _id }, { input }) {
      return await Product.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
