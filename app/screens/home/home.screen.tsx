import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { spacing } from "../../theme"
import { ScheduleYourMeal } from "./components/schedule-your-meal"

export const HomeScreen = () => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <Text preset="heading" style={$title}>
        Hello, vishal
      </Text>
      <Text style={$tagline}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, iusto.
      </Text>
      <ScheduleYourMeal />
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.large + spacing.extraLarge,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $title: TextStyle = {
  marginBottom: spacing.small,
}

const $tagline: TextStyle = {
  marginBottom: spacing.huge,
}

