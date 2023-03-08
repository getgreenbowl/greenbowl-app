import React from "react"
import { FlatList, Image, ImageStyle, Pressable, View, ViewStyle } from "react-native"
import { Button, Card, Icon, Text } from "../../components"
import { BackButton } from "../../components/back-button"
import { Group } from "../../components/group.component"
import { AppStackScreenProps } from "../../navigators"
import mealStore from "../../store/meal-selection.store"
import { colors, spacing } from "../../theme"
import { marginL, marginT } from "../../theme/utils"
import { TagPill } from "../onboarding/components/tag-pill.component"
const fp = require("../../../assets/images/food-plate.png")
const fp3 = require("../../../assets/images/fp3.jpeg")
const fp5 = require("../../../assets/images/fp5.webp")

interface MealListProps extends AppStackScreenProps<"mealList"> {}

const MealData = [
  {
    name: "White sauce pasta",
    img: fp,
  },
  {
    name: "Mexican corn beans",
    img: fp,
  },
  {
    name: "Hakka noodles",
    img: fp3,
  },
  {
    name: "Jeera rice, daal fry",
    img: fp5,
  },
  {
    name: "White sauce pasta2",
    img: fp,
  },
  {
    name: "Mexican corn beans1",
    img: fp,
  },
  {
    name: "Hakka noodles1",
    img: fp3,
  },
  {
    name: "Jeera rice, daal fry1",
    img: fp5,
  },
]

export const MealList = ({ navigation }: MealListProps) => {
  const addMeal = mealStore((state) => state.addMeal)
  const meals = mealStore((state) => state.meals)

  return (
    <FlatList
      data={MealData}
      style={$flatListMargin}
      keyExtractor={(item) => item.name}
      // numColumns={2}
      ListHeaderComponent={<BackButton func={navigation.goBack} style={marginL.small} />}
      renderItem={({ item }) => (
        <MealCard
          item={item}
          navigation={navigation}
          addMeal={addMeal}
          added={meals.includes(item.name)}
        />
      )}
    />
  )
}

const MealCard = ({ item, navigation, addMeal, added }) => {
  const leftAccessory = () => {
    if (added) {
      return <Icon icon='delete' size={20} />
    }
    return <Icon icon="add" size={20} />
  }

  return (
    <Pressable onPress={() => navigation.push("mealDetail")} style={$mealCard}>
      <Card
        style={{ borderRadius: spacing.borderRadius + 10 }}
        ContentComponent={
          <Group style={$singleMealContainer}>
            <View>
              <Group>
                <View>
                  <Text text={item.name} size="xs" weight="semiBold" />
                  <Text text="this is the description of salad" size="xxs" />
                </View>
              </Group>

              <Group wrap style={marginT.small}>
                {["salad", "low-calorie", "healthy"].map((tag) => {
                  return <TagPill size="small" key={tag} tag={tag} selected />
                })}
              </Group>
            </View>
            <View style={$imageContainer}>
              <Image source={item.img} style={$imageSize} />
              <Button
                style={$buttonAdd}
                onPress={() => addMeal(item.name)}
                text={added ? 'Remove': 'Add'}
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
  backgroundColor: colors.palette.neutral4
}

const $mealCard: ViewStyle = {
  flex: 1,
  margin: spacing.small,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: spacing.borderRadius
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
  borderRadius: spacing.borderRadius
}

const $imageSize: ImageStyle = {
  width: 120,
  height: 120,
}
