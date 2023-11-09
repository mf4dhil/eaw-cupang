import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { authorized, isAdmin } from "../middleware/isAuthorized.middleware.ts";
import { getPesanan, checkout, updatePesanan } from "../controller/Pesanan.controller.ts";
import { getCategoryById } from "../controller/Category.controller.ts";
// import { AppState } from "../Response.ts";


// const route = new Router<AppState>();
const route = new Router();

route
  .get("/api/pesanan", authorized, getPesanan)
  .get("/api/pesanan/:id", authorized, getCategoryById)
  .post("/api/pesanan", authorized, checkout)
  .patch("/api/pesanan/:id", authorized, isAdmin, updatePesanan)

export default route;
