import React from "react"
import { View, ViewStyle } from "react-native"
import { spacing } from "../theme"

export type GroupProps = {
  content?: keyof typeof $alignment
  style?: ViewStyle
  children: React.ReactNode
  wrap?: boolean
}

export const Group = ({ children, style = {}, content = "left", wrap = false }: GroupProps) => {
  const $style = [style, $group, $alignment[content], wrap ? $wrap : {}]

  return (
    <View style={$style}>
      {React.Children.map(children, (child: React.ReactElement) => {
        if (wrap) {
          return React.cloneElement(child, {
            style: { marginVertical: spacing.tiny, marginRight: spacing.tiny },
          })
        }
        return React.cloneElement(child)
      })}
      {/* {children} */}
    </View>
  )
}

const $alignment = {
  "space-between": {
    justifyContent: "space-between",
    alignItems: "center",
  } as ViewStyle,
  center: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  left: {
    alignItems: "center",
  } as ViewStyle,
  right: {
    alignItems: "flex-end",
  } as ViewStyle,
  around: {
    justifyContent: "space-around",
    alignItems: 'center'
  } as ViewStyle,
}

const $wrap: ViewStyle = {
  flexWrap: "wrap",
}

const $group: ViewStyle = {
  flexDirection: "row",
}
