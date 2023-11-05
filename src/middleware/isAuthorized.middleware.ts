// deno-lint-ignore-file
import { verify } from "https://deno.land/x/djwt@v3.0.0/mod.ts";
import { key } from "../utils/utils.apiKey.ts";
import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { fresponse, prisma } from "../Response.ts";

// deno-lint-ignore no-explicit-any
export const authorized = async (ctx: Context, next: any) => {
  try {
    // const headers: Headers = ctx.request.headers
    // const authorized = headers.get('Authorization')
    const token = await ctx.cookies.get("token");
    if (!token) {
      return fresponse(401, null, "tidak terautentikasi", ctx.response);
    }

    const payload = await verify(token, key);
    // if(!authorized) return fresponse(401, null, "tidak ter autentikasi", ctx.response)
    // const jwt = authorized.split(' ')[1]

    // if(!jwt) return fresponse(401, null, "tidak ter autentikasii", ctx.response)

    // const payload = await verify(jwt,key)
    if (!payload) return new Error("!payload");
    ctx.state.user = payload;

    await next();
  } catch (error) {
    fresponse(
      401,
      null,
      `Anda tidak berwenang untuk mengakses rute ini Message: ${error.message}`,
      ctx.response,
    );
  }
};

// deno-lint-ignore no-explicit-any
export const isAdmin = async (ctx: Context, next: any) => {
  try {
    const userId = await ctx.state.user.payload;
    const cek = await prisma.user.findUnique({
      where: {
        id: userId.id,
      },
    });

    if (!cek || cek.role !== "admin") {
      return fresponse(401, null, "tidak ter autentikasi", ctx.response);
    }

    await next();
  } catch (error) {
    fresponse(500, null, `bukan admin:${error.message}`, ctx.response);
  }
};

export const getProductByCategory = async (ctx: Context, next: any) => {
  const params = ctx.request.url.searchParams;
  const ctgr = params.get("category");
  if(!ctgr) return await next()
  try {
    const category = await prisma.category.findMany({
      where: {
        nama: ctgr,
      },
      include: {
        product: {
          include : {
            category: true
          }
        },
        _count: true,
      },
    });
    if (!category) {
      return fresponse(500, null, "internal server eror", ctx.response);
    }

    fresponse(200, category, `Get data by ${ctgr}`, ctx.response);
  } catch (error) {
    fresponse(500, null, error.message, ctx.response);
  }
};
