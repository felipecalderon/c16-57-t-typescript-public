import { Request, Response } from "express";
import { createEventDB, getEventDB, listEventsDB } from "../services/event.service";
import { EventDocument } from "../data/mongo/models/event.model";
import { GetEventsQuery } from "./interfaces/event-controller.interface";

interface CustomRequest extends Request {
  userId?: string;
}

export const getEventsController = async (req: Request<{}, {}, {}, GetEventsQuery>, res: Response) => {
  try {
    const { query } = req;

    const eventList: EventDocument[] = await listEventsDB(query);

    if (eventList.length === 0) return res.status(404).json({ message: "No se encontraron eventos." });

    return res.status(200).json(eventList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al listar eventos" });
  }
};

export const getOneEventController = async (req: CustomRequest, res: Response) => {
  try {
    const { eventId } = req.params;
    const eventList = await getEventDB(eventId as string);
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
    if (!event || event.errors) res.status(404).json({ error: "Evento no encontrado", code: event.errors });
    else res.status(200).json(event);
    return event;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al crear el evento" });
  }
};
