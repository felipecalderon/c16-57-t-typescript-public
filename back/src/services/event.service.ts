import { IEvent } from "../config/interfaces/event.interface";
import { GetEventsQuery } from "../config/interfaces/querys.interface";
import Event from "../data/mongo/models/event.model";
import { buildFilter, calculatePagination, validateQueryParams } from "../utils/filterEvents";

export const listEventsDB = async (query: GetEventsQuery) => {

  const { limit, page } = validateQueryParams(query);

  const eventsCounter = await Event.estimatedDocumentCount();
  if (eventsCounter === 0) return [];

  const { allPages } = await calculatePagination(limit, eventsCounter);

  if (page > allPages) {
    return []; 
  }

  const filter = buildFilter(query);

  const offset = (page - 1) * limit;
  const events = await Event.find(filter)
    .populate('organizerId') 
    .populate({
      path: 'guestIds', 
      model: 'User' 
    })
    .populate({
      path: 'expenses', 
      model: 'Expense' 
    })
    .skip(page <= allPages ? offset : (allPages - 1) * limit)
    .limit(limit);

  return events;
}

export const getEventDB = async (id: string) => {
  try {
    // Buscar evento si existe id
    const event = await Event.findById(id)
      .populate('organizerId') 
      .populate({
        path: 'guestIds', 
        model: 'User' 
      })
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

export const findEventsByKeyword = async (searchTerm: string) => {
  try {
    const events = await Event.find({
      $text: { $search: searchTerm }
    },
    { score: { $meta: "textScore" } }) // opcional, sirve para ordenar por relevancia
    .sort({ score: { $meta: "textScore" } }); // opcional, similar al anterior score

    return events;
  } catch (error) {
    console.error("Error searching events:", error);
    throw error;
  }
};