import React, { useState } from "react"
import { Pressable, View, ViewStyle } from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"
import { Card, Text, Box, Icon } from "../../../components"
import { Group } from "../../../components/group.component"
import { colors, spacing } from "../../../theme"
import { marginR, marginT } from "../../../theme/utils"

const userMeals = [
  {
    type: "lunch",
    time: "12:30 pm",
    name: "Greek salad",
    deliverAt: "Work",
  },
  {
    type: "dinner",
    time: "8:30 pm",
    name: "Hummus salad",
    deliverAt: "Home",
  }
] as const

export const YourMeal = () => {
  const [current, _setcurrent] = useState("Mon")
  return (
    <Card
      style={$cardContainer}
      HeadingComponent={<Text size="md" weight="semiBold" text="Your meals" />}
      ContentComponent={
        <Animated.View style={marginT.small} entering={FadeInDown.duration(250).delay(5)}>
          <Group content="space-between">
            {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => {
              return <Day value={day} key={day} current={current} setSelected={_setcurrent} />
            })}
          </Group>
          {userMeals.map((meal) => {
            return <MealCard type={meal.type} key={meal.name} meta={meal} />
          })}
        </Animated.View>
      }
    />
  )
}

function Day({ value, current, setSelected }) {
  const _value = value === current ? "Today" : value;
  const _selectedDay = value === current ? $selectedDay : {}
  return (
    <Pressable onPress={() => setSelected(value)}>
      <View style={_selectedDay}>
        <Text size="xs" text={value} />
      </View>
    </Pressable>
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
              <Text size="xl" weight="bold" white>
                {meta.time}
              </Text>
              <Text size="sm" white>
                {meta.name}
              </Text>
              <Group>
                {/* <Icon icon="location" size={12} color={colors.palette.neutral1} /> */}
                <Text white mute size="xxs">
                  Delivering at {meta.deliverAt}
                </Text>
              </Group>
            </Box>
          </View>
        }
        FooterComponent={
          <Group content="space-between">
            <View></View>
            <View>
              <Group>
                <Pressable style={marginR.small}>
                  <Group>
                    <Icon icon="swap" size={12} color={colors.palette.neutral1} />
                    <Text text="Swap" white style={$ml} />
                  </Group>
                </Pressable>
                <Pressable>
                  <Group>
                    <Icon icon="skip" size={12} color={colors.palette.neutral1} />
                    <Text text="Skip" white style={$ml} />
                  </Group>
                </Pressable>
              </Group>
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


const $selectedDay: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: colors.purpleBg
}