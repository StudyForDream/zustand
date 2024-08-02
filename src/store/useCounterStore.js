import { create }from "zustand";


export const userCounterStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({count: state.count + 1})),
  dec: () => set((state) => ({count: state.count - 1})),
  res: () => set((state) => ({count: state.count = 0})),
}))