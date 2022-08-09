import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set: any) => ({
  isUser: false,
  username: "",
  id: "",
  setIsUser: (user: boolean, username: string, id: string) => set({ isUser: user, username, id }),
});

const useAuthStore = create(
  devtools(
    persist(store, {
      name: "user",
    }),
  ),
);

export default useAuthStore;
