import React from "react"
import { Image, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../../components"
import { Group } from "../../components/group.component"
import { PressableGroup } from "../../components/pressables"
import { spacing } from "../../theme"
import { margin, marginB, marginT, marginX, marginY } from "../../theme/utils"
import { TagPill } from "../onboarding/components/tag-pill.component"

const fp = require("../../../assets/images/food-plate.png")

export const MealDetail = ({ navigation }) => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <View style={$semiContainer} >
      <View>
      <PressableGroup
        pressProps={{
          onPress: navigation.goBack,
        }}
      >
        <Icon icon="caretLeft" size={22} />
      </PressableGroup>
      <Group content="center">
        <Text size="lg" weight="semiBold">
          Creamy macroni pasta salad
        </Text>
      </Group>

      <Group style={marginT.massive} content="around">
        <Image source={fp} style={{ width: 160, height: 160 }} />
        <View>
          <Group>
            <View style={margin.medium}>
              <Text size="md">Protien</Text>
              <Text size="sm" weight="semiBold">
                45gm
              </Text>
            </View>
            <View style={margin.medium}>
              <Text size="md">Energy</Text>
              <Text size="sm" weight="semiBold">
                45gm
              </Text>
            </View>
          </Group>
          <Group>
            <View style={margin.medium}>
              <Text size="md">Fat</Text>
              <Text size="sm" weight="semiBold">
                45gm
              </Text>
            </View>
            <View style={margin.medium}>
              <Text size="md">Carbs</Text>
              <Text size="sm" weight="semiBold">
                45gm
              </Text>
            </View>
          </Group>
        </View>
      </Group>

      <View style={marginT.medium}>
        <Text preset="subheading">Description</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique ab excepturi
          voluptatum illo quaerat, quo asperiores quam provident molestias.
        </Text>
      </View>

      <View style={marginT.medium}>
        <Text preset="subheading">Ingredients</Text>
        <Group wrap>
          {["fortune oil", "potatoe", "onion", "garlic", "salt", "chillie", "wheat", "rice"].map(
            (item) => {
              return <TagPill tag={item} selected />
            },
          )}
        </Group>
      </View>
      </View>
        <Button text="Save" preset="reversed" onPress={navigation.goBack} />
      </View>

    </Screen>
  )
}

const $container: ViewStyle = {
  paddingVertical: spacing.large,
  paddingHorizontal: spacing.medium,
  minHeight: "100%",
}


const $semiContainer: ViewStyle = {
  flexGrow: 1,
  justifyContent: 'space-between'
}