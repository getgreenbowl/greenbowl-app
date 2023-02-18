import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"

import { HomeScreen } from "../screens/home/home.screen"
import { MyMenu } from "../screens/my-menu/my-menu.screen"
import { Preference } from "../screens/preference/preference.screen"
import { SearchScreen } from "../screens/search/search.screen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./app.navigator"


export type MainTabParamList = {
  home: undefined
  search: undefined
  preference: undefined
  mymenu: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainTabParamList>()

export function MainNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => <Icon icon="components" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => <Icon icon="community" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="preference"
        component={Preference}
        options={{
          tabBarLabel: "Preference",
          tabBarIcon: ({ focused }) => <Icon icon="podcast" color={focused && colors.tint} />,
        }}
      />

      <Tab.Screen
        name="mymenu"
        component={MyMenu}
        options={{
          tabBarLabel: "My menu",
          tabBarIcon: ({ focused }) => <Icon icon="debug" color={focused && colors.tint} />,
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}

// @demo remove-file
