import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TutorialScreen } from "../screens/TutorialScreen";
import { EmergencyScreen } from "../screens/EmergencyScreen";
import { TabRouter, TabRouterParams } from "./TabRouter";
import { NavigatorScreenParams } from "@react-navigation/native";

export type MainRouterParams = {
  TabRouter: NavigatorScreenParams<TabRouterParams>;
  Tutorial: undefined;
  Emergency: undefined;
};

const Stack = createNativeStackNavigator<MainRouterParams>();

export const MainRouter = () => {
  /***************		JSX		***************/

  return (
    <Stack.Navigator
      initialRouteName="TabRouter"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TabRouter" component={TabRouter} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Emergency" component={EmergencyScreen} />
    </Stack.Navigator>
  );
};
