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
  onPress: () => void
}) => {
    const $selected = selected ? $variations.selected : $variations.default;
  const $styles = [$pillStyle, $size[size], $selected, style];

  const $textSize = size === 'large' ? 'md' : 'sm'

  return (
    <Pressable style={$styles} onPress={onPress}>
      <Text size={$textSize} >{tag}</Text>
    </Pressable>
  )
}

const $variations = {
  default: {
    backgroundColor: colors.background,
    borderColor: colors.border,
  } as StyleProp<ViewStyle>,

  selected: {
    backgroundColor: colors.palette.primary1,
    borderColor: colors.palette.primary9,
  } as StyleProp<ViewStyle>,
}

const $size = {
  default: {
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.micro,
  },
  large: {
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.small,
  } as ViewStyle,
}
const $pillStyle: ViewStyle = {
  borderWidth: 1,
  borderRadius: spacing.borderRadius,
  margin: 5,
  justifyContent: 'center',
  alignItems: 'center'
}
