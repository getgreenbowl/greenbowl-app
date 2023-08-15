import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated"
import { Button, Text } from "../../components"
import { AppStackScreenProps } from "../../navigators" // @demo remove-current-line
import { colors, spacing } from "../../theme"
import { marginY, paddingY } from "../../theme/utils"
import { TagPill } from "./components/tag-pill.component"
import { preferenceStore } from "../../store/preference.store"

interface OnboardingProps extends AppStackScreenProps<"Onboarding"> {} // @demo remove-current-line

export const Onboarding: FC<OnboardingProps> = observer(function WelcomeScreen(
  _props, // @demo remove-current-line
) {
  const { navigation } = _props
  const preference = preferenceStore((state) => state)
  // const [preference, setPreference] = useState({
  //   days: "",
  //   breakfast: false,
  //   lunch: false,
  //   dinner: false,
  // })

  const [active, setActive] = useState(0)

  const handleNext = () => {
    if (active === 0) {
      return setActive(1)
    }
    navigation.navigate("main")
  }

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text style={$welcomeHeading} size="xl">
          Welcome to greenbowl
        </Text>
        <Text>We help you to eat better</Text>
      </View>

      <View style={$bottomContainer}>
        {active === 0 ? (
          <Animated.View entering={FadeInDown.duration(200)}>
            <Text>Send me meals for...</Text>
            <TagPill
              onPress={() => preference.toggleOption("breakfast")}
              tag="Breakfast"
              selected={preference.breakfast}
              size="large"
              style={{ ...marginY.small, ...paddingY.small }}
            />
            <TagPill
              onPress={() => preference.toggleOption("lunch")}
              tag="Lunch"
              selected={preference.lunch}
              size="large"
              style={{ ...marginY.small, ...paddingY.small }}
            />
            <TagPill
              onPress={() => preference.toggleOption("dinner")}
              tag="Dinner"
              selected={preference.dinner}
              size="large"
              style={{ ...marginY.small, ...paddingY.small }}
            />

            <Text mute>You can skip a meal before 2 hours of delivery.</Text>
          </Animated.View>
        ) : null}
        {active === 1 ? (
          <Animated.View entering={FadeInRight.duration(200)}>
            <Text>Send me healthier food for...</Text>
            <TagPill
              onPress={() => preference.setDays("7")}
              tag="7 days"
              selected={preference.days === "7"}
              size="large"
              style={{ ...marginY.small, ...paddingY.small }}
            />
            <TagPill
              onPress={() => preference.setDays("30")}
              tag="30 days"
              selected={preference.days === "30"}
              size="large"
              style={{ ...marginY.small, ...paddingY.small }}
            />
            <TagPill
              onPress={() => preference.setDays("60")}
              tag="60 days"
              selected={preference.days === "60"}
              size="large"
              style={{ ...marginY.small, ...paddingY.small }}
            />
            <Text mute>You can skip a meal before 2 hours of delivery.</Text>
          </Animated.View>
        ) : null}
        <Button onPress={handleNext} text="Next" style={marginY.medium} />
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
  alignItems: "center",
  paddingVertical: spacing.small,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  backgroundColor: "#fff",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.large,
  justifyContent: "center",
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.medium,
}
