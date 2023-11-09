import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { authorized } from "../middleware/isAuthorized.middleware.ts";
import { getCart, updateItemCart, createCart, deleteItemCart } from "../controller/Cart.controller.ts"; 
// import { AppState } from "../Response.ts";


// const route = new Router<AppState>();
const route = new Router();

route
  .get("/api/carts", authorized, getCart)
  .post("/api/carts", authorized, createCart)
  .patch("/api/carts", authorized, updateItemCart)
  .delete("/api/carts", authorized, deleteItemCart)

export default route