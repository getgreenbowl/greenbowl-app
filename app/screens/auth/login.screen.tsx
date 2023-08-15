import { v_user as vUser } from "greenbowl-schema"
import React, { FC, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ToastAndroid, ViewStyle, View } from "react-native" // eslint-disable-line
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../../components"
import { Box } from "../../components/box"
import { Link } from "../../components/link-text"
import { useForm } from "../../hooks/use-form/user-form"
import { AppStackScreenProps } from "../../navigators"
import { loginUser } from "../../services/api/auth/auth.api"
import { colors, spacing } from "../../theme"
import { Storage } from "../../utils/storage"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"
import { Group } from "../../components/group.component"
import { marginB } from "../../theme/utils"
import Logo from "../../components/logo"
interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(props) {
  const authPasswordInput = useRef<TextInput>()
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const {
    authenticationStore: { setAuthToken },
  } = useStores()

  const { getRnInputProps, ...form } = useForm({
    initialValues: {
      mobile: null,
      password: null,
    },
    rules: vUser.pick({ mobile: true, password: true }),
  })

  const login = async () => {
    try {
      const valid = form.validate()
      if (!valid) {
        return
      }

      const { data } = await loginUser(form.values)
      form.reset()
      console.log(data.data.user, "this is userdata")

      setAuthToken(data.data.token)
      Storage.set("token", data.data.token)
      Storage.set("user", data.data.user)
      props.navigation.navigate("Onboarding")
    } catch (error: any) {
      ToastAndroid.show(error.data || "Something went wrong", ToastAndroid.SHORT)
    }
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral8}
            containerStyle={props.style}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Group style={marginB.large}>
        <Logo />
        <View>
          <Text preset="heading" text="greenbowl" style={$enterDetails} />
          <Text
            preset="subheading"
            text="Welcome back. Login to your account."
            style={$enterDetails}
          />
        </View>
      </Group>
      <TextField
        containerStyle={$textField}
        keyboardType="numeric"
        label="Mobile No."
        placeholder="enter your mobile number"
        {...getRnInputProps("mobile")}
      />

      <TextField
        ref={authPasswordInput}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        label="Password"
        placeholder="enter your password"
        RightAccessory={PasswordRightAccessory}
        {...getRnInputProps("password")}
      />

      <Button
        testID="login-button"
        text="Log In"
        style={$tapButton}
        preset="reversed"
        onPress={login}
      />
      <Box>
        <Text size="xs">
          Don&apos;t have an account?&nbsp;
          <Link
            onPress={() => {
              props.navigation.push("Register")
            }}
          >
            Register now!
          </Link>{" "}
        </Text>
      </Box>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $enterDetails: TextStyle = {
  marginLeft: spacing.small,
  flex: 1,
  flexWrap: "wrap",
}

const $textField: ViewStyle = {
  marginBottom: spacing.large,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}
