import { create } from "zustand";

const useBearStore = create((set) => ({
  userQueue: [],
  setUsers
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
