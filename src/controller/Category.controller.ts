// deno-lint-ignore-file no-explicit-any

import { fresponse, prisma } from "../Response.ts";

export const getCategory = async ({ response }: { response: any }) => {
  try {
    const category = await prisma.category.findMany();
    if (!category) {
      return fresponse(500, null, "internal server eror", response);
    }
    fresponse(200, category, "ok", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};
export const getCategoryById = async (
  { params, response }: { params: any; response: any },
) => {
  const id: string = params.id
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (!category) {
      return fresponse(500, null, "internal server eror", response);
    }
    fresponse(200, category, "ok", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};
export const createCategory = async (
  { request, response }: { request: any; response: any },
) => {
  const body = request.body({type: "json"})
  const result = await body.value
  const { 
    nama
  } = result

  try {
    const category = await prisma.category.create({
      data: {
        nama
      }
    })
    fresponse(201, category, "Category created successfully!", response)
  } catch (error) {
    fresponse(500, null, error.message, response)
  }
};
export const deleteCategory = async (
  { params, response }: { params: any; response: any },
) => {
  const id: string = params.id
  try {
    await prisma.category.delete({
      where: {
        id: Number(id)
      }
    })
    fresponse(201, null, "Berhasil Menghapus data!", response)
  } catch (error) {
    fresponse(500, null, error.message, response)
  }
};
