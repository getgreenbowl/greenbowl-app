import React, { useCallback, useState } from "react"
import { TextStyle, ViewStyle } from "react-native"
import Modal from "react-native-modal"
import { Screen, Text } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import { AddressOptions } from "./components/address-options"
import { ScheduleYourMeal } from "./components/schedule-your-meal"
import { YourMeal } from "./components/your-meal"

interface HomeProps extends AppStackScreenProps<"main"> {}

export const HomeScreen = (props: HomeProps) => {
  const [showAddress, setshowAddress] = useState(false)
  const [address, setadress] = useState<{ address: string; type: "work" | "home" | "other" }>({
    address: "",
    type: "other",
  })

  const handleAction = useCallback((action: "address" | "meal" | "days") => {
    if (action === "address") {
      setshowAddress(true)
    }
    if (action === "days") {
      props.navigation.push("selectDays")
    }

    if (action === "meal") {
      props.navigation.push("mealList")
    }
  }, [])

  const closeSheet = () => {
    setshowAddress(false)
  }

  const selectAddress = (add) => {
    setadress(add)
    closeSheet()
  }

  return (
    <>
      <Screen
        preset="scroll"
        StatusBarProps={{
          backgroundColor: colors.purpleBg,
          style: "light",
        }}
        safeAreaEdges={["top"]}
        contentContainerStyle={$container}
      >
        <Text preset="heading" style={$title}>
          Hello, vishal
        </Text>
        <Text style={$tagline} size="xs">
          A freindly reminder to stay hydrated and drink water.
        </Text>
        <YourMeal />
        <ScheduleYourMeal address={address.address} handleAction={handleAction} />
      </Screen>

      <Modal
        isVisible={showAddress}
        style={$modalView}
        backdropTransitionOutTiming={0}
        onBackdropPress={() => setshowAddress(false)}
        onBackButtonPress={() => setshowAddress(false)}
        animationInTiming={100}
        animationOutTiming={50}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropTransitionInTiming={50}
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating
        useNativeDriver={true}
      >
        <AddressOptions select={selectAddress} cancel={closeSheet} />
      </Modal>
    </>
  )
}

const $container: ViewStyle = {
  paddingVertical: spacing.large + spacing.extraLarge,
  paddingHorizontal: spacing.large,
  backgroundColor: colors.purpleBg,
  minHeight: "100%",
}

const $title: TextStyle = {
  marginBottom: spacing.small,
  color: colors.palette.neutral1,
}

const $tagline: TextStyle = {
  marginBottom: spacing.huge,
  color: colors.palette.neutral1,
}

const $modalView: ViewStyle = {
  flex: 1,
  alignItems: "flex-end",
  flexDirection: "row",
  margin: 0,
}
