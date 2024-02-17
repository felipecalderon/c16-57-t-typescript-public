import { Router } from "express";
import { createUserController, deleteUserController, getUsersController, updateUserController } from "../controllers/user.controller";

const route = Router();

route.get("/", getUsersController);
route.post("/", createUserController);
route.put("/", updateUserController);
route.delete("/", deleteUserController);

export default route;
