import React from "react"
import { View, ViewStyle } from "react-native"
import { VictoryLine } from "victory-native"
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
    contentContainerStyle={$container}>
      <Text text="vishal acharya" white size='sm' />
      <Text text="Health overview" style={marginY.medium} white size='xl' />
      <Group>
        <View 
          style={[$cardContainer, paddingR.tiny]}
        >
        <Card
          HeadingComponent={<Text size="xxs" >calorie intake this week</Text>}
          ContentComponent={
            <Group  >
              <Text preset="heading">120</Text>
              <Text style={$alignSelf} >kcl</Text>
            </Group>
          }
        />
        </View>
       <View
        style={[$cardContainer, paddingL.tiny]} 
       >
       <Card 
        HeadingComponent={<Text size="xs" >salads consumed</Text>}
        ContentComponent={
          <Group  >
            <Text preset="heading">24</Text>
          </Group>
        }
         />
       </View>
       
      </Group>
      <Card
        style={marginY.tiny}
        HeadingComponent={<Text size="xs" >weight</Text>}
        ContentComponent={
          <View style={$center}>
            <Text preset="heading">66 kg</Text>
            <Text>last updated - 2 days ago</Text>
            <Button text="Add weight" style={$addWeightBtn} />
          </View>
        }
      />

      {/* <VictoryChart> */}
        <VictoryLine
          style={{
            data: { stroke: "#ffffff" },
            parent: { border: "1px solid #fff" },
          }}
          data={[
            { x: 1, y: 65 },
            { x: 2, y: 64 },
            { x: 3, y: 63 },
            { x: 4, y: 70 },
            { x: 5, y: 61 },
          ]}
        />
      {/* </VictoryChart> */}
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
  marginVertical: spacing.tiny
}

const $alignSelf: ViewStyle ={alignSelf: 'flex-end'}

const $center: ViewStyle = {
  // justifyContent: "center",
  // alignItems: "center",
  position: "relative",
}

const $addWeightBtn: ViewStyle = {
  minHeight: 10,
  position: "absolute",
  right: "-2%",
  top: "-40%",
}
