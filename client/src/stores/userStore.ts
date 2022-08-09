import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set: any) => ({
  userMovieLikes: [],
  setUserMovieLikes: (userMovieLikes: string[] | undefined) => set({ userMovieLikes }),
});

const useUserStore = create(devtools(store));

export default useUserStore;
