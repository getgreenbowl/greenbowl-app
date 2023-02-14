import React, { useMemo, useState } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../../components"
import { Box } from "../../components/box"
import { Link } from "../../components/link-text"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"

interface RegisterScreenProps extends AppStackScreenProps<"Register"> {}


export const RegisterScreen = (props: RegisterScreenProps) => {
    const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)

    const PasswordRightAccessory = useMemo(
        () =>
          function PasswordRightAccessory(props: TextFieldAccessoryProps) {
            return (
              <Icon
                icon={isAuthPasswordHidden ? "view" : "hidden"}
                color={colors.palette.neutral800}
                containerStyle={props.style}
                onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
              />
            )
          },
        [isAuthPasswordHidden],
      )


    return     <Screen
    preset="auto"
    contentContainerStyle={$screenContentContainer}
    safeAreaEdges={["top", "bottom"]}
  >
    <Text testID="login-heading" text="Meal Service" preset="heading" style={$signIn} />
    <Text
      preset="subheading"
      text="Get your daily supply of quality food. Register now !"
      style={$enterDetails}
    />

    <TextField
      containerStyle={$textField}
      autoCapitalize="none"
      autoComplete="email"
      autoCorrect={false}
      label="Name"
      placeholder="enter your name"
    />
        <TextField
      containerStyle={$textField}
      keyboardType="numeric"
      label="Mobile No."
      placeholder="enter your mobile number"
    />

    <TextField
      containerStyle={$textField}
      autoCapitalize="none"
      autoComplete="password"
      autoCorrect={false}
      secureTextEntry={isAuthPasswordHidden}
      label="Password"
      placeholder="choose a password"
      RightAccessory={PasswordRightAccessory}
    />

    <Button
      testID="register-button"
      text="Register"
      style={$tapButton}
      preset="reversed"
    />
    <Box>
      <Text size="xs">
        Already have an account ?&nbsp;
        <Link
          onPress={() => {
            props.navigation.push("Login")
          }}
        >
          Login
        </Link>{" "}
      </Text>
    </Box>
  </Screen>
}

const $screenContentContainer: ViewStyle = {
    paddingVertical: spacing.huge,
    paddingHorizontal: spacing.large,
  }
  
  const $signIn: TextStyle = {
    marginBottom: spacing.small,
  }
  
  const $enterDetails: TextStyle = {
    marginBottom: spacing.huge,
  }
  
  
  const $textField: ViewStyle = {
    marginBottom: spacing.large,
  }
  
  const $tapButton: ViewStyle = {
    marginTop: spacing.extraSmall,
  }
  