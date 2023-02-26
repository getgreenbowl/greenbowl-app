import React from "react"
import { StyleProp, View, ViewProps, ViewStyle } from "react-native"

interface BoxProps extends ViewProps {
  content?: "left" | "right" | "center" | "top" | "bottom"
  nodefaults?: boolean
  style?: ViewStyle
}

export const Box = ({ nodefaults = false, children, style }: BoxProps) => {
  const $styles = [nodefaults ? [] : $defaultStyle.space, style]
  return <View style={$styles}>{children}</View>
}

const $defaultStyle = {
  space: [{ margin: 5 }] as StyleProp<ViewStyle>,
}
