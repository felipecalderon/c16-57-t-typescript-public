import { Router } from "express";
import { getEventsController, newEventController, getOneEventController } from "../controllers/event.controller";
import { verifyToken } from "../middlewares/verifyToken";

const route = Router();

route.get("/", verifyToken, getEventsController)
route.get("/:eventId", getOneEventController)
route.post("/", verifyToken, newEventController);

export default route;
