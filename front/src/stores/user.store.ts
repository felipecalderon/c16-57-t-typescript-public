import { decodeToken } from "@/lib/decodeToken";
import { IUser, Ieventos } from "@/lib/interfaces";
import axios from "axios";
import { create } from "zustand";

export interface UserStore {
  user: IUser | null;
  getUserData: (token: string ) => void;
}

export const storeUser = create<UserStore>((set) => ({
  user: null,
  getUserData: async (token: string) => {
    const user = decodeToken(token)
    let endpoint = `http://localhost:3001/api/users?userId=${user.userId}`;
    const { data }: { data: IUser } = await axios.get(endpoint,
      {
        headers: {
          "Auth-Token": token,
        },
      }
    );

    set((state) => {
      return { ...state, user: data };
    });
  },
}));