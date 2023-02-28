import React from "react"
import { FlatList, View, ViewStyle } from "react-native"
import { Card, Icon, Screen, Text } from "../../components"
import { PressableGroup } from "../../components/pressables"
import { AppStackScreenProps } from "../../navigators"
import { spacing } from "../../theme"
import { marginL, marginT, marginX, marginY } from "../../theme/utils"

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
            <Card style={marginX.tiny} HeadingComponent={<Text text={item.name} />} />
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
            <Card style={marginX.tiny} HeadingComponent={<Text text={item.name} />} />
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
            <Card style={marginX.tiny} HeadingComponent={<Text text={item.name} />} />
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
