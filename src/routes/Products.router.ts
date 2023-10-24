import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { authorized, isAdmin } from "../middleware/isAuthorized.middleware.ts";
import { creteProduct, deleteProduct, getProduct, getProductById, updateProduct } from "../controller/Product.controller.ts";


const route = new Router();

route
  .get("/api/products", authorized, getProduct)
  .get("/api/products/:id", authorized, getProductById)
  .post("/api/products", authorized, isAdmin, creteProduct)
  .patch("/api/products/:id", authorized, isAdmin, updateProduct)
  .delete("/api/products/:id", authorized, isAdmin, deleteProduct)
  

export default route;
