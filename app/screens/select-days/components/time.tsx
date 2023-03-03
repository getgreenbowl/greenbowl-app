import React, { useState } from "react"
import { View } from "react-native"
import { Card, Text } from "../../../components"
import { Group } from "../../../components/group.component"
import { marginT, marginY } from "../../../theme/utils"
import { TagPill } from "../../onboarding/components/tag-pill.component"

const lunchTime = ["12:00", "12:30", "1:00", "1:30", "2:00", "2:30"]
const dinnerTime = ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30"]

export const TimeSelection = () => {
  const [lunch, setlunch] = useState("")
  const [dinner, setdinner] = useState("")

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
            <Text text="Lunch time" weight='semiBold'  />
            <Group style={marginT.tiny} wrap>
              {lunchTime.map((time) => {
                return (
                  <TagPill
                    tag={time}
                    size="default"
                    onPress={() => setlunch(time)}
                    key={time}
                    selected={lunch === time}
                  />
                )
              })}
            </Group>
          </View>
          <View style={marginT.medium}>
            <Text text="Dinner time" weight='semiBold'  />
            <Group  style={marginT.tiny} wrap>
              {dinnerTime.map((time) => {
                return (
                  <TagPill
                    tag={time}
                    size="default"
                    onPress={() => setdinner(time)}
                    key={time}
                    selected={dinner === time}
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
