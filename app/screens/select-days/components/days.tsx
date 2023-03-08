import React from "react"
import { View } from "react-native"
import { Card, Text, Toggle } from "../../../components"
import { Group } from "../../../components/group.component"
import { useArray } from "../../../hooks/use-array"
import { marginT, marginY } from "../../../theme/utils"
import { TagPill } from "../../onboarding/components/tag-pill.component"

const daysValue = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

export const Days = () => {
  const daysLunch = useArray({ value: [] })
  const daysDinner = useArray({ value: [] })

  const daysLunchInWords = React.useMemo(() => {
    if (daysLunch.value.length === daysValue.length) {
      return "Repeat everyday"
    }
    return `Repeat on ${daysLunch.value.join(", ").toLowerCase()}`
  }, [daysLunch.value])

  const daysDinnerInwords = React.useMemo(() => {
    if (daysDinner.value.length === daysValue.length) {
      return "Repeat everyday"
    }
    return `Repeat on ${daysDinner.value.join(", ").toLowerCase()}`
  }, [daysDinner.value])

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
          <Text text="Lunch" weight="semiBold" />
          <Group style={marginY.tiny} wrap>
            {daysValue.map((day) => {
              return (
                <TagPill
                  tag={day}
                  size="default"
                  onPress={() => daysLunch.insertOrRemove(day)}
                  key={day}
                  selected={daysLunch.value.includes(day)}
                />
              )
            })}
          </Group>
          <Toggle value={true} label={`${daysLunchInWords}`} />

          <Text text="Dinner" weight="semiBold" style={marginT.medium} />
          <Group style={marginY.tiny} wrap>
            {daysValue.map((day) => {
              return (
                <TagPill
                  tag={day}
                  size="default"
                  onPress={() => daysDinner.insertOrRemove(day)}
                  key={day}
                  selected={daysDinner.value.includes(day)}
                />
              )
            })}
          </Group>
          <Toggle value={true} label={`${daysDinnerInwords}`} />
        </View>
      }
    />
  )
}
