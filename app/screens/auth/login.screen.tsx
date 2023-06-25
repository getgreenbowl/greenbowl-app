import { v_user as vUser } from "greenbowl-schema/index.js"
import React, { FC, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ToastAndroid, ViewStyle } from "react-native" // eslint-disable-line
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../../components"
import { Box } from "../../components/box"
import { Link } from "../../components/link-text"
import { useForm } from "../../hooks/use-form/user-form"
import { AppStackScreenProps } from "../../navigators"
import { loginUser } from "../../services/api/auth/auth.api"
import { colors, spacing } from "../../theme"
import { GLOBAL_CONSTANTS } from "../../utils/global-constants"
import { Storage } from "../../utils/storage"
import { StorageKeys } from "../../utils/storage/storage-keys"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"
interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(props) {
  const authPasswordInput = useRef<TextInput>()
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const {
    authenticationStore: {
      setAuthToken
    },
  } = useStores();

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

      const { data } = await loginUser(form.values);
      form.reset();
      setAuthToken(data.data.token);
      Storage.set(StorageKeys.token, data.data.token);
      props.navigation.navigate('Onboarding')
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
      <Text
        testID="login-heading"
        text={GLOBAL_CONSTANTS.brandName}
        preset="heading"
        style={$signIn}
      />
      <Text
        preset="subheading"
        text="Log in to your account using your mobile no."
        style={$enterDetails}
      />
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