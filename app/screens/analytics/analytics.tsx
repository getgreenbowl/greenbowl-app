import React from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { Group } from "../../components/group.component"
import { colors, spacing } from "../../theme"
import { marginY } from "../../theme/utils"
import { SmallCard } from "./components/small-card"
import { WeightCard } from "./components/weight-card"
import { WeightChart } from "./components/weight-chart"

export const Analytics = () => {
  return (
    <Screen
      StatusBarProps={{
        backgroundColor: colors.purpleBg,
        style: "light",
      }}
      contentContainerStyle={$container}
    >
      <Text text="vishal acharya" white size="sm" />
      <Text text="Health overview" style={marginY.medium} white size="xl" />
      <Group>
        <SmallCard
          title="calorie intake this week"
          unit="kcl"
          value={120}
          borderColor={colors.greenBg}
        />
        <SmallCard title="subscription" unit="days left" value={30} borderColor={colors.redBg} />
      </Group>
      <WeightCard />
      <WeightChart />
    </Screen>
  )
}

const $container: ViewStyle = {
  backgroundColor: colors.purpleBg,
  minHeight: "100%",
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}
