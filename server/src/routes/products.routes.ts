import express, { Router } from "express";
import {
  readProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller";

const router: Router = express();

router.get("/products", readProducts);
router.post("/products", saveProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

module.exports = router;
