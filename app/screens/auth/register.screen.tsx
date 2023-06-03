import React, { useMemo, useState } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../../components"
import { Box } from "../../components/box"
import { Link } from "../../components/link-text"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import { z } from "zod";

interface RegisterScreenProps extends AppStackScreenProps<"Register"> { }


export const RegisterScreen = (props: RegisterScreenProps) => {
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isAuthConfPasswordHidden, setIsAuthConfPasswordHidden] = useState(true)
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

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

  const ConfPasswordRightAccessory = useMemo(
    () =>
      function ConfPasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthConfPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral8}
            containerStyle={props.style}
            onPress={() => setIsAuthConfPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  const validationSchema = z.object({
    name: z.string().min(2).max(50).nonempty(),
    mobile: z.string().min(10).max(10).regex(/^\d+$/),
    password: z.string().min(6).max(20),
    confirmPassword: z.string().refine((val) => val === password, {
      message: 'Passwords do not match',
    }),
  });

  const onPressRegister = () => {
      try {
        let valid = validationSchema.parse({ name, mobile, password, confirmPassword });
        if (valid) {
         props.navigation.goBack() 
        }
      } catch (error) {
        setErrors(error.formErrors.fieldErrors);
      }
  }
  
  return <Screen
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
      value={name}
      onChangeText={value => setName(value)}
      status={errors.name&&"error"}
    />
    <TextField
      containerStyle={$textField}
      keyboardType="numeric"
      label="Mobile No."
      placeholder="enter your mobile number"
      value={mobile}
      onChangeText={value =>setMobile(value) }
      status={errors.mobile&&"error"}
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
      value={password}
        onChangeText={value => setPassword(value)}
        status={errors.password && "error"}
    />
    <TextField
      containerStyle={$textField}
      autoCapitalize="none"
      autoComplete="password"
      autoCorrect={false}
      secureTextEntry={isAuthConfPasswordHidden}
      label="Confirm Password"
      placeholder="choose a Confirm password"
      RightAccessory={ConfPasswordRightAccessory}
      value={confirmPassword}
        onChangeText={value => setConfirmPassword(value)}
        status={errors.confirmPassword && 'error'}
    />

    <Button
      testID="register-button"
      text="Register"
      style={$tapButton}
      preset="reversed"
      onPress={()=>onPressRegister()}
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

const $errorText:TextStyle = {
    color: 'red',
    marginBottom: 10,
}
