import React, { useEffect, useState } from "react"
import { Image, ImageStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { BackButton } from "../../components/back-button"
import { Group } from "../../components/group.component"
import { spacing } from "../../theme"
import { margin, marginT } from "../../theme/utils"
import { TagPill } from "../onboarding/components/tag-pill.component"
import { Fetcher } from "../../services/api/fetcher"
import { TItem } from "greenbowl-schema"

const fp = require("../../../assets/images/food-plate.png")

export const MealDetail = ({ navigation, route }) => {
  // const addMeal = mealStore((state) => state.addMeal)
  const [meal, setMeal] = useState(null)
  const { id } = route.params

  useEffect(() => {
    fetchMeal()
    return () => {
      // cancel request
    }
  }, [])

  const fetchMeal = async () => {
    try {
      const meals = await Fetcher.get<TItem>(`/items/details/${id}`)
      setMeal(meals.data.data)
    } catch (error) {
      console.log(error, "check me")
    }
  }

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <View style={$semiContainer}>
        <View>
          <BackButton onPress={navigation.goBack} />
          <Group content="center">
            <Text size="lg" weight="semiBold">
              {meal?.name}
            </Text>
          </Group>

          <Group style={marginT.massive} content="around">
            <Image source={fp} style={$imgSize} />
            <View>
              <Group>
                <View style={margin.medium}>
                  <Text size="md">Protien</Text>
                  <Text size="sm" weight="semiBold">
                    {meal?.protien}gm
                  </Text>
                </View>
                <View style={margin.medium}>
                  <Text size="md">Energy</Text>
                  <Text size="sm" weight="semiBold">
                    {meal?.energy}gm
                  </Text>
                </View>
              </Group>
              <Group>
                <View style={margin.medium}>
                  <Text size="md">Fat</Text>
                  <Text size="sm" weight="semiBold">
                    {meal?.fat}gm
                  </Text>
                </View>
                <View style={margin.medium}>
                  <Text size="md">Carbs</Text>
                  <Text size="sm" weight="semiBold">
                    {meal?.carbs}gm
                  </Text>
                </View>
              </Group>
            </View>
          </Group>

          <View style={marginT.medium}>
            <Text preset="subheading">Description</Text>
            <Text size="xs" ellipsizeMode="tail" numberOfLines={3}>
              {meal?.description}
            </Text>
          </View>

          {meal?.ingredients.length ? (
            <View style={marginT.large}>
              <Text preset="subheading">Ingredients</Text>
              <Group wrap>
                {meal?.ingredients.map((item) => {
                  return <TagPill tag={item.Ingredient.name} key={item.name} selected />
                })}
              </Group>
            </View>
          ) : null}
        </View>
        <Button text="Bookmark" preset="reversed" />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingVertical: spacing.large,
  paddingHorizontal: spacing.medium,
  minHeight: "100%",
}

const $imgSize: ImageStyle = { width: 160, height: 160 }

const $semiContainer: ViewStyle = {
  flexGrow: 1,
  justifyContent: "space-between",
}
