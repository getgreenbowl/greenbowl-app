import React from "react"
import { FlatList, Image, Pressable, View, ViewStyle } from "react-native"
import { Button, Card, Icon, Text } from "../../components"
import { Group } from "../../components/group.component"
import { PressableGroup } from "../../components/pressables"
import { AppStackScreenProps } from "../../navigators"
import { marginL, marginT, padding, paddingX, paddingY } from "../../theme/utils"
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
  return (
    <FlatList
      data={MealData}
      keyExtractor={(item) => item.name}
      numColumns={2}
      ListHeaderComponent={
        <PressableGroup
          pressProps={{
            onPress: navigation.goBack,
          }}
        >
          <Icon icon="caretLeft" size={22} />
          <Text style={marginL.tiny} preset="subheading" mute>
            Choose meals
          </Text>
        </PressableGroup>
      }
      renderItem={({ item }) => <MealCard item={item} navigation={navigation} />}
    />
  )
}

const MealCard = ({ item, navigation }) => {
  return (
    <Pressable onPress={() => navigation.push("mealDetail")} style={$mealCard}>
      <Card
        FooterComponent={
          <Button
            LeftAccessory={() => <Icon icon="plusCircle" size={20} />}
            style={[paddingY.tiny, { minHeight: 10 }]}
          />
        }
        ContentComponent={
          <View style={$singleMealContainer}>
            <Image source={item.img} style={{ width: 120, height: 120 }} />
            <Group wrap>
              {["salad", "low-calorie", "healthy"].map((tag) => {
                return <TagPill size="small" key={tag} tag={tag} selected />
              })}
            </Group>
            <Text text={item.name} size="xs" weight="semiBold" style={marginT.small} />

            {/* <Group style={marginT.small} >
        <View style={marginX.tiny}>
          <Text size="xxs">Protien</Text>
          <Text size="xxs">45g</Text>
        </View>
        <View style={marginX.tiny}>
          <Text size="xxs">Fat</Text>
          <Text size="xxs">45g</Text>
        </View>
        <View style={marginX.tiny}>
          <Text size="xxs">Carbs</Text>
          <Text size="xxs">45g</Text>
        </View>
      </Group> */}
          </View>
        }
      />
    </Pressable>
  )
}

const $singleMealContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const $mealCard: ViewStyle = {
  flex: 1,
  margin: 10,
  // height: 200,
  backgroundColor: "#f5f5f5",
  alignItems: "center",
  justifyContent: "center",
}
