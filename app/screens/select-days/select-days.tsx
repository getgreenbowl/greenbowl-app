import React from "react"
import { View, ViewStyle } from "react-native"
import { Button, Screen } from "../../components"
import { BackButton } from "../../components/back-button"
import { AppStackScreenProps } from "../../navigators"
import { spacing } from "../../theme"
import { Days } from "./components/days"
import { TimeSelection } from "./components/time"

interface SelectDaysProps extends AppStackScreenProps<"selectDays"> {}

export const SelectDays = ({ navigation }: SelectDaysProps) => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <BackButton onPress={navigation.goBack} />
      <View style={$bottomContainer}>
        <View>
          <Days />
          {/* <TimeSelection /> */}
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
