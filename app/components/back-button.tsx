import React from "react"
import { ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import { Button } from "./Button"
import { Icon } from "./Icon"

export const BackButton = ({ style, func }: {style?: ViewStyle, func: any}) => {
  return (
    <Button
      onPress={func}
      // preset="reversed"
      LeftAccessory={() => <Icon icon="caretLeft"  size={20} />}
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
