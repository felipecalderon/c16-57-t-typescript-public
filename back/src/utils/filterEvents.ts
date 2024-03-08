import {
  FilterQuery,
  GetEventsQuery,
} from "../config/interfaces/querys.interface";

export const validateQueryParams = (query: GetEventsQuery) => {
  const limit = Number(query.limit || "10");
  const page = Number(query.page || "1");

  if (isNaN(limit) || limit <= 0) {
    throw new Error('"limit" debe ser un número positivo');
  }

  if (isNaN(page) || page <= 0) {
    throw new Error('"page" debe ser un número positivo');
  }

  return { limit, page };
};

export const buildFilter = (query: GetEventsQuery) => {
  const filter: FilterQuery = {};

  if (query.location) {
    filter.location = new RegExp(`${query.location}`, "i");
  }

  if (query.tags) {
    filter.tags = { $all: query.tags.split(",") };
  }

  const conditions = [];
  if (query.is_guest === "true") {
    conditions.push({ guestIds: { $all: [query.userId] } });
  }

  if (query.is_admin === "true") {
    conditions.push({ organizerId: query.userId });
  }

  if (conditions.length) {
    filter.$or = conditions;
  }

  return filter;
};

export const calculatePagination = async (limit: number, eventsCounter: number) => {
  const allPages = Math.ceil(eventsCounter / limit);
  return { allPages };
};
