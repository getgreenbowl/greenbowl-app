import React, { useState } from "react"
import { Pressable, View, ViewStyle } from "react-native"
import { Card, Text, Box, Icon } from "../../../components"
import { Group } from "../../../components/group.component"
import { colors, spacing } from "../../../theme"

const userMeals = [
  {
    type: "lunch",
    time: "12:30 pm",
    name: "Mexican corn beans",
    deliverAt: "Work",
  },
  {
    type: "dinner",
    time: "8:30 pm",
    name: "Hakka noodles",
    deliverAt: "Home",
  },
] as const

export const YourMeal = () => {
  const [current, _setcurrent] = useState("Mon");
  return (
    <Card
      style={$cardContainer}
      HeadingComponent={<Text size="lg" weight="semiBold" text="Your meals" />}
      ContentComponent={
        <View>
          <Group content="space-between">
            {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => {
              return <Day value={day} key={day} current={current} />
            })}
          </Group>
          {userMeals.map((meal) => {
            return <MealCard type={meal.type} key={meal.name} meta={meal} />
          })}
        </View>
      }
    />
  )
}

function Day({ value, current }) {
  const _value = value === current ? "Today" : value
  return (
    <View >
      <Text text={_value} />
    </View>
  )
}

function MealCard({ type, meta }) {
  const bg = type === "dinner" ? colors.darkGreenBg : colors.redBg
  return (
    <View style={$mealCard}>
      <Card
        style={{ backgroundColor: bg }}
        ContentComponent={
          <View>
            <Box>
              <Text preset="heading" white>
                {meta.time}
              </Text>
              <Text preset="subheading" white>
                {meta.name}
              </Text>
              <Group>
                <Icon icon="location" size={12} color={colors.palette.neutral1} />
                <Text white mute>
                  {meta.deliverAt}
                </Text>
              </Group>
            </Box>
          </View>
        }
        FooterComponent={
          <Group content="space-between">
            <View></View>
            <View>
              <Pressable>
                <Group>
                  <Icon icon="edit" size={12} color={colors.palette.neutral1} />
                  <Text text="Edit" white style={$ml} />
                </Group>
              </Pressable>
            </View>
          </Group>
        }
      />
    </View>
  )
}



const $cardContainer: ViewStyle = {
  padding: spacing.large,
  // marginVertical: spacing.large
}

const $ml: ViewStyle = {
  paddingLeft: spacing.tiny,
}

const $mealCard: ViewStyle = {
  marginTop: spacing.medium,
}
