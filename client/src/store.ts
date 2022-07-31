import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set: any) => ({
  isUser: false,
  setIsUser: (user: boolean) => set({ isUser: user }),
});

const useStore = create(
  devtools(
    persist(store, {
      name: "user",
    }),
  ),
);

export default useStore;
