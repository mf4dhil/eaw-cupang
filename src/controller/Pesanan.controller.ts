// deno-lint-ignore-file 
import { fresponse, prisma } from "../Response.ts";

export const checkout = async (
  { response, request, state }: { response: any; request: any; state: any },
) => {
  const userId = await state.user.payload;
  const body = request.body({ type: "json" });
  const result = await body.value;
  const { products, alamatPengiriman, statusPesanan } = result;
  try {
    const maping =  products.map((item: any) => ({
      jumlah: item.jumlah,
      products: {
        connect: {
          id: item.id
        }
      }
    }))
    const pesanan = await prisma.pesanan.create({
      data: {
        pembeliId: userId.id,
        statusPesanan,
        DetailPesanan: {
            create: maping
          },
          pengiriman: {
            create: {
              alamatPengiriman
            }
          }
        },
        include: {
          DetailPesanan: {
            include: {
              products: true,
            },
          },
          pengiriman: true,
          BuktiBayar: true,
        }
      })

    if (!pesanan) return fresponse(500, null, "internal server eror", response);

    fresponse(
      201,
      pesanan,
      "berhasil checkout",
      response,
    );
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const getPesanan = async (
  { state, response }: { state: any; response: any },
) => {
  try {
    const userId = await state.user.payload;

    const pesanan = await prisma.pesanan.findMany({
      where: {
        pembeliId: userId.id,
      },
      include: {
        DetailPesanan: {
          include: {
            products: true
          }
        },
        pengiriman: true,
        BuktiBayar: true
      }
    });

    if (!pesanan) return fresponse(404, null, "data tidak tersedia", response);

    fresponse(200, pesanan, "ok", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const getPesananById = async (
  { response, params }: { response: any, params:any },
) => {
  const id: string = params.id
  try {
    const pesanan = await prisma.pesanan.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        DetailPesanan: {
          include: {
            products: true
          }
        },
        pengiriman: true,
        BuktiBayar: true
      }
    })
    if(!pesanan) return fresponse(404, null, "data tidak ditemukan", response)
  } catch (error) {
    fresponse(500, null, error.message, response)
  }
};

export const updatePesanan = async (
  { request, params, response }: { params: any; response: any; request:any; },
) => {
  const id: string = params.id
  try {
    const body = request.body({ type: "json" });
    const result = await body.value
    const { statusPesanan } = result

    const pesanan = await prisma.pesanan.update({
      where: {
        id: Number(id)
      },
      data: {
        statusPesanan
      },
      include: {
        DetailPesanan: {
          include: {
            products: true
          }
        },
        pengiriman: true
      }
    })

    if(!pesanan) return fresponse(500, null, "internal server eror", response)

    fresponse(200, pesanan, "data berhasil diupdate", response)

  } catch (error) {
    fresponse(500, null, error.message, response)
  }
};

// export const deletePesanan = async (
//   { request, response }: { request: any; response: any },
// ) => {

// };
