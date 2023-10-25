import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { authorized } from "../middleware/isAuthorized.middleware.ts";
import { getPesanan, checkout } from "../controller/Pesanan.controller.ts";


const route = new Router();

route
  .get("/api/pesanan", authorized, getPesanan)
  .post("/api/pesanan", authorized, checkout)

export default route;
