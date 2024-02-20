import { Router } from "express";
import { getEventsController, newEventController } from "../controllers/event.controller";
import { verifyToken } from "../middlewares/verifyToken";

const route = Router();

route.get("/:eventId?", getEventsController)
route.post("/", verifyToken, newEventController);

export default route;
