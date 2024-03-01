import { Router } from "express";
import { getEventsController, newEventController, getOneEventController, insertUserInEvent, removeUserFromEvent, deleteEvent } from "../controllers/event.controller";
import { verifyToken } from "../middlewares/verifyToken";

const route = Router();

route.get("/", verifyToken, getEventsController)
route.get("/my-events")
route.get("/:eventId", getOneEventController)
route.post("/", verifyToken, newEventController);
route.post("/new-guest/:eventId", insertUserInEvent)
route.post("/remove-guest/:eventId", removeUserFromEvent)
route.delete("/:eventId", deleteEvent)
export default route;
