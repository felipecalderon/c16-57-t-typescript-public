import axiosInstance from "@/lib/axios-config";
import { Ieventos } from "@/lib/interfaces";
import { create } from "zustand";

export interface EventsStore {
  events: Ieventos[];
  setEvents: (events: Ieventos[]) => void;
  getEvents: (token: string, query: string, limit: number) => void;
}

export const storeEvents = create<EventsStore>((set) => ({
  events: [],
  setEvents: (events) => set({ events }),
  getEvents: async (token: string, query: string, limit = 8) => {
    let endpoint;
    let querys = `limit=${limit}`;
    if (query !== "") {
      querys = `${querys}&q=${query}`;
      endpoint = `/api/events?${querys}`;
    } else endpoint = `/api/events?${querys}`;

    const { data }: { data: Ieventos[] } = await axiosInstance.get(endpoint,
      {
        headers: {
          "Auth-Token": token,
        },
      }
    );

    set((state) => {
      return { ...state, events: data };
    });
  },
}));
