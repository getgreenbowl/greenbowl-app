import React from 'react'
import { View, ViewStyle } from 'react-native'

export const Group = ({children, style = {}}: {style?: ViewStyle, children: React.ReactNode}) => {
  const $style = [style, $group]

  return (
    <View style={$style}>
        {children}
    </View>
  )
}


const $group: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: 'center',
  alignItems: 'center'
  }