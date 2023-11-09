// deno-lint-ignore-file
import { verify } from "https://deno.land/x/djwt@v3.0.0/mod.ts";
import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { fresponse, prisma } from "../Response.ts";

// deno-lint-ignore no-explicit-any
export const authorized = async (ctx: Context, next: any) => {
  try {

    const token = ctx.state.session.get("userId")

    console.log(token)
    if (!token) {
      return fresponse(401, null, "acc tidak terautentikasi", ctx.response);
    }

    // const payload = await verify(token, key);

    const payload = await prisma.user.findUnique({
      where: {
        id: token
      },
      select: {
            id: true,
            nama: true,
            username: true,
            email: true,
            role: true
          }
    })

    // console.log(payload)

    if(!payload) return fresponse(401, null, "tidak terautentikasi", ctx.response)


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
    const userId = await ctx.state.session.get("userId")
    const cek = await prisma.user.findUnique({
      where: {
        id: userId
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

export const me = async (ctx: Context, next:any) => {
  try {
    const ses = ctx.state.session.get("userId")
    if (!ses) {
      return fresponse(401, null, "tidak terautentikasi", ctx.response);
    }
    const cek = await prisma.user.findUnique({
      where: {
        id: ses
      },
      select: {
        id: true,
        nama: true,
        username: true,
        email: true,
        role: true
      }
    });

    if(!cek) return fresponse(401, null, "anda belum login", ctx.response)

    fresponse(200, cek, "user ditemukan", ctx.response)

  } catch (error) {
    fresponse(500, null, error.message, ctx.response)
  }
}