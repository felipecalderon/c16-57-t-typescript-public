import axiosInstance from "@/lib/axios-config";
import { decodeToken } from "@/lib/decodeToken";
import { IUser, Ieventos } from "@/lib/interfaces";
import { create } from "zustand";

export interface UserStore {
  user: IUser | null;
  getUserData: (token: string) => void;
  loginUser: ({ email, password }: { email: string; password: string }) => void;
}

export const storeUser = create<UserStore>((set) => ({
  user: null,
  getUserData: async (token: string) => {
    const user = decodeToken(token);
    let endpoint = `/api/users?userId=${user.userId}`;
    const { data }: { data: IUser } = await axiosInstance.get(endpoint, {
      headers: {
        "Auth-Token": token,
      },
    });
    set((state) => {
      return { ...state, user: data };
    });
  },
  loginUser: async ({ email, password }) => {
    try {
      const response = await axiosInstance.post(`/api/auth/login`, {
        email,
        password,
      });
      const token = response.headers["auth-token"];
      if (!token) throw new Error("Token no recibido");
      localStorage.setItem("token", token);
      set((state) => {
        return { ...state, user: response.data };
      });
    } catch (error) {}
  },
}));
