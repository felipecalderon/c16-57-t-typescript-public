import { Request, Response } from "express";
import { createEventDB, listEventsDB } from "../services/event.service";

interface CustomRequest extends Request {
  userId?: string;
}

export const getEventsController = async (req: CustomRequest, res: Response) => {
  try {
    const { eventId } = req.params;
    const eventList = await listEventsDB(eventId as string);
    res.status(200).json(eventList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al listar eventos" });
  }
};

export const newEventController = async (req: CustomRequest, res: Response) => {
  try {
    const { userId } = req;
    const event = await createEventDB({ ...req.body, organizerId: userId });
    if (!event || event.errors) res.status(404).json({ error: "Evento no encontrado" , code: event.errors});
    else res.status(200).json(event);
    return event;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al crear el evento" });
  }
};
