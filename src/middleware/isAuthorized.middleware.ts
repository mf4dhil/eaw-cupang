import { verify } from "https://deno.land/x/djwt@v3.0.0/mod.ts";
import { key } from "../utils/utils.apiKey.ts";
import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { fresponse } from "../Response.ts";

// deno-lint-ignore no-explicit-any
export const authorized = async (ctx: Context, next: any) => {
  try {
    // const headers: Headers = ctx.request.headers
    // const authorized = headers.get('Authorization')
    const token = await ctx.cookies.get("token")
    if (!token) return ctx.response.body = "Valid Jwt" ; ctx.response.body = "Invalid Jwt";
    
    const payload = await verify( token, key);
    // if(!authorized) return fresponse(401, null, "tidak ter autentikasi", ctx.response)
    // const jwt = authorized.split(' ')[1]

    // if(!jwt) return fresponse(401, null, "tidak ter autentikasii", ctx.response)

    // const payload = await verify(jwt,key)

    if(!payload) return new Error("!payload")

    await next()

  } catch (error) {
    fresponse(401, null, `Anda tidak berwenang untuk mengakses rute ini Message: ${error.message}`, ctx.response)
  }
}
