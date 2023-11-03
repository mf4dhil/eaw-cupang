import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { Application }from "https://deno.land/x/oak@v11.1.0/mod.ts";

import route from './src/routes/router.ts';
import user from './src/routes/User.router.ts'
import products from './src/routes/Products.router.ts'
import category from './src/routes/Category.router.ts'
import pemesnan from './src/routes/Pesanan.router.ts'
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const envVars = await load();
const app = new Application()

app.use(oakCors())

app.use(route.routes());
app.use(route.allowedMethods())
app.use(user.routes());
app.use(user.allowedMethods())
app.use(products.routes());
app.use(products.allowedMethods())
app.use(category.routes());
app.use(category.allowedMethods())
app.use(pemesnan.routes());
app.use(pemesnan.allowedMethods())
// app.use(user.)



console.log(`Server Running att http://127.0.0.1:${envVars.PORT}`)

await app.listen({ port: parseInt(envVars.PORT) });
