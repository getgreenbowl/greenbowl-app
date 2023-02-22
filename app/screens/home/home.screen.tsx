import React, { useCallback, useRef, useMemo } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { colors, spacing } from "../../theme"
import { ScheduleYourMeal } from "./components/schedule-your-meal"
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet"
import { AddressOptions } from "./components/address-options"

export const HomeScreen = () => {
  const sheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ["50%"], [])

  const handleSnapPress = useCallback(() => {
    sheetRef.current?.snapToIndex(0)
  }, []);

  const closeSheet = () => {
    sheetRef.current?.close()
  }


  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
      />
    ),
    [],
  )

  return (
    <Screen preset="scroll" StatusBarProps={{
      backgroundColor: colors.purpleBg,
      style: 'light'
    }}  statusBarStyle="dark" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <Text preset="heading" style={$title}>
        Hello, vishal
      </Text>
      <Text style={$tagline}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, iusto.
      </Text>
      <ScheduleYourMeal handleSnapPress={handleSnapPress} />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        index={-1}
      >
        <BottomSheetView>
          <AddressOptions
          cancel={closeSheet}
          />
        </BottomSheetView>
      </BottomSheet>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.large + spacing.extraLarge,
  // paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
  backgroundColor: colors.purpleBg,
  flex: 1,
  height: "100%",
  width: "100%",
}

const $title: TextStyle = {
  marginBottom: spacing.small,
  color: colors.palette.neutral1,
}

const $tagline: TextStyle = {
  marginBottom: spacing.huge,
  color: colors.palette.neutral1,
}
