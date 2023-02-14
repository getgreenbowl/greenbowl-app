import React from 'react'
import {  ViewStyle, StyleProp, Pressable } from 'react-native'
import { Text } from '../../../components'
import { colors, spacing } from '../../../theme'

export const TagPill = ({tag, selected = false, onPress}: {tag: string, selected: boolean, onPress: () => void}) => {

    const $styles = [
        $pillStyle,
        selected ? $variations.selected : $variations.default
    ]

  return (
    <Pressable style={$styles} onPress={onPress} >
        <Text size="sm" >{tag}</Text>
    </Pressable>
  )
}


const $variations = {
    default: {
        backgroundColor: colors.background,
        borderColor: colors.border,
    } as StyleProp<ViewStyle>,

    selected: {
        backgroundColor: colors.palette.primary100,
        borderColor: colors.palette.primary600,
    } as StyleProp<ViewStyle>
}

const $pillStyle: ViewStyle = {
    borderWidth: 2,
    alignSelf: "flex-start",
    padding: spacing.tiny,
    borderRadius: spacing.borderRadius,
    margin: 5
}
