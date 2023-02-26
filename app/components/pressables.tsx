import React from "react"
import { Pressable, PressableProps, View, ViewProps } from "react-native"
import { Group, GroupProps } from "./group.component"
import { TextProps, Text } from "./Text"

export const PressableView = ({
  children,
  pressProps,
  viewProps,
}: {
  children: React.ReactNode
  pressProps: PressableProps
  viewProps: ViewProps
}) => {
  return (
    <Pressable {...pressProps}>
      <View {...viewProps}>{children}</View>
    </Pressable>
  )
}

export const PressableText = ({
  pressProps,
  textProps,
}: {
  pressProps: PressableProps
  textProps: TextProps
}) => {
  return (
    <Pressable {...pressProps}>
      <Text {...textProps} />
    </Pressable>
  )
}

export const PressableGroup = ({
    children,
  pressProps,
  groupProps,
}: {
    children: React.ReactNode
  pressProps: PressableProps
  groupProps?: GroupProps
}) => {
  return (
    <Pressable {...pressProps}>
      <Group {...groupProps} >{children}</Group>
    </Pressable>
  )
}
