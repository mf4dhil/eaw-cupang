// deno-lint-ignore-file no-explicit-any
import { fresponse, prisma } from "../Response.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.3.0/mod.ts";
import { create, getNumericDate } from "https://deno.land/x/djwt@v3.0.0/mod.ts";
import { key } from "../utils/utils.apiKey.ts";

export const getUser = async ({ response }: { response: any }) => {
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
    fresponse(200, users, "Success", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const signup = async (
  { request, response }: { request: any; response: any },
) => {
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
};

export const signin = async (
  { request, response, cookies }: { request: any; response: any; cookies: any },
) => {
  const body = request.body({ type: "json" });
  const result = await body.value;
  const { username, password } = result;
  if (!username) {
    return fresponse(500, null, "Masukkan username anda", response);
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) return fresponse(404, null, "User tidak ditemukan", response);
    if (!password) return fresponse(406, null, "Masukkan password", response);
    const match = await bcrypt.compare(password, user.password);
    if (!match) return fresponse(500, null, "pasword tidak cocok", response);

    const payload = {
      id: user.id,
      name: username,
      exp: getNumericDate(60 * 60),
    };

    const jwt = await create({ alg: "HS512", typ: "JWT" }, { payload }, key);

    cookies.set("token", jwt);

    if (jwt) {
      const res = {
        userId: user.id,
        username: user.username,
        token: jwt,
      };
      fresponse(200, res, "OK", response);
    } else {
      fresponse(500, null, "internal server eror", response);
    }
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const signOut = async (
  { response, cookies }: { request: any; response: any; cookies: any },
) => {
  try {
    const token = await cookies.get("token");
    if (!token) return fresponse(401, null, "tidak ter autentikasi", response);

    const delToken = await cookies.delete("token");

    if (!delToken) return fresponse(400, null, "gagal sign out!", response);

    fresponse(200, null, "berhasil sign out!", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};

export const updateUserById = async (
  { request, response, params }: { request: any; response: any; params: any },
) => {
  const id: string = params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user) return fresponse(404, null, "Film tidak ditemukan", response);
    const body = request.body({ type: "json" });
    const result = await body.value;
    const { nama, username, email } = result;
    const updateUser = prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        nama,
        username,
        email,
      },
    });

    fresponse(200, updateUser, "Berhasil di Update", response);
  } catch (error) {
    fresponse(500, null, error.message, response);
  }
};
