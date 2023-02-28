import React from "react"
import { View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../../components"
import { PressableGroup } from "../../components/pressables"
import { AppStackScreenProps } from "../../navigators"
import { spacing } from "../../theme"
import { marginL } from "../../theme/utils"
import { Days } from "./components/days"
import { TimeSelection } from "./components/time"

interface SelectDaysProps extends AppStackScreenProps<"selectDays"> {}

export const SelectDays = ({ navigation }: SelectDaysProps) => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <PressableGroup pressProps={{
            onPress:navigation.goBack
        }}>
          <Icon icon="caretLeft" size={22} />
          <Text style={marginL.tiny} preset="subheading" mute>
          Select date and time
        </Text>
        </PressableGroup>
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
