import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { fresponse, prisma } from "../Response.ts";

const route = new Router()

route
  .get('/user', async (ctx) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          uuid: true,
          id: true,
          nama: true,
          username:true,
          email: true,
          role: true,
          alamat: true,
          pembelian: true
        }
      })
      fresponse(200, users, "Success", ctx.response)
    } catch (error) {
      fresponse(500, null, error.message, ctx.response)
    }
  })
  // .post('register',async ({request, response}) => {
  //   const body = request.body({type: 'json'})
  //   const result = await body.value
  //   const {
  //     nama, username, email, password, role
  //   } = result
    // const userReg = await prisma.user.create({
    //   data: {
    //     nama,
    //     username,
    //     email,
    //     password,
    //     role,
    //   }
    // })
  // })