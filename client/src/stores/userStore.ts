import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set: any) => ({
  userMovieLikes: [],
  userFriends: [],
  setUserMovieLikes: (userMovieLikes: string[] | undefined) => set({ userMovieLikes }),
  setUserFriends: (userFriends: any[]) => set({ userFriends }),
});

const useUserStore = create(devtools(store));

export default useUserStore;
