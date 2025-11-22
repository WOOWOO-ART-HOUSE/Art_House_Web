import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  _id: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  profileImage: string;
  whatsappNumber: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  occupation: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  setUser: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth-storage",
      getStorage: () => ({
        getItem: (name: string) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name: string, value: any) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name: string) => {
          localStorage.removeItem(name);
        },
      }),
    }
  )
);
