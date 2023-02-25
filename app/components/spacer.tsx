import React from 'react'
import { View } from 'react-native'
import { spacing } from '../theme'

export const Spacer = () => {

  return (
    <View
    style={{
        paddingVertical: spacing.medium
    }}
    />
  )
}

