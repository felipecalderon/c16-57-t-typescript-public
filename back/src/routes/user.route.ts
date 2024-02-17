import { Router } from "express";
import { createUserController, deleteUserController, getUsersController, updateUserController } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verifyToken";

const route = Router();

route.get("/", getUsersController);
route.post("/", createUserController);
route.put("/", updateUserController);
route.delete("/", verifyToken, deleteUserController);

export default route;
