import { create } from "zustand"

interface AppState {
  active: "schedule" | "your-meals"
  toggleActive: () => void
}

export const appStore = create<AppState>((set) => ({
  active: "schedule",
  toggleActive: () =>
    set((state) => ({ active: state.active === "schedule" ? "your-meals" : "schedule" })),
}))
