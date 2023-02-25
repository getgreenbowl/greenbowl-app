import React, { useCallback, useRef, useMemo, useState } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { colors, spacing } from "../../theme"
import { ScheduleYourMeal } from "./components/schedule-your-meal"
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet"
import { AddressOptions } from "./components/address-options"
import { YourMeal } from "./components/your-meal"
import { Spacer } from "../../components/spacer"

export const HomeScreen = () => {
  const sheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ["50%"], [])
  const [address, setadress] = useState<{ address: string; type: "work" | "home" | "other" }>({
    address: "",
    type: "other",
  })

  const handleSnapPress = useCallback(() => {
    sheetRef.current?.snapToIndex(0)
  }, [])

  const closeSheet = () => {
    sheetRef.current?.close()
  }

  const selectAddress = (add) => {
    setadress(add)
    closeSheet()
  }

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop {...props} opacity={1} onPress={closeSheet} />,
    [],
  )

  return (
    <Screen
      preset="scroll"
      StatusBarProps={{
        backgroundColor: colors.purpleBg,
        style: "light",
      }}
      statusBarStyle="dark"
      safeAreaEdges={["top"]}
      contentContainerStyle={$container}
    >
      <Text preset="heading" style={$title}>
        Hello, vishal
      </Text>
      <Text style={$tagline}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, iusto.
      </Text>

      <YourMeal />

      <Spacer />

      <ScheduleYourMeal address={address.address} handleSnapPress={handleSnapPress} />

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        index={-1}
      >
        <BottomSheetView>
          <AddressOptions selected={address.address} select={selectAddress} cancel={closeSheet} />
        </BottomSheetView>
      </BottomSheet>
    </Screen>
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
