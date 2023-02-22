import React from "react"
import { View, ViewStyle, ScrollView, Pressable } from "react-native"
import { Icon, Text } from "../../../components"
import { Group } from "../../../components/group.component"
import { colors, spacing } from "../../../theme"

type AddressOptionType = {
  cancel: () => void
}

export const AddressOptions = ({ cancel }: AddressOptionType) => {
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
      <Group style={$spacing}>
        <Icon icon="home" size={30} />
        <View>
          <Text weight="semiBold" style={$spacingLeft} size="lg">
            Home
          </Text>
          <Text style={$spacingLeft} size="sm" ellipsizeMode="tail" numberOfLines={1}>
            c-14 yagnapurush residency, kalali, vadodara
          </Text>
        </View>
      </Group>
      <Group style={$spacing}>
        <Icon icon="briefcase" size={30} />
        <View>
          <Text weight="semiBold" style={$spacingLeft} size="lg">
            Work
          </Text>
          <Text style={$spacingLeft} size="sm">
            419 park paradise, vadsar, vadodara
          </Text>
        </View>
      </Group>
    </ScrollView>
  )
}

const $container: ViewStyle = {
  paddingHorizontal: spacing.small,
}

const $spacing: ViewStyle = {
  paddingTop: spacing.large,
}

const $spacingLeft: ViewStyle = {
  paddingLeft: spacing.small,
}
