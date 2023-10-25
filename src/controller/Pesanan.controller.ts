// deno-lint-ignore-file no-explicit-any
import { fresponse, prisma } from "../Response.ts";

export const pemesanan = async (
  { response, request, state }: { response: any; request: any; state: any },
) => {
  const userId = await state.user.payload.id;
  const body = request.body({ type: "json" });
  const result = await body.value;
  const { productId, jumlah, alamatPengiriman, statusPesanan } = result;
  try {
    const pesanan = await prisma.pesanan.create({
      data: {
        statusPesanan,
        pembeli: {
          connect: {
            id: userId.id
          }
        },
        DetailPesanan: {
          create: {
            jumlah,
            products: {
              connect: {
                id: productId
              }
            }
          }
        }
      }
    })

    if(!pesanan) return fresponse(500, null, "internal server eror", response)

    const pengiriman = await prisma.pengiriman.create({
      data: {
        alamatPengiriman,
        Tanggal: pesanan.tanggalPesanan,
        pesanan: {
          connect: {
            id: pesanan.id
          }
        }
      }
    })
  } catch (error) {
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
        DetailPesanan: true,
        _count: true,
        pengiriman: true,
      },
    });

    if (!pesanan) return fresponse(404, null, "data tidak tersedia", response);

    fresponse(200, pesanan, "ok", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const getPesananById = async (
  { request, response }: { request: any; response: any },
) => {
};

export const updatePesanan = async (
  { request, response }: { request: any; response: any },
) => {
};

export const deletePesanan = async (
  { request, response }: { request: any; response: any },
) => {
};
