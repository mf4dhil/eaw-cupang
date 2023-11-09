// deno-lint-ignore-file no-explicit-any

import { fresponse, prisma } from "../Response.ts";

export const getCart = async (
  { state, response }: { state: any; response: any },
) => {
  try {
    const userId = await state.session.get("userId")
    const carts = await prisma.cart.findMany({
      where: {
        userId: userId
      },
      include: {
        _count: true,
        items: true,
        user: {
          select: {
            id: true,
            username: true,
            nama: true,
          }
        }
      }
    });

    fresponse(200, carts, "ok", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const createCart = async (
  { request, response, state }: { request: any; response: any; state:any; },
) => {

  const userId = await state.user.payload
  const body = request.body({type: "json"})
  const result = await body.value
  const { productId, quantity } = result;

  try {
    const findCart = await prisma.cart.findUnique({
      where: {
        userId: userId.id
      }
    })

    if(!findCart) {
      const createCart = await prisma.cart.create({
        data: {
          userId: userId.id,
          items: {
            create: {
              productId: productId,
              quantity
            }
          }
        }
      })
      if(!createCart) return fresponse(400, null, "Gagal membuat keranjang", response)
  
      return fresponse(201, createCart, "ok", response)
    }

    const createCart = await prisma.cartItem.create({
      data: {
        quantity,
        productId,
        cartId: findCart.id
      }
    })
    if(!createCart) return fresponse(400, null, "Gagal membuat keranjang", response)

    fresponse(201, createCart, "ok", response)
    
  } catch (error) {
    fresponse(500, null, error.meesage, response)
  }

};

export const updateItemCart = async (
  { request, response, state }: { request: any; response: any; state:any; },
) => {
  
  const userId = await state.user.payload
  const body = request.body({type: "json"})
  const result = await body.value
  const { productId, quantity } = result;

  try {
    const findCart = await prisma.cart.findUnique({
      where: {
        userId: userId.id
      }
    })

    if(!findCart) return fresponse(404, null, "Cart tidak ditemukan", response)

    const findItem = await prisma.cartItem.findUnique({
      where: {
        id: productId
      }
    })

    if(!findItem) return fresponse(404, null, "Cart item tidak ditemukan", response)
    
      const updateCart = await prisma.cart.update({
        where: {
          userId: userId.id
        },
        data: {
          items: {
            update: {
              where: {
                id: productId
              },
              data: {
                quantity
              }
            }
          }
        }
      })

      if(!updateCart) return fresponse(400, null, "Gagal mengupdate keranjang", response)
  
      fresponse(201, updateCart, "ok", response)
    
    
  } catch (error) {
    fresponse(500, null, error.meesage, response)
  }

};

export const deleteItemCart = async (
  { request, response, state }: { request: any; response: any; state:any; },
) => {
  const userId = await state.user.payload

  const body = request.body({type: "json"})
  const result = await body.value
  const { productId } = result;

  try {
    const findCart = await prisma.cart.findUnique({
      where: {
        userId: userId.id
      }
    })

    if(!findCart) return fresponse(404, null, "Cart tidak ditemukan", response)

    const delCart = await prisma.cart.update({
      where: {
        userId: userId.id
      },
      data: {
        items: {
          delete: {
            id: productId
          }
        }
      }
    })
    if(!delCart) return fresponse(400, null, "Gagal mengupdate keranjang", response)

    fresponse(201, delCart, "ok", response)

  } catch (error) {
    fresponse(500, null, error.meesage, response)
  }

};
