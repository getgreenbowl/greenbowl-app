import React from "react"
import { ViewStyle, TextStyle, View, Pressable } from "react-native"
import { Card, Icon, Text } from "../../../components"
import { Group } from "../../../components/group.component"
import { colors, spacing } from "../../../theme"

export const ScheduleYourMeal = ({handleSnapPress}) => {
  return (
    <Card
      style={$cardContainer}
      HeadingComponent={
        <Text size="lg" weight="semiBold">
          Schedule your meal
        </Text>
      }
      ContentComponent={
        <View>
            <SingleSelector 
            tx="Select Address"
            handleSnapPress={handleSnapPress}
            icon={<Icon icon="location" size={22} color={colors.palette.neutral1} />}
            />
            <SingleSelector 
            tx="Choose your meals"
            handleSnapPress={handleSnapPress}
            icon={<Icon icon="mealFastFood" size={22} color={colors.palette.neutral1} />}
            />
            <SingleSelector 
            tx="Select days"
            handleSnapPress={handleSnapPress}
            icon={<Icon icon="calendar" size={22} color={colors.palette.neutral1} />}
            />
        </View>
      }
    />
  )
}


function SingleSelector({tx, icon, handleSnapPress}: {tx: string, icon: React.ReactNode, handleSnapPress: any}) {
  
    return <Pressable onPress={handleSnapPress} >
   <View style={$selectors}>
    <Group>
    {icon}
      <Text style={$selectorText} size="md">
        {tx}
      </Text>
    </Group>

    <Icon icon="caretRight" color={colors.palette.neutral1} />
  </View>
    </Pressable>
  
}

const $cardContainer: ViewStyle = {
  padding: spacing.large,
  // marginVertical: spacing.large
}

const $selectors: ViewStyle = {
  backgroundColor: colors.orangeBg,
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.small,
  borderRadius: spacing.borderRadius,
  marginVertical: spacing.medium,
  flexDirection: "row",
  justifyContent: "space-between",
}

const $selectorText: TextStyle = {
  color: colors.palette.neutral1,
  paddingLeft: spacing.small,
  fontWeight: '900'
}
