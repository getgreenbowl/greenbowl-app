import React from 'react'
import { TextStyle } from 'react-native';
import { colors } from '../theme';
import { Text } from './Text'

interface LinkProps  {
children: string,
onPress: () => void;
}

export const Link = ({onPress, children} : LinkProps) => {
  return (
   <Text onPress={onPress} style={$linkStyle} >
    {children}
   </Text>
  )
}


const $linkStyle: TextStyle = {
    color: colors.palette.primary11
}; 