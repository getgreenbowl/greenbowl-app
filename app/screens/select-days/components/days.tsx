import React from "react"
import { View } from "react-native"
import { Card, Icon, Text, TextField, Toggle } from "../../../components"
import { Group } from "../../../components/group.component"
import mealStore from "../../../store/meal-selection.store"
import { marginT, marginY } from "../../../theme/utils"
import { TagPill } from "../../onboarding/components/tag-pill.component"

const daysValue = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
const lunchTimes = ["12:00", "12:30", "1:00", "1:30", "2:00", "2:30"]

export const Days = () => {
  const addLunchDay = mealStore((state) => state.addLunchDay)
  const addDinnerDay = mealStore((state) => state.addDinnerDay)
  const lunchDays = mealStore((state) => state.days.lunch)
  const dinnerDays = mealStore((state) => state.days.dinner)
  const lunchDaysInWords = mealStore((state) => state.lunchDaysInWords)
  const DinnerDaysInWords = mealStore((state) => state.dinnerDaysInWords)

  return (
    <Card
      style={marginY.medium}
      HeadingComponent={
        <Text preset="subheading" weight="bold">
          Select Timings
        </Text>
      }
      ContentComponent={
        <View style={marginY.large}>
          <Text text="First meal" weight="semiBold" />
          <Group style={marginY.tiny} wrap>
            {daysValue.map((day) => {
              return (
                <TagPill
                  tag={day}
                  size="default"
                  onPress={() => addLunchDay(day)}
                  key={day}
                  selected={lunchDays.includes(day)}
                />
              )
            })}
          </Group>
          <View style={marginT.medium}>
            <TextField
              label="Meal time"
              RightAccessory={() => {
                return (
                  <Group content="center" wrap style={marginT.tiny}>
                    <TagPill tag="AM" onPress={() => alert("pm")} selected />
                    <TagPill tag="PM" onPress={() => alert("pm")} selected />
                  </Group>
                )
              }}
              helper="what time do you want your meal to be delivered ?"
            />
          </View>
        </View>
      }
    />
  )
}
