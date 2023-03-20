import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Text } from "../../components"
import { Group } from "../../components/group.component"
import { useArray } from "../../hooks/use-array"
import { useStores } from "../../models" // @demo remove-current-line
import { AppStackScreenProps } from "../../navigators" // @demo remove-current-line
import { colors, spacing } from "../../theme"
import { marginY } from "../../theme/utils"
import { useHeader } from "../../utils/useHeader" // @demo remove-current-line
import { TagPill } from "./components/tag-pill.component"

interface OnboardingProps extends AppStackScreenProps<"Onboarding"> {} // @demo remove-current-line

const possibleTags = [
  "healthy",
  "gujarati",
  "chinese",
  "punjabi",
  "fast-food",
  "salads",
  "kathyawadi",
  "jain",
  "swaminarayan",
  "fruits",
]

export const Onboarding: FC<OnboardingProps> = observer(function WelcomeScreen(
  _props, // @demo remove-current-line
) {
  // @demo remove-block-start
  const { navigation } = _props
  const { insertOrRemove, value } = useArray({
    value: [],
  })

  const {
    authenticationStore: { logout },
  } = useStores()

  function goNext() {
    navigation.navigate("main", { screen: "home" })
  }

  useHeader({
    onRightPress: logout,
  })
  // @demo remove-block-end

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text testID="welcome-heading" style={$welcomeHeading} preset="heading">
          Welcome to greenbowl
        </Text>
        <Text preset="subheading">Tell us your goals.</Text>
      </View>

      <View style={$bottomContainer}>
        <View>
          <Button onPress={goNext} text="I want to loose weight" style={marginY.small}  />
          <Button onPress={goNext} text="I want to gain weight" style={marginY.small}  />
          <Button onPress={goNext} text="I want to stay fit" style={marginY.small}  />
        </View>

      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  justifyContent: "center",
  alignItems: 'center',
  paddingHorizontal: spacing.large,
  paddingVertical: spacing.small,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  // flexBasis: "43%",
  backgroundColor: colors.palette.neutral1,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.large,
  justifyContent: "space-around",
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.medium,
}
