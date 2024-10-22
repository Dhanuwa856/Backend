import experss from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controller/productController";

const produtRouter = experss.Router();

produtRouter.get("/products", getProducts);
produtRouter.get("/products/:id", getProductById);
produtRouter.post("/products/", createProduct);

export default produtRouter;
