import { Router } from "express";
import { getEventsController, newEventController, getOneEventController, insertUserInEvent, removeUserFromEvent, deleteEvent, viewUserEvents } from "../controllers/event.controller";
import { verifyToken } from "../middlewares/verifyToken";

const route = Router();

route.get("/", getEventsController)
route.get("/my/:userId", verifyToken, viewUserEvents)
route.get("/:eventId", getOneEventController)
route.post("/", verifyToken, newEventController);
route.post("/new-guest/:eventId", verifyToken, insertUserInEvent)
route.post("/remove-guest/:eventId", verifyToken, removeUserFromEvent)
route.delete("/:eventId", verifyToken, deleteEvent)
export default route;
