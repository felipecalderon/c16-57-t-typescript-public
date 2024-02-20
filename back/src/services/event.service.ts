import { IEvent } from "../config/interfaces/event.interface";
import Event from "../data/mongo/models/event.model";

export const listEventsDB = async (id?: string) => {
  try {
    // Buscar evento si existe id
    if (id) {
      const event = await Event.findById(id)
      if (!event) return null;
      return event;
    }

    // Buscar todos los eventos
    const events = await Event.find()
    return events;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createEventDB = async ({
  title,
  description,
  organizerId,
  startDate,
  endDate,
  isPrivate,
  location,
  status,
  guestIds,
  expenses,
}: IEvent) => {
  try {
    const newEvent = Event.create({
      title,
      description,
      organizerId,
      startDate,
      endDate,
      isPrivate,
      location,
      status,
      guestIds,
      expenses,
    });
    return newEvent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
