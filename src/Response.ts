import { Response } from "https://deno.land/x/oak@v11.1.0/response.ts";
import { PrismaClient } from "../generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

type Metadata = {
  prev?: string;
  next?: string;
  current?: string;
};

interface ApiResponse<T> {
  payload: T;
  message: string;
  metadata?: Metadata;
}

export const fresponse = <T>(
  status_code: number,
  data: T,
  message: string,
  res: Response,
  metadata?: Metadata,
) => {
  const apiResponse: ApiResponse<T> = {
    payload: data,
    message,
    metadata: metadata,
  };
  res.status = status_code;
  res.body = apiResponse;
};

const envVars = await load();

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});
