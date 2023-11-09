import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import route from "./src/routes/router.ts";
import user from "./src/routes/User.router.ts";
import products from "./src/routes/Products.router.ts";
import category from "./src/routes/Category.router.ts";
import pemesnan from "./src/routes/Pesanan.router.ts";
import carts from "./src/routes/Cart.router.ts";
import img from "./src/routes/Img.router.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { CookieStore, Session } from "https://deno.land/x/oak_sessions/mod.ts";
// import { PrismaSessionStore } from 'npm:@quixo3/prisma-session-store';

// import {  CookieStore, Session } from "https://deno.land/x/oak_sessions@v4.1.11/mod.ts";
// import { AppState } from "./src/Response.ts";
// import { PrismaClient } from "./generated/client/index.js";

const envVars = await load();
const app = new Application();
// const store = new CookieStore(envVars.SECRET_KEY)
// app.use(Session.initMiddleware(store))

// const store = new PrismaSessionStore(
//   new PrismaClient(),
//   {
const store = new CookieStore("very-secret-key");
//     checkPeriod: 2 * 60 * 1000,  //ms
//     dbRecordIdIsSessionId: true,
//     dbRecordIdFunction: undefined,
//   }
// )
// const sessionOptions: SessionOptions = {
//   store: store,

// }

app.use(Session.initMiddleware(store));

app.use(oakCors({
  "origin": "http://localhost:5173",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200,
  "credentials": true,
}));

app.use(route.routes());
app.use(route.allowedMethods());
app.use(user.routes());
app.use(user.allowedMethods());
app.use(products.routes());
app.use(products.allowedMethods());
app.use(category.routes());
app.use(category.allowedMethods());
app.use(pemesnan.routes());
app.use(pemesnan.allowedMethods());
app.use(carts.routes());
app.use(carts.allowedMethods());
app.use(img.routes());
app.use(img.allowedMethods());

console.log(`Server Running att http://127.0.0.1:${envVars.PORT}`);

await app.listen({ port: parseInt(envVars.PORT) });
