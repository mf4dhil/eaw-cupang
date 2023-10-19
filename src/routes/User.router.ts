import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { fresponse, prisma } from "../Response.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.3.0/mod.ts";

const route = new Router();

route
  .get("/user", async (ctx) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          nama: true,
          username: true,
          email: true,
          role: true,
          alamat: true,
          pembelian: true,
        },
      });
      fresponse(200, users, "Success", ctx.response);
    } catch (error) {
      fresponse(500, null, error.message, ctx.response);
    }
  })
  .post("/register", async ({ request, response }) => {
    const body = request.body({ type: "json" });
    const result = await body.value;
    const {
      nama,
      username,
      email,
      password,
      role,
      alamat,
      pembelian,
    } = result;
    const hash = await bcrypt.hash(password);
    try {
      const userDat = await prisma.user.create({
        data: {
          nama,
          username,
          email,
          password: hash,
          role,
          alamat: {
            create: alamat,
          },
          pembelian: {
            create: pembelian,
          },
        },
      });
      fresponse(201, userDat, "data suskses ditambahkan", response);
    } catch (error) {
      fresponse(500, null, error.message, response);
    }
  })
  .patch("/user/:id", async (ctx) => {
    const id: string = ctx.params.id
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(!user) return fresponse(404, null, "Film tidak ditemukan", ctx.response)
      const body = ctx.request.body({type: 'json'})
      const result = await body.value
      const { nama, username, email } = result
      const updateUser = prisma.user.update({
        where: {
          id: Number(id)
        }, 
        data: {
          nama,
          username,
          email
        }
      })
      fresponse(200, updateUser, "Berhasil di Update", ctx.response)
    } catch (error) {
      fresponse(500, null, error.message, ctx.response)
    }
  })

export default route;
