import React from "react"
import { ViewStyle, TextStyle, View } from "react-native"
import { Card, Icon, Text } from "../../../components"
import { Group } from "../../../components/group.component"
import { colors, spacing } from "../../../theme"

export const ScheduleYourMeal = () => {
  return (
    <Card
      style={$cardContainer}
      HeadingComponent={
        <Text size="lg" weight="semiBold">
          Schedule your meal
        </Text>
      }
      ContentComponent={
        <View>
            <SingleSelector 
            tx="Select Address"
            icon={<Icon icon="location" size={22} color={colors.palette.neutral1} />}
            />
            <SingleSelector 
            tx="Choose your meals"
            icon={<Icon icon="mealFastFood" size={22} color={colors.palette.neutral1} />}
            />
            <SingleSelector 
            tx="Select days"
            icon={<Icon icon="calendar" size={22} color={colors.palette.neutral1} />}
            />
        </View>
      }
    />
  )
}


function SingleSelector({tx, icon}: {tx: string, icon: React.ReactNode}) {
    return  <View style={$selectors}>
    <Group>
    {icon}
      <Text style={$selectorText} size="md">
        {tx}
      </Text>
    </Group>

    <Icon icon="caretRight" color={colors.palette.neutral1} />
  </View>
}

const $cardContainer: ViewStyle = {
  padding: spacing.large,
  // marginVertical: spacing.large
}

const $selectors: ViewStyle = {
  backgroundColor: colors.palette.primary10,
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.small,
  borderRadius: spacing.borderRadius,
  marginVertical: spacing.medium,
  flexDirection: "row",
  justifyContent: "space-between",
}

const $selectorText: TextStyle = {
  color: colors.palette.neutral1,
  paddingLeft: spacing.small,
}
