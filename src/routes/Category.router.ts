import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { authorized, isAdmin } from "../middleware/isAuthorized.middleware.ts";
import { createCategory, deleteCategory, getCategory, getCategoryById } from "../controller/Category.controller.ts";

const route = new Router();

route
  .get("/api/category", authorized, getCategory)
  .get("/api/category/:id", authorized, getCategoryById)
  .post("/api/category", authorized, isAdmin, createCategory)
  .delete("/api/category/:id", authorized, isAdmin, deleteCategory)
  

export default route;
