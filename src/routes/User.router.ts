import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { getUser, signOut, signin, signup, updateUserById } from "../controller/User.controller.ts";
import { authorized } from "../middleware/isAuthorized.middleware.ts";


const route = new Router();

route
  .post("/signup", signup)
  .post("/signin", signin)
  .get("/signout", signOut)
  .get("/user", authorized, getUser)
  .patch("/user/:id", authorized, updateUserById)
  

export default route;
