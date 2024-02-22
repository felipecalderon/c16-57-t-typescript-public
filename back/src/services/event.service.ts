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
  tags,
}: IEvent) => {
  try {
    
    let tagJson = tags
    if(typeof tags === 'string'){
      tagJson = JSON.stringify(tags)
    }
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
      tags: tagJson,
    });
    return newEvent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
