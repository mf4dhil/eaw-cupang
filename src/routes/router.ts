import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

// import { AppState } from "../Response.ts";


// const route = new Router<AppState>();
const route = new Router();
route
  .get('/', (ctx) => {
    ctx.response.body = {"msg": "Welcome to my API😊"}
  });

export default route
