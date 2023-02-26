import React from "react"
import { Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { Icon, Text } from "../../../components"
import { Group } from "../../../components/group.component"
import { colors, spacing } from "../../../theme"

type AddressOptionType = {
  cancel: () => void
  select: (address: any) => void
  // selected: string
}

const address = [
  {
    address: "419 park paradise, vadsar, vadodara",
    type: "work",
  },
  {
    address: "c-14 yagnapurush residency, kalali, vadodara",
    type: "home",
  },
] as const

export const AddressOptions = ({ cancel, select }: AddressOptionType) => {
  return (
    <ScrollView style={$container}>
      <Group content="space-between">
        <Text weight="semiBold" size="lg" mute>
          Choose delivery address
        </Text>
        <Pressable onPress={cancel}>
          <Icon icon="x" size={22} color={colors.palette.neutral9} />
        </Pressable>
      </Group>
      <Group style={$spacing}>
        <Icon icon="plusCircle" color={colors.orangeBg} size={30} />
        <Text weight="semiBold" style={[$spacingLeft, { color: colors.orangeBg }]} size="lg">
          Add new address
        </Text>
      </Group>
      {address.map((add) => {
        return (
          <Pressable key={add.address} onPress={() => select(add)} >
            <Group style={$spacing} >
              <Icon icon={add.type} size={30} />
              <View>
                <Group content="space-between">
                <Text weight="semiBold" style={$spacingLeft} size="lg">
                  {add.type}
                </Text>
                </Group>
                <Text style={$spacingLeft} size="sm">
                  {add.address}
                </Text>
              </View>
            </Group>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}

const $container: ViewStyle = {
  paddingHorizontal: spacing.small,
}

const $spacing: ViewStyle = {
  paddingTop: spacing.large,
  alignSelf: 'stretch'
}


const $spacingLeft: TextStyle = {
  paddingLeft: spacing.small,
  textTransform: "capitalize",
}
