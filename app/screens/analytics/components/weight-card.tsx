import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Button, Card, Text } from '../../../components'
import { Group } from '../../../components/group.component'
import { colors } from '../../../theme'
import { marginB, marginY } from '../../../theme/utils'

export const WeightCard = () => {
  return (
    <Card
        style={[marginY.tiny, $lBorderWeight, marginB.huge]}
        HeadingComponent={<Text size="xs">weight</Text>}
        ContentComponent={
          <Group content="space-between">
            <View style={$center}>
              <Text preset="heading">66 kg</Text>
              <Text size="xxs">last updated - 2 days ago</Text>
            </View>
            <Button text="Add weight" style={$addWeightBtn} />
          </Group>
        }
      />
  )
}


const $center: ViewStyle = {
    position: "relative",
  }
  
  const $addWeightBtn: ViewStyle = {
    minHeight: 10,
  }
  
  const $lBorderWeight: ViewStyle = {
    borderLeftWidth: 10,
    borderColor: colors.redBg,
  }
  