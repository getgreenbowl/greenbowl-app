import { create } from "zustand"

interface MealStore {
  meals: string[]
  mealList: any[]
  days: {
    lunch: string[]
    dinner: string[]
  }
  timing: {
    lunch: string
    dinner: string
  }
  addMeal: (mealID: string) => void
  addLunchDay: (lunchDay: string) => void
  addDinnerDay: (dinnerDay: string) => void
  addLunchTiming: (lunchTime: string) => void
  addDinnerTiming: (dinnerTime: string) => void
  totalMeals: () => number
  lunchDaysInWords: () => string
  dinnerDaysInWords: () => string
  dinnerMessage: () => string
  lunchMessage: () => string
  setMealList: (meals: any[]) => void
}

const mealStore = create<MealStore>((set, get) => ({
  meals: [],
  mealList: [],
  days: {
    lunch: [],
    dinner: [],
  },
  timing: {
    lunch: "",
    dinner: "",
  },
  totalMeals: () => get().meals.length,
  lunchDaysInWords: () => get().days.lunch.toString(),
  dinnerDaysInWords: () => get().days.dinner.toString(),
  dinnerMessage: () => {
    return `${get().days.dinner.length} days dinner at ${get().timing.dinner}`
  },
  lunchMessage: () => {
    return `${get().days.lunch.length} days lunch at ${get().timing.lunch}`
  },
  setMealList: (meals: any[]) => {
    set((state) => ({ ...state, mealList: meals }))
  },
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
      timing: { ...state.timing, lunch: lunchTime },
    })),
  addDinnerTiming: (dinnerTime: string) =>
    set((state) => ({
      ...state,
      timing: { ...state.timing, dinner: dinnerTime },
    })),
}))

export default mealStore
