import { Request, Response } from "express";
import {
  createEventDB,
  destroyEvent,
  getEventDB,
  getUserEvents,
  listEventsDB,
} from "../services/event.service";

interface CustomRequest extends Request {
  userId?: string;
}

export const getEventsController = async (req: CustomRequest, res: Response) => {
  try {
    const eventList = await listEventsDB(req.query, req.userId);
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
    if (!event || event.errors)
      res.status(404).json({ error: "Evento no encontrado", code: event.errors });
    else res.status(200).json(event);
    return event;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al crear el evento" });
  }
};

export const insertUserInEvent = async (req: CustomRequest, res: Response) => {
  try {
    const { eventId } = req.params;
    const { guestId } = req.body;
    if (!guestId) throw "Ingresa id Usuario para agregar un evento";
    const eventList = await getEventDB(eventId as string);
    if (!eventList) throw "No se encontró evento";
    if (guestId === eventList.organizerId.toString()) throw "El usuario ya es organizador del evento";
    if (eventList.guestIds.includes(guestId)) throw "El usuario ya es un invitado del evento";

    eventList.guestIds.push(guestId);
    await eventList.save();

    res.status(200).json(eventList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const removeUserFromEvent = async (req: CustomRequest, res: Response) => {
  try {
    const { eventId } = req.params;
    const { guestId } = req.body;
    if (!guestId) throw "Ingresa el ID del usuario para eliminarlo del evento";

    const eventList = await getEventDB(eventId as string);
    if (!eventList) throw "No se encontró el evento";

    // Verificar si el guestId está en la lista de invitados
    const guestIndex = eventList.guestIds.indexOf(guestId);
    if (guestIndex === -1) throw "El usuario no es un invitado del evento";

    // Remover el guestId del arreglo de invitados
    eventList.guestIds.splice(guestIndex, 1);
    await eventList.save();

    res.status(200).json(eventList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const eventoBorrado = await destroyEvent(eventId)
    res.status(200).json(eventoBorrado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}

export const viewUserEvents = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const events = await getUserEvents(userId);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error });
  }
};