import React from "react"
import { Pressable, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../../components"
import { Group } from "../../components/group.component"
import { AppStackScreenProps } from "../../navigators"
import { spacing } from "../../theme"
import { marginL } from "../../theme/utils"
import { Days } from "./components/days"
import { TimeSelection } from "./components/time"

interface SelectDaysProps extends AppStackScreenProps<"selectDays"> {}

export const SelectDays = ({ navigation }: SelectDaysProps) => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <Group>
        <Pressable onPress={navigation.goBack}>
          <Icon icon="back" size={22} />
        </Pressable>
        <Text style={marginL.small} preset="subheading" mute>
          Select delivery timing
        </Text>
      </Group>

      <View style={$bottomContainer}>
        <View>
          <Days />
          <TimeSelection />
        </View>
        <Button text="Save" preset="reversed" onPress={navigation.goBack} />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingVertical: spacing.large,
  paddingHorizontal: spacing.medium,
  minHeight: "100%",
}

const $bottomContainer: ViewStyle = {
  flexGrow: 1,
  justifyContent: "space-between",
}
