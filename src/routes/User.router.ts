import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { authorized } from "../middleware/isAuthorized.middleware.ts";
import { getUser, signOut, signin, signup, updateUserById } from "../controller/user.controller.ts";

const route = new Router();

route
  .post("/api/signup", signup)
  .post("/api/signin", signin)
  .get("/api/signout", signOut)
  .get("/api/user", authorized, getUser)
  .patch("spi/user/:id", authorized, updateUserById)

export default route;
