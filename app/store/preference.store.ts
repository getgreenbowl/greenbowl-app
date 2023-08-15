import { create } from "zustand"

interface PreferenceState {
  days: "7" | "30" | "60"
  breakfast: boolean
  lunch: boolean
  dinner: boolean
  setDays: (day: "7" | "30" | "60") => void
  toggleOption: (option: "breakfast" | "lunch" | "dinner") => void
}

export const preferenceStore = create<PreferenceState>((set) => ({
  days: "7",
  breakfast: false,
  lunch: true,
  dinner: false,
  setDays: (day) => {
    set((state) => ({ ...state, days: day }))
  },
  toggleOption: (option: "breakfast" | "lunch" | "dinner") => {
    set((state) => ({ ...state, [option]: !state[option] }))
  },
}))
