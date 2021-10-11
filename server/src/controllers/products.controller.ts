import { Request, Response } from "express";
import Product from "../models/products.model";

export async function readProducts(req: Request, res: Response) {
  const products = await Product.find();
  res.json(products);
}

export async function saveProduct(req: Request, res: Response) {
  const product = new Product(req.body);
  await product.save();
  res.json("👍 Saved");
}

export async function deleteProduct(req: Request, res: Response) {
  await Product.findByIdAndDelete(req.params.id);
  res.json("👍 Deleted");
}

export async function updateProduct(req: Request, res: Response) {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json("👍 Updated");
}
