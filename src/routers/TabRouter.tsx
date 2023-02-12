import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type TabRouterParams = {
  Home: undefined;
};

const Tabs = createBottomTabNavigator<TabRouterParams>();

export const TabRouter = () => {
  /***************		JSX		***************/

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false}}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              size="5xl"
              as={MaterialCommunityIcons}
              name={focused ? "home" : "home-outline"}
              color={focused ? "primary.500" : "white"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
