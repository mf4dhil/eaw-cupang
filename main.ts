import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { Application }from "https://deno.land/x/oak@v11.1.0/mod.ts";

import route from './src/routes/router.ts';

const envVars = await load();
const app = new Application()

app.use(route.routes());
app.use(route.allowedMethods())



console.log(`Server Running att http://127.0.0.1:${envVars.PORT}`)

await app.listen({ port: parseInt(envVars.PORT) });
