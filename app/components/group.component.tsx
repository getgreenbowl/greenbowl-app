import React from 'react'
import { View, ViewStyle } from 'react-native';


type GroupProps = {
  content?: keyof typeof $alignment,
  style?: ViewStyle, 
  children: React.ReactNode
}

export const Group = ({children, style = {}, content = 'left'}: GroupProps) => {
  const $style = [style, $group, $alignment[content]]

  return (
    <View style={$style}>
        {children}
    </View>
  )
}

const $alignment = {
  'space-between': {
    justifyContent: 'space-between',
    alignItems: 'center'
  } as ViewStyle,
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,
  left: {
    alignItems: 'center'
  } as ViewStyle
}

const $group: ViewStyle = {
  flexDirection: "row",
  // flexWrap: "wrap"
  }