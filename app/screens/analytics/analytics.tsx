import React from "react"
import { View, ViewStyle } from "react-native"
import { VictoryChart, VictoryLine, VictoryTheme } from "victory-native"
import { Button, Card, Screen, Text } from "../../components"
import { Group } from "../../components/group.component"
import { colors, spacing } from "../../theme"
import { marginY, paddingL, paddingR } from "../../theme/utils"

export const Analytics = () => {
  return (
    <Screen
      StatusBarProps={{
        backgroundColor: colors.purpleBg,
        style: "light",
      }}
      contentContainerStyle={$container}
    >
      <Text text="vishal acharya" white size="sm" />
      <Text text="Health overview" style={marginY.medium} white size="xl" />
      <Group>
        <View style={[$cardContainer, paddingR.tiny]} >
          <Card
            style={$lBorderCalorie}
            HeadingComponent={<Text size="xxs">calorie intake this week</Text>}
            ContentComponent={
              <Group
             
              >
                <Text preset="heading">120</Text>
                <Text style={$alignSelf}>kcl</Text>
              </Group>
            }
          />
        </View>
        <View style={[$cardContainer, paddingL.tiny]}>
          <Card
          style={$lBorderGP}
            HeadingComponent={<Text size="xs">green points</Text>}
            ContentComponent={
              <Group>
                <Text preset="heading">30</Text>
              </Group>
            }
          />
        </View>
      </Group>
      <Card
        style={[marginY.tiny, $lBorderWeight]}
        HeadingComponent={<Text size="xs">weight</Text>}
        ContentComponent={
          <Group content="space-between">
            <View style={$center}>
              <Text preset="heading">66 kg</Text>
              <Text size="xxs" >last updated - 2 days ago</Text>
            </View>
            <Button text="Add weight" style={$addWeightBtn} />
          </Group>
        }
      />

      <VictoryChart
        theme={{
          ...VictoryTheme.grayscale,
          axis: {
            ...VictoryTheme.grayscale.axis,
            style: {
              ...VictoryTheme.grayscale.axis.style,
              axis: {
                ...VictoryTheme.grayscale.axis.style.axis,
                stroke: "#fff",
              },
              tickLabels: {
                ...VictoryTheme.grayscale.axis.style.tickLabels,
                stroke: "#fff",
              },
            },
          },
        }}
      >
        <VictoryLine
          style={{
            data: { stroke: "#ffffff" },
            parent: { border: "1px solid #fff" },
          }}
          data={[
            { x: 1, y: 65 },
            { x: 2, y: 64 },
            { x: 3, y: 63.5 },
            { x: 4, y: 62 },
            { x: 5, y: 61 },
            { x: 6, y: 62 },
            { x: 7, y: 62 },
          ]}
        />
      </VictoryChart>
    </Screen>
  )
}

const $container: ViewStyle = {
  backgroundColor: colors.purpleBg,
  minHeight: "100%",
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $cardContainer: ViewStyle = {
  flexBasis: "50%",
  flexGrow: 0,
  marginVertical: spacing.tiny,
}

const $alignSelf: ViewStyle = { alignSelf: "flex-end" }

const $center: ViewStyle = {
  // justifyContent: "center",
  // alignItems: "center",
  position: "relative",
}

const $addWeightBtn: ViewStyle = {
  minHeight: 10
}

const $lBorderCalorie: ViewStyle = {
  borderLeftWidth: 10,
  borderColor: colors.greenBg
}

const $lBorderGP: ViewStyle = {
  borderLeftWidth: 10,
  borderColor: colors.greenBg
}

const $lBorderWeight: ViewStyle = {
  borderLeftWidth: 10,
  borderColor: colors.redBg
}