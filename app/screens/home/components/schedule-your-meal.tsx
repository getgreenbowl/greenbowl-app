import React, { useMemo } from "react"
import { ViewStyle, TextStyle, View, Pressable } from "react-native"
import { Card, Icon, Text } from "../../../components"
import { Group } from "../../../components/group.component"
import { appStore } from "../../../store/app-state.store"
import { colors, spacing } from "../../../theme"
import { preferenceStore } from "../../../store/preference.store"

export const ScheduleYourMeal = ({ handleAction, address }) => {
  const toggleMeals = appStore((state) => state.toggleActive)
  const preferences = preferenceStore((state) => state)

  const preferenceMessage = useMemo(() => {
    const { days, breakfast, lunch, dinner } = preferences
    return `${days} days, ${breakfast ? "Breakfast" : ""} ${lunch ? "Lunch" : ""} ${
      dinner ? "and Dinner" : ""
    }`
  }, [preferences])

  return (
    <Card
      style={$cardContainer}
      HeadingComponent={
        <Text size="md" weight="semiBold">
          Schedule your meal
        </Text>
      }
      ContentComponent={
        <View>
          <Pressable onPress={() => handleAction("days")}>
            <SingleSelector
              tx="Preference"
              value={preferenceMessage}
              icon={<Icon icon="calendar" size={22} color={colors.palette.neutral1} />}
            />
          </Pressable>
          <Pressable onPress={() => handleAction("address")}>
            <SingleSelector
              tx="Select Address"
              value={address}
              icon={<Icon icon="location" size={22} color={colors.palette.neutral1} />}
            />
          </Pressable>
          <Pressable onPress={() => toggleMeals()}>
            <SingleSelector
              tx="Confirm and Pay"
              value={address}
              icon={<Icon icon="location" size={22} color={colors.palette.neutral1} />}
            />
          </Pressable>
        </View>
      }
    />
  )
}

function SingleSelector({
  tx,
  icon,
  value,
}: {
  tx: string
  icon: React.ReactNode
  value?: string
}) {
  return (
    <View style={$selectors}>
      <Group content="space-between">
        <Group>
          {icon}
          <View style={{ paddingLeft: spacing.small }}>
            <Text style={$selectorText} size="xs">
              {tx}
            </Text>
            <Text text={value} size="xxs" white ellipsizeMode="tail" numberOfLines={1} />
          </View>
        </Group>

        <Icon icon="caretRight" color={colors.palette.neutral1} />
      </Group>
    </View>
  )
}

const $cardContainer: ViewStyle = {
  padding: spacing.large,
  // marginVertical: spacing.large
}

const $selectors: ViewStyle = {
  backgroundColor: colors.orangeBg,
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.small,
  borderRadius: spacing.borderRadius,
  marginVertical: spacing.medium,
}

const $selectorText: TextStyle = {
  color: colors.palette.neutral1,
  fontWeight: "900",
}
