import React from "react"
import { View } from "react-native"
import { Card, Text } from "../../../components"
import { Group } from "../../../components/group.component"
import mealStore from "../../../store/meal-selection.store"
import { marginT, marginY } from "../../../theme/utils"
import { TagPill } from "../../onboarding/components/tag-pill.component"

const lunchTimes = ["12:00", "12:30", "1:00", "1:30", "2:00", "2:30"]
const dinnerTimes = ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30"]

export const TimeSelection = () => {
  const addLunchTiming = mealStore(state => state.addLunchTiming);
  const addDinnerTiming = mealStore(state => state.addDinnerTiming);
  const lunchTime = mealStore(state => state.timing.lunch);
  const dinnerTime = mealStore(state => state.timing.dinner);

  return (
    <Card
      style={marginY.medium}
      HeadingComponent={
        <Text preset="subheading" weight="bold">
          Select Delivery time
        </Text>
      }
      ContentComponent={
        <View>
          <View style={marginT.medium}>
            <Text text="First meal time" weight='semiBold'  />
            <Group style={marginT.tiny} wrap>
              {lunchTimes.map((time) => {
                return (
                  <TagPill
                    tag={time}
                    size="default"
                    onPress={() => addLunchTiming(time)}
                    key={time}
                    selected={lunchTime === time}
                  />
                )
              })}
            </Group>
          </View>
          <View style={marginT.medium}>
            <Text text="Second meal time" weight='semiBold'  />
            <Group  style={marginT.tiny} wrap>
              {dinnerTimes.map((time) => {
                return (
                  <TagPill
                    tag={time}
                    size="default"
                    onPress={() => addDinnerTiming(time)}
                    key={time}
                    selected={dinnerTime === time}
                  />
                )
              })}
            </Group>
          </View>
        </View>
      }
    />
  )
}
