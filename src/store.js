import { create }from "zustand";


export const userCounterStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({count: state.count + 1})),
}))