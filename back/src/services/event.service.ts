import { IEvent } from "../config/interfaces/event.interface";
import Event, { EventDocument } from "../data/mongo/models/event.model";
import { GetEventsQuery } from '../controllers/interfaces/event-controller.interface';

interface FilterQuery {
  location?: string;
  tags?: string;
}

export const listEventsDB = async (query: GetEventsQuery) => {

  const filter: FilterQuery = {};

  // TODO: Redondear queries numéricas
  let limit: number = Number(query.limit || '5');
  let offset: number = 0;

  const page: number = Number(query.page || '1');

  const eventsCounter = await Event.estimatedDocumentCount();
  const allPages = eventsCounter / limit;

  const maxOffset = (Math.ceil(allPages) - 1) * limit;

  if (isNaN(limit)) {
    throw new Error('"limit" debería ser un numero');
  }

  if (isNaN(page)) {
    throw new Error('"page" debería ser un numero');
  }

  if (page > 1) {
    offset = (page - 1) * limit;
  }

  const events = await Event.find()
    .skip(page <= allPages ? offset : maxOffset)
    .limit(limit)

  return events;
}

export const getEventDB = async (id: string) => {
  try {
    // Buscar evento si existe id
    const event = await Event.findById(id)
    if (!event) return null;
    return event;
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
    if (typeof tags === 'string') {
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
