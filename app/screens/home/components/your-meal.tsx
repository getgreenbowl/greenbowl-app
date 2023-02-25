import React from "react"
import { ViewStyle } from "react-native"
import { Card, Text } from "../../../components"
import { spacing } from "../../../theme"

export const YourMeal = () => {
  return (
    <Card
    style={$cardContainer}
      HeadingComponent={
        <Text size="lg" weight="semiBold" text="Your meal" />
      }
    />
  )
}


const $cardContainer: ViewStyle = {
  padding: spacing.large,
  // marginVertical: spacing.large
}