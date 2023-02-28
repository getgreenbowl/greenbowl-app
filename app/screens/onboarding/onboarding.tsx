import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Text } from "../../components"
import { Group } from "../../components/group.component"
import { useArray } from "../../hooks/use-array"
import { useStores } from "../../models" // @demo remove-current-line
import { AppStackScreenProps } from "../../navigators" // @demo remove-current-line
import { colors, spacing } from "../../theme"
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

const possibleTimes = ["Lunch", "Dinner", "Both"] as const

export const Onboarding: FC<OnboardingProps> = observer(function WelcomeScreen(
  _props, // @demo remove-current-line
) {
  // @demo remove-block-start
  const { navigation } = _props
  const { insertOrRemove, value } = useArray({
    value: [],
  })
  const {
    insertOrRemove: insertTimes,
    value: times,
    remove,
  } = useArray({
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

  // const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"]);

  const handleTimeSelection = (item) => {
    if (item === "Both") {
      insertTimes(item)
      remove("Lunch")
      remove("Dinner")
    } else {
      insertTimes(item)
      remove("Both")
    }
  }

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text testID="welcome-heading" style={$welcomeHeading} preset="heading">
          Select your preferences.
        </Text>
        <Text preset="subheading">let us know your taste.</Text>
      </View>

      <View style={$bottomContainer}>
        <Group style={$pillContainer} wrap>
          {possibleTags.map((item) => {
            return (
              <TagPill
                tag={item}
                key={item}
                style={{
                  marginVertical: spacing.tiny,
                }}
                onPress={() => insertOrRemove(item)}
                selected={value.includes(item)}
              />
            )
          })}
        </Group>

        <View>
          <Text preset="subheading">I will have</Text>
          <Group style={$group} content="space-between">
            {possibleTimes.map((time) => {
              return (
                <TagPill
                  size="large"
                  style={{ ...$timesPill, ...$mx }}
                  onPress={() => handleTimeSelection(time)}
                  tag={time}
                  selected={times.includes(time)}
                  key={time}
                />
              )
            })}
          </Group>

          <Button testID="next-screen-button" preset="reversed" onPress={goNext} text="Let's go!" />
        </View>
      </View>
    </View>
  )
})

const $pillContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  justifyContent: "center",
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

const $timesPill: ViewStyle = {
  flexBasis: "30%",
}

const $mx: ViewStyle = {
  marginVertical: 1,
}

const $group: ViewStyle = {
  marginBottom: spacing.medium,
  marginTop: spacing.tiny,
}
