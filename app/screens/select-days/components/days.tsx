import React from "react"
import { View } from "react-native"
import { Card, Text, Toggle } from "../../../components"
import { Group } from "../../../components/group.component"
import mealStore from "../../../store/meal-selection.store"
import { marginT, marginY } from "../../../theme/utils"
import { TagPill } from "../../onboarding/components/tag-pill.component"

const daysValue = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

export const Days = () => {
  const addLunchDay = mealStore(state => state.addLunchDay);
  const addDinnerDay = mealStore(state => state.addDinnerDay);
  const lunchDays = mealStore(state => state.days.lunch);
  const dinnerDays = mealStore(state => state.days.dinner);
  const lunchDaysInWords = mealStore(state => state.lunchDaysInWords);
  const DinnerDaysInWords = mealStore(state => state.dinnerDaysInWords);


  return (
    <Card
      style={marginY.medium}
      HeadingComponent={
        <Text preset="subheading" weight="bold">
          Select days
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
          <Toggle value={true} label={`${lunchDaysInWords()}`} />

          <Text text="Second meal" weight="semiBold" style={marginT.medium} />
          <Group style={marginY.tiny} wrap>
            {daysValue.map((day) => {
              return (
                <TagPill
                  tag={day}
                  size="default"
                  onPress={() => addDinnerDay(day)}
                  key={day}
                  selected={dinnerDays.includes(day)}
                />
              )
            })}
          </Group>
          <Toggle value={true} label={`${DinnerDaysInWords()}`} />
        </View>
      }
    />
  )
}
