import { Router } from "express";
import { registerController, loginController } from "../controllers/auth.controller";
import { inserBlackList } from "../controllers/blackList.controller";

const route = Router();

route.post("/login", loginController);
route.post("/register", registerController);
route.post("/logout", inserBlackList)

export default route;
