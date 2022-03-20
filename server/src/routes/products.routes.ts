import express, { Router } from "express";
import {
  createProduct,
  updateProduct,
  readProducts,
  deleteProduct,
} from "../controllers/products.controller";

const router: Router = express();

router.post("/products", createProduct);
router.get("/products", readProducts);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
