import React from "react"
import { FlatList, View, ViewStyle, Image } from "react-native"
import { Card, Icon, Screen, Text } from "../../components"
import { Group } from "../../components/group.component"
import { PressableGroup } from "../../components/pressables"
import { AppStackScreenProps } from "../../navigators"
import { spacing } from "../../theme"
import { marginL, marginT, marginX, marginY } from "../../theme/utils"
import { TagPill } from "../onboarding/components/tag-pill.component"
const fp = require("../../../assets/images/food-plate.png")
const fp2 = require("../../../assets/images/food-plate2.png")
const fp3 = require("../../../assets/images/fp3.jpeg")
const fp4 = require("../../../assets/images/fp4.webp")
const fp5 = require("../../../assets/images/fp5.webp")

interface MealListProps extends AppStackScreenProps<"mealList"> {}

const MealData = [
  {
    name: "White sauce pasta",
  },
  {
    name: "Mexican corn beans",
  },
  {
    name: "Hakka noodles",
  },
  {
    name: "Jeera rice, daal fry",
  },
]

export const MealList = ({ navigation }: MealListProps) => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <PressableGroup
        pressProps={{
          onPress: navigation.goBack,
        }}
      >
        <Icon icon="caretLeft" size={22} />
        <Text style={marginL.tiny} preset="subheading" mute>
          Choose meal
        </Text>
      </PressableGroup>

      <View style={marginY.small}>
        <Text preset="subheading" text="Popular meals" style={marginL.tiny} />
        <FlatList
          style={marginT.small}
          data={MealData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Card
              style={marginX.tiny}
              ContentComponent={
                <View style={$singleMealContainer}>
                  <Image source={fp3} style={{ width: 125, height: 125 }} />
                  <Group wrap>
                    {["salad", 'low-calorie'].map((tag) => {
                      return <TagPill size="small" key={tag} tag={tag} selected />
                    })}
                  </Group>

                  <Text text={item.name} size="xs" weight="semiBold" style={marginT.small} />
                </View>
              }
            />
          )}
        />
      </View>

      <View style={marginY.small}>
        <Text size="md" weight="semiBold" text="Meals tailored for you" style={marginL.tiny} />
        <FlatList
          style={marginT.small}
          data={MealData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Card
            style={marginX.tiny}
            ContentComponent={
              <View style={$singleMealContainer}>
                <Image source={fp5} style={{ width: 125, height: 125 }} />
                <Group wrap>
                  {["healthy", "gujarati"].map((tag) => {
                    return <TagPill size="small" key={tag} tag={tag} selected />
                  })}
                </Group>

                <Text text={item.name} size="xs" weight="semiBold" style={marginT.small} />
              </View>
            }
          />
          )}
        />
      </View>

      <View style={marginY.small}>
        <Text preset="subheading" text="Healthy options" style={marginL.tiny} />
        <FlatList
          style={marginT.small}
          data={MealData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Card
            style={marginX.tiny}
            ContentComponent={
              <View style={$singleMealContainer}>
                <Image source={fp} style={{ width: 125, height: 125 }} />
                <Group wrap>
                  {["healthy", "gujarati"].map((tag) => {
                    return <TagPill size="small" key={tag} tag={tag} selected />
                  })}
                </Group>

                <Text text={item.name} size="xs" weight="semiBold" style={marginT.small} />
              </View>
            }
          />
          )}
        />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingVertical: spacing.large,
  paddingHorizontal: spacing.medium,
  minHeight: "100%",
}

const $singleMealContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}
