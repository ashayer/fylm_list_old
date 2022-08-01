import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set: any) => ({
  isUser: false,
  username: "",
  setIsUser: (user: boolean, username: string) => set({ isUser: user, username: username }),
});

const useStore = create(
  devtools(
    persist(store, {
      name: "user",
    }),
  ),
);

export default useStore;
