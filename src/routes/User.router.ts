import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { authorized, me } from "../middleware/isAuthorized.middleware.ts";
import { getUser, signOut, signin, signup, updateUserById } from "../controller/user.controller.ts";

// import { AppState } from "../Response.ts

const route = new Router();

route
  .get("/api/user", authorized, getUser)
  .get("/api/me",  me)
  .post("/api/signup", signup)
  .post("/api/signin", signin)
  .patch("spi/user/:id", authorized, updateUserById)
  .delete("/api/signout", signOut)

export default route;
