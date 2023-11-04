// deno-lint-ignore-file no-explicit-any

import { fresponse } from "../Response.ts";

export const getProductImg = async (
  { params, response }: { params: any; response: any },
) => {
  try {
    const name = await params.name
    const imagePath = `src/img/products/${name}`
    const image = await Deno.readFile(imagePath)

    response.status = 200
    response.body = image
    response.headers.set("Content-Type", "image/png")

  } catch (error) {
    fresponse(500, null, error.message, response)
  }
};
