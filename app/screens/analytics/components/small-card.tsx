import React from "react"
import { View, ViewStyle } from "react-native"
import { Card, Text } from "../../../components"
import { Group } from "../../../components/group.component"
import { spacing } from "../../../theme"
import { paddingR } from "../../../theme/utils"

export const SmallCard = ({
  title,
  value,
  unit,
  borderColor,
}: {
  title: string
  value: number
  unit: string
  borderColor: string
}) => {
  return (
    <View style={[$cardContainer, paddingR.tiny]}>
      <Card
        style={[$borderLeft, { borderColor }]}
        HeadingComponent={<Text size="xs">{title}</Text>}
        ContentComponent={
          <Group style={$stretchFull}>
            <Text preset="heading">{value}</Text>
            <Text size="xs">{unit}</Text>
          </Group>
        }
      />
    </View>
  )
}

const $cardContainer: ViewStyle = {
  flexBasis: "50%",
  flexGrow: 0,
  marginVertical: spacing.tiny,
}

const $borderLeft: ViewStyle = {
  borderLeftWidth: 10,
}

const $stretchFull: ViewStyle = { flex: 1 }
