import React from "react"
import { StyleProp, View, ViewProps, ViewStyle } from "react-native"

interface BoxProps extends ViewProps {
  content?: "left" | "right" | "center" | "top" | "bottom"
  nodefaults?: boolean
}

export const Box = ({ nodefaults = false, children }: BoxProps) => {
  const $styles = [nodefaults ? [] : $defaultStyle.space]
  return <View style={$styles}>{children}</View>
}

const $defaultStyle = {
  space: [{ margin: 5 }] as StyleProp<ViewStyle>,
}
