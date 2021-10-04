import express, { Router, Request, Response } from "express";
import Product from "../models/products.model"

const router: Router = express();

router.get("/products", async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/products", async (req: Request, res: Response) => {
  const product = new Product(req.body);
  await product.save();
  res.json("👍 Done");
});

router.delete("/products/:id", async (req: Request, res: Response) => {
  await Product.findByIdAndDelete(req.params.id)
  res.json("👍 Deleted");  
})

router.put("/products/:id", async (req: Request, res: Response) =>{
  await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(req.body);
})

module.exports = router;
