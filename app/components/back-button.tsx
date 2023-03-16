import React from "react"
import { ViewStyle } from "react-native"
import {  spacing } from "../theme"
import { Button } from "./Button"
import { Icon } from "./Icon"

export const BackButton = ({ style, onPress }: {style?: ViewStyle, onPress: any}) => {
  return (
    <Button
      onPress={onPress}
      // preset="reversed"
      LeftAccessory={() => <Icon icon="caretLeft"   size={20} />}
      style={[$styles, style]}
    />
  )
}

const $styles: ViewStyle = {
  minHeight: 3,
  alignSelf: "flex-start",
  paddingVertical: spacing.tiny,
  paddingHorizontal: spacing.tiny,
}
