import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Text } from "../../components"
import { Group } from "../../components/group.component";
import { useStores } from "../../models"; // @demo remove-current-line
import { AppStackScreenProps } from "../../navigators"; // @demo remove-current-line
import { colors, spacing } from "../../theme"
import { marginR, marginY } from "../../theme/utils"
import { useHeader } from "../../utils/useHeader"; // @demo remove-current-line

interface OnboardingProps extends AppStackScreenProps<"Onboarding"> {} // @demo remove-current-line

export const Onboarding: FC<OnboardingProps> = observer(function WelcomeScreen(
  _props, // @demo remove-current-line
) {
  // @demo remove-block-start
  const { navigation } = _props

  const {
    authenticationStore: { logout },
  } = useStores()


  useHeader({
    onRightPress: logout,
  })
  // @demo remove-block-end

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text style={$welcomeHeading} size="xl">
          Welcome to greenbowl
        </Text>
        <Text>Fresh, plant based meals.</Text>
      </View>
   

      <View style={$bottomContainer}>
      <Group content="center">
    <Image source={require('../../../assets/images/plant-bowl.gif')} style={$imageMeal} />
    </Group>
     
        <View>
          <Button
            LeftAccessory={() => <Icon icon="bell" style={marginR.large} color={colors.purpleBg} />}
            onPress={() => navigation.navigate('main', { screen: 'home'})}
            text="I want to subscribe"
            style={marginY.small}
          />
          <Button 
          LeftAccessory={() => <Icon icon='leaf' color={colors.greenBg} style={marginR.large} />}
          onPress={() => navigation.navigate('mealList')} text="I want to order" style={marginY.small} />
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
  alignItems: "center",
  paddingVertical: spacing.small,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  // flexBasis: "43%",
  backgroundColor: '#fff',
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.large,
  justifyContent: "space-around",
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.medium,
}

const $imageMeal: ImageStyle = {height: 250, width: 250}