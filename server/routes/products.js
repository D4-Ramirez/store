const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/products", async (req, res) => {
  const product = await Product.find();
  res.json(product);
});

router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  console.log(product);
  res.json({
    status: "Saved",
  });
});

router.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: "Updated",
  });
});

router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({
    status: "Deleted",
  });
});

module.exports = router;
