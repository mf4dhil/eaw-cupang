import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getProductImg } from "../controller/Img.controller.ts";
// import { AppState } from "../Response.ts";


// const route = new Router<AppState>();
const route = new Router();

route
  .get("/api/product/img/:name", getProductImg)

export default route;
