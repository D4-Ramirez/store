import express, { Router } from "express";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  deleteProduct,
} from "../controllers/products.controller";

const router: Router = express();

router.post("/product/create", createProduct);
router.get("/product/all", getAllProducts);
router.get("/product/:id", findProductById);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
