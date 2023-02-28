import React from "react"
import { ViewStyle, StyleProp, Pressable } from "react-native"
import { Text } from "../../../components"
import { colors, spacing } from "../../../theme"

export const TagPill = ({
  tag,
  selected = false,
  onPress,
  size = "default",
  style = {},
}: {
  size?: keyof typeof $size
  style?: ViewStyle
  tag: string
  selected: boolean
  onPress?: () => void
}) => {
    const $selected = selected ? $variations.selected : $variations.default;
  const $styles = [$pillStyle, $size[size], $selected, style];

  const $textSize = textSize[size]

  return (
    <Pressable style={$styles} onPress={onPress}  disabled={!onPress} >
      <Text size={$textSize} >{tag}</Text>
    </Pressable>
  )
}


const textSize = {
  small: 'xxs',
  default: 'xs',
  large: 'sm',
} as const

const $variations = {
  default: {
    backgroundColor: colors.background,
    borderColor: colors.border,
  } as StyleProp<ViewStyle>,

  selected: {
    backgroundColor: colors.palette.primary1,
    borderColor: colors.purpleBg,
  } as StyleProp<ViewStyle>,
}

const $size = {
  small: {
    paddingHorizontal: spacing.tiny,
    paddingVertical: spacing.micro - 1,
  } as ViewStyle,
  default: {
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.micro,
  },
  large: {
    paddingVertical: spacing.tiny,
  } as ViewStyle,
}
const $pillStyle: ViewStyle = {
  borderWidth: 1,
  borderRadius: spacing.borderRadius,
  justifyContent: 'center',
  alignItems: 'center'
}
