// deno-lint-ignore-file no-explicit-any
import { fresponse, prisma } from "../Response.ts";

export const getProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const page = request.url.searchParams.get("page");
  const pageSize = Number(request.url.searchParams.get("pageSize") || "12");

  const ofsett = page ? (Number(page) - 1) * pageSize : 0;

  try {
    const products = await prisma.product.findMany({
      take: pageSize,
      skip: ofsett,
    });

    const totalCount = await prisma.product.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    const metadata = {
      current: page || "1",
      prev: Number(page) > 1 ? String(Number(page) - 1) : undefined,
      next: Number(page) < totalPages ? String(Number(page) + 1) : undefined,
    };

    if (!products) return fresponse(404, null, "product tidak ada", response);

    fresponse(200, products, "Ok", response, metadata);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};
export const getProductById = async (
  { response, params }: { request: any; response: any; params: any },
) => {
  const paramsId: string = params.id;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(paramsId),
      },
    });
    if (product) {
      return fresponse(404, null, "product tidak ditemukan", response);
    }
    fresponse(200, product, "ok", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const creteProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const body = request.body({ type: "json" });
  const result = await body.value;
  const {
    nama,
    desc,
    img,
    harga,
    stock,
    categoryId,
  } = result;

  try {
    const product = await prisma.product.create({
      data: {
        nama,
        desc,
        img,
        harga,
        stock,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
    fresponse(201, product, "Product created successfully!", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const updateProduct = async (
  { request, response, params }: { request: any; response: any; params: any },
) => {
  const id: string = params.id;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) return fresponse(404, null, "Film tidak ditemukan", response);
    const body = request.body({ type: "json" });
    const result = await body.value;
    const {
      nama,
      desc,
      img,
      harga,
      stock,
      category,
    } = result;

    const executeUpdate = prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        nama,
        desc,
        img,
        harga,
        stock,
        category: { connect: { id: category } },
      },
    });

    fresponse(200, executeUpdate, "Product berhasil diperbaharui", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const deleteProduct = async (
  { response, params }: { response: any; params: any },
) => {
  const id: string = params.id;
  try {
    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    fresponse(201, null, "Berhasil Menghapus data!", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

// export const getProductByCategory = async (
//   { request, response }: { request: any; response: any; },
// ) => {
//   const params = request.url.searchParams;
//   const ctgr: string = params.get("category")
//   try {
//     const category = await prisma.category.findMany({
//       where: {
//         nama: ctgr
//       },
//       include: {
//         product: true,
//         _count: true
//       }
//     })
//     if(!category) return fresponse(500, null, "internal server eror", response)

//     fresponse(200, category, `Get data by ${ctgr}`, response)
//   } catch (error) {
//     fresponse(500, null, error.message, response)
//   }
// };
