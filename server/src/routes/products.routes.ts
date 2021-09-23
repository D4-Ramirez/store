import express, { Router, Request, Response } from "express";
import Product from "../models/products.model"

const router: Router = express();

router.get("/", async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req: Request, res: Response) => {
  const product = new Product(req.body);
  await product.save();
  console.log(product);
  res.json("👍 Done");
});

module.exports = router;
