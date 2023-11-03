// deno-lint-ignore-file no-explicit-any

import { fresponse, prisma } from "../Response.ts";

export const getCart = async (
  { state, response }: { state: any; response: any },
) => {
  try {
    const userId = await state.user.payload;
    const carts = await prisma.cart.findMany({
      where: userId.id,
    });

    fresponse(200, carts, "ok", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const getCartById = async (
  { request, response }: { request: any; response: any },
) => {

  const 

};

export const createCart = async (
  { request, response }: { request: any; response: any },
) => {
};

export const updateCart = async (
  { request, response }: { request: any; response: any },
) => {
};

export const deleteCart = async (
  { request, response }: { request: any; response: any },
) => {
};
