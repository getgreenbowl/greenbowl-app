import { create } from "zustand"

interface MealStore {
  meals: string[]
  days: {
    lunch: string[]
    dinner: string[]
  }
  timing: {
    lunch: string[]
    dinner: string[]
  }
  addMeal: (mealID: string) => void
  addLunchDay: (lunchDay: string) => void
  addDinnerDay: (dinnerDay: string) => void
  addLunchTiming: (lunchTime: string) => void
  addDinnerTiming: (dinnerTime: string) => void
  totalMeals: () => number
}

const mealStore = create<MealStore>((set, get) => ({
  meals: [],
  days: {
    lunch: [],
    dinner: [],
  },
  timing: {
    lunch: [],
    dinner: [],
  },
  totalMeals:() => get().meals.length,
  addMeal: (mealID: string) =>
    set((state) => {
      const meals = [...state.meals]
      const exists = meals.findIndex((item) => item === mealID)
      if (exists < 0) {
        meals.push(mealID)
      } else {
        meals.splice(exists, 1)
      }
      return { ...state, meals }
    }),
  addLunchDay: (lunchDay: string) =>
    set((state) => ({
      ...state,
      days: { ...state.days, lunch: [...state.days.lunch, lunchDay] },
    })),
  addDinnerDay: (dinnerDay: string) =>
    set((state) => ({
      ...state,
      days: { ...state.days, dinner: [...state.days.dinner, dinnerDay] },
    })),
  addLunchTiming: (lunchTime: string) =>
    set((state) => ({
      ...state,
      timing: { ...state.timing, lunch: [...state.timing.lunch, lunchTime] },
    })),
  addDinnerTiming: (dinnerTime: string) =>
    set((state) => ({
      ...state,
      timing: { ...state.timing, dinner: [...state.timing.dinner, dinnerTime] },
    })),
}))

export default mealStore
