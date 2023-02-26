import React from "react"
import { View } from "react-native"
import { Card, Text, Toggle } from "../../../components"
import { Group } from "../../../components/group.component"
import { useArray } from "../../../hooks/use-array"
import {  marginY } from "../../../theme/utils"
import { TagPill } from "../../onboarding/components/tag-pill.component"

const daysValue = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];


export const Days = () => {
  const days = useArray({ value: [] });

  const daysInWords = React.useMemo(() => {

    if(days.value.length === daysValue.length) {
        return 'Repeat everyday'
    }
    return `Repeat on ${days.value.join(', ').toLowerCase()}`
  }, [days.value])

  return (
    <Card
      style={marginY.medium}
      HeadingComponent={
        <Text preset="subheading" weight="bold">
          Select days
        </Text>
      }
      ContentComponent={
        <View>
          <Group style={marginY.large} wrap>
            {daysValue.map((day) => {
              return (
                <TagPill
                  tag={day}
                  size="default"
                  onPress={() => days.insertOrRemove(day)}
                  key={day}
                  selected={days.value.includes(day)}
                />
              )
            })}
          </Group>
            <Toggle value={true} label={`${daysInWords}`}  />
        </View>
      }
    />
  )
}

// const $day: ViewStyle = {
//     borderWidth: 1,
//     borderRadius: spacing.borderRadius,
//     alignSelf: "flex-start",
//     paddingVertical: spacing.micro,
//     paddingHorizontal: spacing.tiny + 5,
//     flexWrap: "wrap",
//   }
