import create from "zustand";
import { devtools } from "zustand/middleware";
const useStore = create(
  devtools((set) => ({
    isUser: false,
    setIsUser: (user: boolean) => set({ isUser: user }),
  })),
);

export default useStore;
