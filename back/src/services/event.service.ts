import { IEvent } from "../config/interfaces/event.interface";
import Event, { EventDocument } from "../data/mongo/models/event.model";
import { GetEventsQuery } from '../controllers/interfaces/event-controller.interface';

interface FilterQuery {
  location?: RegExp;
  tags?: {
    '$all': string[]
  };
  $or?: Record<string, any>[];
}

export const listEventsDB = async (query: GetEventsQuery, userId: string = '') => {

  const filter: FilterQuery = {};

  // TODO: Redondear queries numéricas
  // Pagination
  let limit: number = Number(query.limit || '5');
  const page: number = Number(query.page || '1');
  const offset: number = (page > 1) ? ((page - 1) * limit) : 0;

  const eventsCounter = await Event.estimatedDocumentCount();
  const allPages = eventsCounter / limit;

  const maxOffset = (Math.ceil(allPages) - 1) * limit;

  if (isNaN(limit)) {
    throw new Error('"limit" debería ser un numero');
  }

  if (isNaN(page)) {
    throw new Error('"page" debería ser un numero');
  }

  // Filter
  filter.location = new RegExp(`${query.location || ''}`, 'i');

  if ('tags' in query) {
    filter.tags = {
      '$all': query.tags?.split(',') || []
    }
  }

  //TODO: Cambiar para que sea estricto is_admin xor is_guest
  if (query.is_guest === 'true') {
    filter.$or = filter.$or || [];
    filter.$or.push({
      guestIds: {
        '$all': [userId],
      }
    });
  }

  if (query.is_admin === 'true') {
    filter.$or = filter.$or || [];
    filter.$or.push({ organizerId: userId });
  }

  const events = await Event.find(filter)
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

export const destroyEvent = async (eventId: string) => {
  try {
    const deleteEvent = await Event.deleteOne({
      _id: eventId
    })
    return deleteEvent
  } catch (error) {
    throw error
  }
}

export const getUserEvents = async (userId: string) => {
  try {
    const eventsAsOrganizer = await Event.find({ organizerId: userId });
    const eventsAsGuest = await Event.find({ guestIds: userId });
    return { eventsAsOrganizer, eventsAsGuest };
  } catch (error) {
    throw error;
  }
};