import { Request, Response } from "express";
import Product from "../models/products.model";

export async function createProduct(req: Request, res: Response) {
  const product = new Product(req.body);
  await product.save();
  res.json("👍 Saved");
}

export async function getAllProducts(req: Request, res: Response) {
  const products = await Product.find();
  res.json(products);
}

export async function findProductById(req: Request, res: Response) {
  const product = await Product.findById(req.params.id);
  res.json(product);
}

export async function updateProduct(req: Request, res: Response) {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json("👍 Updated");
}

export async function deleteProduct(req: Request, res: Response) {
  await Product.findByIdAndDelete(req.params.id);
  res.json("👍 Deleted");
}
