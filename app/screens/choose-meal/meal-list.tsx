import { StatusBar } from "expo-status-bar"
import React, { useEffect } from "react"
import { FlatList, Image, ImageStyle, Pressable, View, ViewStyle } from "react-native"
import { Button, Card, Icon, Text } from "../../components"
import { BackButton } from "../../components/back-button"
import { Group } from "../../components/group.component"
import { AppStackScreenProps } from "../../navigators"
import mealStore from "../../store/meal-selection.store"
import { colors, spacing } from "../../theme"
import { marginL, marginR, marginT } from "../../theme/utils"
import { TagPill } from "../onboarding/components/tag-pill.component"
import { Fetcher } from "../../services/api/fetcher"
const fp = require("../../../assets/images/food-plate.png")

interface MealListProps extends AppStackScreenProps<"mealList"> {}

export const MealList = ({ navigation }: MealListProps) => {
  const addMeal = mealStore((state) => state.addMeal)
  const meals = mealStore((state) => state.meals)
  const mealList = mealStore((state) => state.mealList)
  const setMealList = mealStore((state) => state.setMealList)

  useEffect(() => {
    fetchMeals()
    return () => {
      //
    }
  }, [])

  const fetchMeals = async () => {
    try {
      const meals = await Fetcher.get("/items/simple-list")
      setMealList(meals.data.data)
    } catch (error) {
      console.log(error, "check me")
    }
  }

  return (
    <>
      <StatusBar style={"dark"} />
      <FlatList
        data={mealList}
        style={$flatListMargin}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<BackButton onPress={navigation.goBack} style={marginL.small} />}
        renderItem={({ item }) => (
          <MealCard
            item={item}
            navigation={navigation}
            addMeal={addMeal}
            added={meals.includes(item.name)}
          />
        )}
      />
    </>
  )
}

const MealCard = ({ item, navigation, addMeal, added }) => {
  const leftAccessory = () => {
    if (added) {
      return <Icon icon="delete" size={15} style={marginR.tiny} color={colors.palette.angry500} />
    }
    return <Icon icon="add" size={15} style={marginR.tiny} />
  }

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("mealDetail", {
          id: item.id,
        })
      }
      style={$mealCard}
    >
      <Card
        style={{ borderRadius: spacing.borderRadius }}
        ContentComponent={
          <Group style={$singleMealContainer}>
            <View>
              <Group>
                <View>
                  <Text text={item.name} size="xs" weight="semiBold" />
                  <Text text={item.description} size="xxs" />
                </View>
              </Group>

              <Group wrap style={marginT.small}>
                {["salad", "low-calorie", "healthy"].map((tag) => {
                  return <TagPill size="small" key={tag} tag={tag} selected />
                })}
              </Group>
            </View>
            <View style={$imageContainer}>
              <Image source={fp} style={$imageSize} />
              <Button
                style={$buttonAdd}
                onPress={() => addMeal(item.name)}
                text={added ? "Remove" : "Add"}
                LeftAccessory={leftAccessory}
              />
            </View>
          </Group>
        }
      />
    </Pressable>
  )
}

const $singleMealContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "space-between",
}

const $flatListMargin: ViewStyle = {
  marginTop: spacing.large + 5,
  // backgroundColor: colors.palette.neutral4
}

const $mealCard: ViewStyle = {
  flex: 1,
  margin: spacing.small,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: spacing.borderRadius,
}

const $buttonAdd: ViewStyle = {
  minHeight: 15,
  paddingVertical: spacing.tiny,
  paddingHorizontal: spacing.tiny,
  position: "absolute",
  bottom: "0%",
}

const $imageContainer: ViewStyle = {
  position: "relative",
  borderWidth: 1,
  borderColor: colors.palette.neutral5,
  borderRadius: spacing.borderRadius,
}

const $imageSize: ImageStyle = {
  width: 120,
  height: 120,
}
