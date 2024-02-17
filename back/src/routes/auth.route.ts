import { Router } from "express";
import { registerController, loginController } from "../controllers/auth.controller";

const route = Router();

route.post("/login", loginController);
route.post("/register", registerController);

export default route;
